var builder = require('../utils/model_builder');
var fs = require('fs-extra');

var attributes_origin = require("./attributes/e_notification.json");
var associations = require("./options/e_notification.json");

module.exports = function (sequelize, DataTypes) {
    var attributes = builder.buildForModel(attributes_origin, DataTypes);
    var options = {
        tableName: '9_e_notification',
        classMethods: {
            associate: builder.buildAssociation('E_notification', associations)
        },
        timestamps: true
    };

    var Model = sequelize.define('E_notification', attributes, options);

    builder.addHooks(Model, 'e_notification', attributes_origin);

    return Model;
};