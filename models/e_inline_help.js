var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_inline_help.json");
var associations = require("./options/e_inline_help.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_inline_help',
        classMethods: {
            associate: builder.buildAssociation('E_inline_help', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_inline_help', attributes, options);

    builder.addHooks(Model, 'e_inline_help', attributes_origin);

    return Model;
};