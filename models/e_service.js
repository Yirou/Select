var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_service.json");
var associations = require("./options/e_service.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_service',
        classMethods: {
            associate: builder.buildAssociation('E_service', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_service', attributes, options);

    builder.addHooks(Model, 'e_service', attributes_origin);

    return Model;
};