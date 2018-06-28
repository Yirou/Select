var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_organization.json");
var associations = require("./options/e_organization.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_organization',
        classMethods: {
            associate: builder.buildAssociation('E_organization', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_organization', attributes, options);

    builder.addHooks(Model, 'e_organization', attributes_origin);

    return Model;
};