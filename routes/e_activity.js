var express = require('express');
var router = express.Router();
var block_access = require('../utils/block_access');
// Datalist
var filterDataTable = require('../utils/filterDataTable');

// Sequelize
var models = require('../models/');
var attributes = require('../models/attributes/e_activity');
var options = require('../models/options/e_activity');
var model_builder = require('../utils/model_builder');
var entity_helper = require('../utils/entity_helper');
var file_helper = require('../utils/file_helper');
var component_helper = require('../utils/component_helper');
var globalConfig = require('../config/global');
var fs = require('fs-extra');
var dust = require('dustjs-linkedin');
var SELECT_PAGE_SIZE = 10;
var moment = require('moment');
// Enum and radio managment
var enums_radios = require('../utils/enum_radio.js');
var activity_helper = require('../utils/activity_helper');

// Winston logger
var logger = require('../utils/logger');

router.get('/list', block_access.actionAccessMiddleware("activity", "read"), function (req, res) {
    var data = {
        "menu": "e_activity",
        "sub_menu": "list_e_activity"
    };

    data.toastr = req.session.toastr;
    req.session.toastr = [];

    res.render('e_activity/list', data);
});

router.post('/datalist', block_access.actionAccessMiddleware("activity", "read"), function (req, res) {

    /* Looking for include to get all associated related to data for the datalist ajax loading */
    var include = model_builder.getDatalistInclude(models, options, req.body.columns);
    filterDataTable("E_activity", req.body, include).then(function (rawData) {
        entity_helper.prepareDatalistResult('e_activity', rawData, req.session.lang_user).then(function (preparedData) {
            res.send(preparedData).end();
        }).catch(function (err) {
            console.log(err);
            logger.debug(err);
            res.end();
        });
    }).catch(function (err) {
        console.log(err);
        logger.debug(err);
        res.end();
    });
});

router.post('/subdatalist', block_access.actionAccessMiddleware("activity", "read"), function (req, res) {
    var start = parseInt(req.body.start || 0);
    var length = parseInt(req.body.length || 10);

    var sourceId = req.query.sourceId;
    var subentityAlias = req.query.subentityAlias;
    var subentityModel = entity_helper.capitalizeFirstLetter(req.query.subentityModel);
    var doPagination = req.query.paginate;

    var queryAttributes = [];
    for (var i = 0; i < req.body.columns.length; i++)
        if (req.body.columns[i].searchable == 'true')
            queryAttributes.push(req.body.columns[i].data);

    var include = {
        model: models[subentityModel],
        as: subentityAlias,
        include: {all: true}
    }
    if (doPagination == "true") {
        include.limit = length;
        include.offset = start;
    }

    models.E_activity.findOne({
        where: {id: parseInt(sourceId)},
        include: include
    }).then(function (e_activity) {
        if (!e_activity['count' + entity_helper.capitalizeFirstLetter(subentityAlias)]) {
            console.error('/subdatalist: count' + entity_helper.capitalizeFirstLetter(subentityAlias) + ' is undefined');
            return res.status(500).end();
        }

        e_activity['count' + entity_helper.capitalizeFirstLetter(subentityAlias)]().then(function (count) {
            var rawData = {
                recordsTotal: count,
                recordsFiltered: count,
                data: []
            };
            for (var i = 0; i < e_activity[subentityAlias].length; i++)
                rawData.data.push(e_activity[subentityAlias][i].get({plain: true}));

            entity_helper.prepareDatalistResult(req.query.subentityModel, rawData, req.session.lang_user).then(function (preparedData) {
                res.send(preparedData).end();
            }).catch(function (err) {
                console.log(err);
                logger.debug(err);
                res.end();
            });
        });
    });
});

router.get('/:id/display', block_access.isLoggedIn, function (req, res) {
    var id = req.params.id;
    var data = {};
    models.E_activity.findOne({where: {id: id, fk_id_team_team: req.session.passport.user.fk_id_team_team}, include: [{model: models.E_entry, as: 'r_entry'}]}).then(function (e_activity) {
        if (e_activity) {
            data.activityItemsHTML = '<div class="row">';
            var i = 0;
            var j = 0;
            //build activities HTML
            if (e_activity.r_entry.length) {
                e_activity.r_entry.forEach(function (r_entry) {
                    entity_helper.getPicturesBuffers(r_entry, "e_entry").then(function () {
                        data.activityItemsHTML += '<div class="col-md-3 col-xs-12">';
                        data.activityItemsHTML += '<span>' + r_entry.f_name + '</span>';
                        data.activityItemsHTML += '<div class="card sb-card vote-card">';
                        data.activityItemsHTML += '<a class="vote" href="#' + r_entry.id + '" data-toggle="collapse" href="#collapse' + r_entry.id + '" aria-expanded="false" aria-controls="collapse' + r_entry.id + '">';
                        data.activityItemsHTML += '<img title="' + r_entry.f_name + '"  class="card-img-top img img-responsive" src="data:image/;base64,' + r_entry.f_picture.buffer + '" alt="Item picture">';
                        data.activityItemsHTML += '</a>';
                        data.activityItemsHTML += '</div>';
                        data.activityItemsHTML += '<div class="collapse" id="collapse' + r_entry.id + '">';
                        data.activityItemsHTML += ' <div class="well">';
                        data.activityItemsHTML += (r_entry.f_comment || '');
                        data.activityItemsHTML += '  </div>';
                        data.activityItemsHTML += '</div>';
                        data.activityItemsHTML += '</div>';
                        i++;
                        j++;
                        if (i === 4) {
                            i = 0;
                            data.activityItemsHTML += '</div><div class="row">';
                        }
                        if (j === e_activity.r_entry.length) {
                            data.e_activity = e_activity;
                            data.activityItemsHTML += '</div>';
                            res.render('e_activity/display', data);
                        }
                    });
                });
            } else {
                data.e_activity = e_activity;
                data.activityItemsHTML += '</div>';
                res.render('e_activity/display', data);
            }


        } else {
            data.error = 404;
            logger.debug("No data entity found.");
            return res.render('common/error', data);
        }
    });
});

function addVotes(entries, user, activity, obj, powers) {
    var i = 0;
    var path = __dirname + '/../votes/' + moment().format('DDMMYYYY') + '_' + user.fk_id_team_team + '_' + activity.id + '.json';
    entries.forEach(function (e_entry) {
        i++;
        if (obj.users.indexOf(user.id) < 0)
            obj.users.push(user.id);
        if (obj.activity.entries[e_entry.f_name]) {
            obj.activity.entries[e_entry.f_name].point = parseInt(obj.activity.entries[e_entry.f_name]['point'] || 0) + 1;
        } else {
            obj.activity.entries[e_entry.f_name] = {
                id: e_entry.id,
                name: e_entry.f_name,
                point: 1
            };
        }
        if (powers && i === 1) {
            if (!Array.isArray(powers))
                powers = [powers];
            models.E_user.findOne({where: {id: user.id}}).then(function (user) {
                user.getR_power({distinct: 'f_label'}).then(function (e_powers) {
                    for (var i = 0; i < e_powers.length; i++) {
                        for (var j = 0; j < powers.length; j++) {
                            //we can not destroy  vote
                            if (e_powers[i].id == powers[j]) {
                                //user use this power
                                obj.activity.entries[e_entry.f_name]['point'] = parseInt(obj.activity.entries[e_entry.f_name]['point'] || 0) + parseInt(e_powers[i].f_point);
                                if (e_powers[i].f_label != 'Vote')
                                    e_powers.splice(i, 1);
                                break;
                            }
                        }
                    }
                    user.setR_power(e_powers);
                    if (i === entries.length)
                        fs.writeFileSync(path, JSON.stringify(obj, null, 4));
                });
            });
        } else {
            if (i === entries.length)
                fs.writeFileSync(path, JSON.stringify(obj, null, 4));
        }
    });
}
router.post('/:id/vote', block_access.isLoggedIn, function (req, res) {
    var id = req.params.id;
    var entries = req.body.entries;
    models.E_activity.findOne({where: {id: id}}).then(function (e_activity) {
        if (e_activity) {
            var today = moment().tz("Europe/Paris");
            if (activity_helper.getState(today, e_activity) === 1) {
                var obj = {
                    "users": [],
                    "activity": {
                        "infos": {
                            "name": e_activity.f_name,
                            "id": e_activity.id
                        },
                        "entries": {
                        }
                    }
                };
                var path = __dirname + '/../votes/' + moment().format('DDMMYYYY') + '_' + req.session.passport.user.fk_id_team_team + '_' + e_activity.id + '.json';
                fs.readFile(path, function (e, fileContent) {
                    if (!e)
                        obj = JSON.parse(fileContent);
                    //check if user has already vote
                    if (obj.users.indexOf(req.session.passport.user.id) < 0) {
                        models.E_entry.findAll({where: {id: {$in: entries}}}).then(function (e_entries) {
                            if (e_entries.length) {
                                addVotes(e_entries, req.session.passport.user, e_activity, obj, req.body.powers);
                                res.status(200).json({message: "Vote OK, thank you!"});
                            } else
                                res.status(404).json({message: 'Entry not found'});
                        });
                    } else {
                        res.status(409).json({message: "Your vote has already submit"});
                    }
                });
            } else
                res.status(403).json({message: "Vote doesn't start for this activity"});
        } else {
            res.status(404).end({message: "Activity not found"});
        }

    });
});

router.get('/show', block_access.actionAccessMiddleware("activity", "read"), function (req, res) {
    var id_e_activity = req.query.id;
    var tab = req.query.tab;
    var data = {
        menu: "e_activity",
        sub_menu: "list_e_activity",
        tab: tab,
        enum_radio: enums_radios.translated("e_activity", req.session.lang_user, options)
    };

    /* If we arrive from an associated tab, hide the create and the list button */
    if (typeof req.query.hideButton !== 'undefined')
        data.hideButton = req.query.hideButton;

    entity_helper.optimizedFindOne('E_activity', id_e_activity, options).then(function (e_activity) {
        if (!e_activity) {
            data.error = 404;
            logger.debug("No data entity found.");
            return res.render('common/error', data);
        }

        /* Update local e_activity data before show */
        data.e_activity = e_activity;
        // Update some data before show, e.g get picture binary
        entity_helper.getPicturesBuffers(e_activity, "e_activity").then(function () {
            entity_helper.status.translate(e_activity, attributes, req.session.lang_user);
            data.componentAddressConfig = component_helper.getMapsConfigIfComponentAddressExist("e_activity");
            res.render('e_activity/show', data);
        }).catch(function (err) {
            entity_helper.error500(err, req, res, "/");
        });
    }).catch(function (err) {
        entity_helper.error500(err, req, res, "/");
    });
});

router.get('/create_form', block_access.actionAccessMiddleware("activity", "create"), function (req, res) {
    var data = {
        menu: "e_activity",
        sub_menu: "create_e_activity",
        enum_radio: enums_radios.translated("e_activity", req.session.lang_user, options)
    };

    if (typeof req.query.associationFlag !== 'undefined') {
        data.associationFlag = req.query.associationFlag;
        data.associationSource = req.query.associationSource;
        data.associationForeignKey = req.query.associationForeignKey;
        data.associationAlias = req.query.associationAlias;
        data.associationUrl = req.query.associationUrl;
    }

    var view = req.query.ajax ? 'e_activity/create_fields' : 'e_activity/create';
    res.render(view, data);
});

router.post('/create', block_access.actionAccessMiddleware("activity", "create"), function (req, res) {

    var createObject = model_builder.buildForRoute(attributes, options, req.body);

    models.E_activity.create(createObject).then(function (e_activity) {
        var redirect = '/activity/show?id=' + e_activity.id;
        req.session.toastr = [{
                message: 'message.create.success',
                level: "success"
            }];

        var promises = [];

        if (typeof req.body.associationFlag !== 'undefined') {
            redirect = '/' + req.body.associationUrl + '/show?id=' + req.body.associationFlag + '#' + req.body.associationAlias;
            promises.push(new Promise(function (resolve, reject) {
                models[entity_helper.capitalizeFirstLetter(req.body.associationSource)].findOne({where: {id: req.body.associationFlag}}).then(function (association) {
                    if (!association) {
                        e_activity.destroy();
                        var err = new Error();
                        err.message = "Association not found.";
                        reject(err);
                    }

                    var modelName = req.body.associationAlias.charAt(0).toUpperCase() + req.body.associationAlias.slice(1).toLowerCase();
                    if (typeof association['add' + modelName] !== 'undefined') {
                        association['add' + modelName](e_activity.id).then(resolve).catch(function (err) {
                            reject(err);
                        });
                    } else {
                        var obj = {};
                        obj[req.body.associationForeignKey] = e_activity.id;
                        association.update(obj).then(resolve).catch(function (err) {
                            reject(err);
                        });
                    }
                });
            }));
        }

        // We have to find value in req.body that are linked to an hasMany or belongsToMany association
        // because those values are not updated for now
        model_builder.setAssocationManyValues(e_activity, req.body, createObject, options).then(function () {
            Promise.all(promises).then(function () {
                component_helper.setAddressIfComponentExist(e_activity, options, req.body).then(function () {
                    res.redirect(redirect);
                });
            }).catch(function (err) {
                entity_helper.error500(err, req, res, '/activity/create_form');
            });
        });
    }).catch(function (err) {
        entity_helper.error500(err, req, res, '/activity/create_form');
    });
});

router.get('/update_form', block_access.actionAccessMiddleware("activity", "update"), function (req, res) {
    var id_e_activity = req.query.id;
    var data = {
        menu: "e_activity",
        sub_menu: "list_e_activity",
        enum_radio: enums_radios.translated("e_activity", req.session.lang_user, options)
    };

    if (typeof req.query.associationFlag !== 'undefined') {
        data.associationFlag = req.query.associationFlag;
        data.associationSource = req.query.associationSource;
        data.associationForeignKey = req.query.associationForeignKey;
        data.associationAlias = req.query.associationAlias;
        data.associationUrl = req.query.associationUrl;
    }

    entity_helper.optimizedFindOne('E_activity', id_e_activity, options).then(function (e_activity) {
        if (!e_activity) {
            data.error = 404;
            return res.render('common/error', data);
        }

        data.e_activity = e_activity;
        // Update some data before show, e.g get picture binary
        entity_helper.getPicturesBuffers(e_activity, "e_activity", true).then(function () {
            if (req.query.ajax) {
                e_activity.dataValues.enum_radio = data.enum_radio;
                res.render('e_activity/update_fields', e_activity.get({plain: true}));
            } else
                res.render('e_activity/update', data);
        }).catch(function (err) {
            entity_helper.error500(err, req, res, "/");
        });
    }).catch(function (err) {
        entity_helper.error500(err, req, res, "/");
    });
});

router.post('/update', block_access.actionAccessMiddleware("activity", "update"), function (req, res) {
    var id_e_activity = parseInt(req.body.id);

    if (typeof req.body.version !== "undefined" && req.body.version != null && !isNaN(req.body.version) && req.body.version != '')
        req.body.version = parseInt(req.body.version) + 1;
    else
        req.body.version = 0;

    var updateObject = model_builder.buildForRoute(attributes, options, req.body);

    models.E_activity.findOne({where: {id: id_e_activity}}).then(function (e_activity) {
        if (!e_activity) {
            data.error = 404;
            logger.debug("Not found - Update");
            return res.render('common/error', data);
        }
        component_helper.updateAddressIfComponentExist(e_activity, options, req.body);
        e_activity.update(updateObject).then(function () {

            // We have to find value in req.body that are linked to an hasMany or belongsToMany association
            // because those values are not updated for now
            model_builder.setAssocationManyValues(e_activity, req.body, updateObject, options).then(function () {

                var redirect = '/activity/show?id=' + id_e_activity;
                if (typeof req.body.associationFlag !== 'undefined')
                    redirect = '/' + req.body.associationUrl + '/show?id=' + req.body.associationFlag + '#' + req.body.associationAlias;

                req.session.toastr = [{
                        message: 'message.update.success',
                        level: "success"
                    }];

                res.redirect(redirect);
            });
        }).catch(function (err) {
            entity_helper.error500(err, req, res, '/activity/update_form?id=' + id_e_activity);
        });
    }).catch(function (err) {
        entity_helper.error500(err, req, res, '/activity/update_form?id=' + id_e_activity);
    });
});

router.get('/loadtab/:id/:alias', block_access.actionAccessMiddleware('activity', 'read'), function (req, res) {
    var alias = req.params.alias;
    var id = req.params.id;

    // Find tab option
    var option;
    for (var i = 0; i < options.length; i++)
        if (options[i].as == req.params.alias) {
            option = options[i];
            break;
        }
    if (!option)
        return res.status(404).end();

    // Check access rights to subentity
    if (!block_access.entityAccess(req.session.passport.user.r_group, option.target.substring(2)))
        return res.status(403).end();

    var queryOpts = {where: {id: id}};
    // If hasMany, no need to include anything since it will be fetched using /subdatalist
    if (option.structureType != 'hasMany')
        queryOpts.include = {
            model: models[entity_helper.capitalizeFirstLetter(option.target)],
            as: option.as,
            include: {all: true}
        }

    // Fetch tab data
    models.E_activity.findOne(queryOpts).then(function (e_activity) {
        if (!e_activity)
            return res.status(404).end();

        var dustData = e_activity[option.as] || null;
        var empty = !dustData || (dustData instanceof Array && dustData.length == 0) ? true : false;
        var dustFile, idSubentity, promisesData = [];

        // Build tab specific variables
        switch (option.structureType) {
            case 'hasOne':
                if (!empty) {
                    idSubentity = dustData.id;
                    dustData.hideTab = true;
                    dustData.enum_radio = enums_radios.translated(option.target, req.session.lang_user, options);
                    promisesData.push(entity_helper.getPicturesBuffers(dustData, option.target));
                    var subentityOptions = require('../models/options/' + option.target);
                    // Fetch status children to be able to switch status
                    // Apply getR_children() on each current status
                    var statusGetterPromise = [], subentityOptions = require('../models/options/' + option.target);
                    dustData.componentAddressConfig = component_helper.getMapsConfigIfComponentAddressExist(option.target);
                    for (var i = 0; i < subentityOptions.length; i++)
                        if (subentityOptions[i].target.indexOf('e_status') == 0)
                            (function (alias) {
                                promisesData.push(new Promise(function (resolve, reject) {
                                    dustData[alias].getR_children().then(function (children) {
                                        dustData[alias].r_children = children;
                                        resolve();
                                    });
                                }));
                            })(subentityOptions[i].as);
                }
                dustFile = option.target + '/show_fields';
                break;

            case 'hasMany':
                dustFile = option.target + '/list_fields';
                // Status history specific behavior. Replace history_model by history_table to open view
                if (option.target.indexOf('e_history_e_') == 0)
                    option.noCreateBtn = true;
                dustData = {for : 'hasMany'};
                if (typeof req.query.associationFlag !== 'undefined')
                {
                    dustData.associationFlag = req.query.associationFlag;
                    dustData.associationSource = req.query.associationSource;
                    dustData.associationForeignKey = req.query.associationForeignKey;
                    dustData.associationAlias = req.query.associationAlias;
                    dustData.associationUrl = req.query.associationUrl;
                }
                break;

            case 'hasManyPreset':
                dustFile = option.target + '/list_fields';
                var obj = {};
                obj[option.target] = dustData;
                dustData = obj;
                if (typeof req.query.associationFlag !== 'undefined')
                {
                    dustData.associationFlag = req.query.associationFlag;
                    dustData.associationSource = req.query.associationSource;
                    dustData.associationForeignKey = req.query.associationForeignKey;
                    dustData.associationAlias = req.query.associationAlias;
                    dustData.associationUrl = req.query.associationUrl;
                }
                dustData.for = 'fieldset';
                for (var i = 0; i < dustData[option.target].length; i++)
                    promisesData.push(entity_helper.getPicturesBuffers(dustData[option.target][i], option.target, true));

                break;

            case 'localfilestorage':
                dustFile = option.target + '/list_fields';
                var obj = {};
                obj[option.target] = dustData;
                dustData = obj;
                dustData.sourceId = id;
                break;

            default:
                return res.status(500).end();
        }

        // Image buffer promise
        Promise.all(promisesData).then(function () {
            // Open and render dust file
            var file = fs.readFileSync(__dirname + '/../views/' + dustFile + '.dust', 'utf8');
            dust.renderSource(file, dustData || {}, function (err, rendered) {
                if (err) {
                    console.error(err);
                    return res.status(500).end();
                }

                // Send response to ajax request
                res.json({
                    content: rendered,
                    data: idSubentity || {},
                    empty: empty,
                    option: option
                });
            });
        }).catch(function (err) {
            console.error(err);
            res.status(500).send(err);
        });
    }).catch(function (err) {
        console.error(err);
        res.status(500).send(err);
    });
});

router.get('/set_status/:id_activity/:status/:id_new_status', block_access.actionAccessMiddleware("activity", "update"), function (req, res) {
    var historyModel = 'E_history_e_activity_' + req.params.status;
    var historyAlias = 'r_history_' + req.params.status.substring(2);
    var statusAlias = 'r_' + req.params.status.substring(2);

    var errorRedirect = '/activity/show?id=' + req.params.id_activity;

    var includeTree = entity_helper.status.generateEntityInclude(models, 'e_activity');

    // Find target entity instance and include its child to be able to replace variables in media
    includeTree.push({
        model: models[historyModel],
        as: historyAlias,
        limit: 1,
        order: 'createdAt DESC',
        include: [{
                model: models.E_status,
                as: statusAlias
            }]
    });
    models.E_activity.findOne({
        where: {id: req.params.id_activity},
        include: includeTree
    }).then(function (e_activity) {
        if (!e_activity || !e_activity[historyAlias] || !e_activity[historyAlias][0][statusAlias]) {
            logger.debug("Not found - Set status");
            return res.render('common/error', {error: 404});
        }

        // Find the children of the current status
        models.E_status.findOne({
            where: {
                id: e_activity[historyAlias][0][statusAlias].id
            },
            include: [{
                    model: models.E_status,
                    as: 'r_children',
                    include: [{
                            model: models.E_action,
                            as: 'r_actions',
                            order: 'f_position ASC',
                            include: [{
                                    model: models.E_media,
                                    as: 'r_media',
                                    include: {
                                        all: true,
                                        nested: true
                                    }
                                }]
                        }]
                }]
        }).then(function (current_status) {
            if (!current_status || !current_status.r_children) {
                logger.debug("Not found - Set status");
                return res.render('common/error', {
                    error: 404
                });
            }

            // Check if new status is actualy the current status's children
            var children = current_status.r_children;
            var nextStatus = false;
            for (var i = 0; i < children.length; i++) {
                if (children[i].id == req.params.id_new_status) {
                    nextStatus = children[i];
                    break;
                }
            }
            // Unautorized
            if (nextStatus === false) {
                req.session.toastr = [{
                        level: 'error',
                        message: 'component.status.error.illegal_status'
                    }]
                return res.redirect(errorRedirect);
            }

            // Execute newStatus actions
            nextStatus.executeActions(e_activity).then(function () {
                // Create history record for this status field
                // Beeing the most recent history for activity it will now be its current status
                var createObject = {}
                createObject["fk_id_status_" + nextStatus.f_field.substring(2)] = nextStatus.id;
                createObject["fk_id_activity_history_" + req.params.status.substring(2)] = req.params.id_activity;
                models[historyModel].create(createObject).then(function () {
                    e_activity['set' + entity_helper.capitalizeFirstLetter(statusAlias)](nextStatus.id);
                    res.redirect('/activity/show?id=' + req.params.id_activity)
                });
            }).catch(function (err) {
                console.error(err);
                req.session.toastr = [{
                        level: 'warning',
                        message: 'component.status.error.action_error'
                    }]
                var createObject = {}
                createObject["fk_id_status_" + nextStatus.f_field.substring(2)] = nextStatus.id;
                createObject["fk_id_activity_history_" + req.params.status.substring(2)] = req.params.id_activity;
                models[historyModel].create(createObject).then(function () {
                    e_activity['set' + entity_helper.capitalizeFirstLetter(statusAlias)](nextStatus.id);
                    res.redirect('/activity/show?id=' + req.params.id_activity)
                });
            });
        });
    }).catch(function (err) {
        entity_helper.error500(err, req, res, errorRedirect);
    });
});

router.post('/search', block_access.actionAccessMiddleware('activity', 'read'), function (req, res) {
    var search = '%' + (req.body.search || '') + '%';
    var limit = SELECT_PAGE_SIZE;
    var offset = (req.body.page - 1) * limit;

    // ID is always needed
    if (req.body.searchField.indexOf("id") == -1)
        req.body.searchField.push('id');

    var where = {raw: true, attributes: req.body.searchField, where: {}};
    if (search != '%%') {
        if (req.body.searchField.length == 1) {
            where.where[req.body.searchField[0]] = {$like: search};
        } else {
            where.where.$or = [];
            for (var i = 0; i < req.body.searchField.length; i++) {
                if (req.body.searchField[i] != "id") {
                    var currentOrObj = {};
                    currentOrObj[req.body.searchField[i]] = {$like: search}
                    where.where.$or.push(currentOrObj);
                }
            }
        }
    }

    // Possibility to add custom where in select2 ajax instanciation
    if (typeof req.body.customWhere !== "undefined")
        for (var param in req.body.customWhere) {
            // If the custom where is on a foreign key
            if (param.indexOf("fk_") != -1) {
                for (var option in options) {
                    // We only add where condition on key that are standard hasMany relation, not belongsToMany association
                    if (options[option].otherKey == param && options[option].relation != "belongsToMany")
                        where.where[param] = req.body.customWhere[param];
                }
            } else
                where.where[param] = req.body.customWhere[param];
        }

    where.offset = offset;
    where.limit = limit;

    models.E_activity.findAndCountAll(where).then(function (results) {
        results.more = results.count > req.body.page * SELECT_PAGE_SIZE ? true : false;
        res.json(results);
    }).catch(function (e) {
        console.error(e);
        res.status(500).json(e);
    });
});

router.post('/fieldset/:alias/remove', block_access.actionAccessMiddleware("activity", "delete"), function (req, res) {
    var alias = req.params.alias;
    var idToRemove = req.body.idRemove;
    var idEntity = req.body.idEntity;
    models.E_activity.findOne({where: {id: idEntity}}).then(function (e_activity) {
        if (!e_activity) {
            var data = {error: 404};
            return res.render('common/error', data);
        }

        // Get all associations
        e_activity['get' + entity_helper.capitalizeFirstLetter(alias)]().then(function (aliasEntities) {
            // Remove entity from association array
            for (var i = 0; i < aliasEntities.length; i++)
                if (aliasEntities[i].id == idToRemove) {
                    aliasEntities.splice(i, 1);
                    break;
                }

            // Set back associations without removed entity
            e_activity['set' + entity_helper.capitalizeFirstLetter(alias)](aliasEntities).then(function () {
                res.sendStatus(200).end();
            }).catch(function (err) {
                entity_helper.error500(err, req, res, "/");
            });
        });
    }).catch(function (err) {
        entity_helper.error500(err, req, res, "/");
    });
});

router.post('/fieldset/:alias/add', block_access.actionAccessMiddleware("activity", "create"), function (req, res) {
    var alias = req.params.alias;
    var idEntity = req.body.idEntity;
    models.E_activity.findOne({where: {id: idEntity}}).then(function (e_activity) {
        if (!e_activity) {
            var data = {error: 404};
            logger.debug("No data entity found.");
            return res.render('common/error', data);
        }

        var toAdd;
        if (typeof (toAdd = req.body.ids) === 'undefined') {
            req.session.toastr.push({
                message: 'message.create.failure',
                level: "error"
            });
            return res.redirect('/activity/show?id=' + idEntity + "#" + alias);
        }

        e_activity['add' + entity_helper.capitalizeFirstLetter(alias)](toAdd).then(function () {
            res.redirect('/activity/show?id=' + idEntity + "#" + alias);
        }).catch(function (err) {
            entity_helper.error500(err, req, res, "/");
        });
    }).catch(function (err) {
        entity_helper.error500(err, req, res, "/");
    });
});

router.post('/delete', block_access.actionAccessMiddleware("activity", "delete"), function (req, res) {
    var id_e_activity = parseInt(req.body.id);

    models.E_activity.findOne({where: {id: id_e_activity}}).then(function (deleteObject) {
        models.E_activity.destroy({
            where: {
                id: id_e_activity
            }
        }).then(function () {
            req.session.toastr = [{
                    message: 'message.delete.success',
                    level: "success"
                }];

            var redirect = '/activity/list';
            if (typeof req.body.associationFlag !== 'undefined')
                redirect = '/' + req.body.associationUrl + '/show?id=' + req.body.associationFlag + '#' + req.body.associationAlias;
            res.redirect(redirect);
            entity_helper.remove_files("e_activity", deleteObject, attributes);
        }).catch(function (err) {
            entity_helper.error500(err, req, res, '/activity/list');
        });
    }).catch(function (err) {
        entity_helper.error500(err, req, res, '/activity/list');
    });
});

module.exports = router;