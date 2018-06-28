var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_api_credentials.json");
var associations = require("./options/e_api_credentials.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_api_credentials',
        classMethods: {
            associate: builder.buildAssociation('E_api_credentials', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_api_credentials', attributes, options);

    builder.addHooks(Model, 'e_api_credentials', attributes_origin);

    return Model;
};