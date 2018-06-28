var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_role.json");
var associations = require("./options/e_role.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_role',
        classMethods: {
            associate: builder.buildAssociation('E_role', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_role', attributes, options);

    builder.addHooks(Model, 'e_role', attributes_origin);

    return Model;
};