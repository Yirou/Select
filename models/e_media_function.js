var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_media_function.json");
var associations = require("./options/e_media_function.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_media_function',
        classMethods: {
            associate: builder.buildAssociation('E_media_function', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_media_function', attributes, options);

    builder.addHooks(Model, 'e_media_function', attributes_origin);

    return Model;
};