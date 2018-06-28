var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_entry.json");
var associations = require("./options/e_entry.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_entry',
        classMethods: {
            associate: builder.buildAssociation('E_entry', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_entry', attributes, options);

    builder.addHooks(Model, 'e_entry', attributes_origin);

    return Model;
};