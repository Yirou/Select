var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_activity.json");
var associations = require("./options/e_activity.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_activity',
        classMethods: {
            associate: builder.buildAssociation('E_activity', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_activity', attributes, options);

    builder.addHooks(Model, 'e_activity', attributes_origin);

    return Model;
};