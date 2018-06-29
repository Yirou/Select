var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_team.json");
var associations = require("./options/e_team.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_team',
        classMethods: {
            associate: builder.buildAssociation('E_team', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_team', attributes, options);

    builder.addHooks(Model, 'e_team', attributes_origin);

    return Model;
};