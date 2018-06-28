var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_power.json");
var associations = require("./options/e_power.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_power',
        classMethods: {
            associate: builder.buildAssociation('E_power', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_power', attributes, options);

    builder.addHooks(Model, 'e_power', attributes_origin);

    return Model;
};