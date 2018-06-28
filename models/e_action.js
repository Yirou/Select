var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_action.json");
var associations = require("./options/e_action.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_action',
        classMethods: {
            associate: builder.buildAssociation('E_action', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_action', attributes, options);

    builder.addHooks(Model, 'e_action', attributes_origin);

    return Model;
};