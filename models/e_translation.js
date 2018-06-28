var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_translation.json");
var associations = require("./options/e_translation.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_translation',
        classMethods: {
            associate: builder.buildAssociation('E_translation', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_translation', attributes, options);

    builder.addHooks(Model, 'e_translation', attributes_origin);

    return Model;
};