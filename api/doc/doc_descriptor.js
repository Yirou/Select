/**
 * @apiDefine token
 * @apiParam (Query parameters) {String} token API Bearer Token, required for authentication
 */
/**
 * @apiDefine tokenLimitOffset
 * @apiParam (Query parameters) {String} token API Bearer Token, required for authentication
 * @apiParam (Query parameters) {Integer} [limit=50] The number of rows to be fetched
 * @apiParam (Query parameters) {Integer} [offset=0] The offset by which rows will be fetched
 */

/**
 * @api {get} /api/getToken/ Basic Auth


 * @apiVersion 1.0.0
 * @apiGroup 1-Authentication

 * @apiDescription To be able to interact with the API, you need to generate a Bearer Token using the <code>/api/getToken/</code> url
 *
 * Set your HTTP header like so with basic64 encoding : <code>Authorization clientID:clientSecret</code>

 * @apiExample {node} Example
 * var request = require('request');
 *
 * // API credentials
 * var clientKey = 'THcfYQ7sGW3jRdq';
 * var clientSecret = 'dexXLYNwdhezlxk';
 *
 * // Base64 encoding
 * var auth = 'Basic ' + new Buffer(clientKey + ':' + clientSecret).toString('base64');
 *
 * // API request
 * request(
 *     {
 *         url : 'http://127.0.0.1:9034/api/getToken',
 *         headers : {
 *             "Authorization" : auth
 *         }
 *     },
 *     function (error, response, body) {
 *     	body = JSON.parse(body);
 *         console.log(body.token);
 *     }
 * );

 * @apiHeader {String} ClientID Generated application's API credentials
 * @apiHeader {String} ClientSecret Generated application's API credentials

 * @apiSuccess {String} token Bearer Token, required for further API calls

 * @apiError (Error 500) BadAuthorizationHeader There is an invalid or no authorization header
 * @apiError (Error 401) AuthenticationFailed Couldn't match clientID/clientSecret with database
 */

/********************************************
 ********************************************
 * USER
 ********************************************
 *******************************************/
/** @apiDefine e_user User */
/**
 * @api {get} /api/user?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>user</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_user
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} users List of user
 * @apiSuccess {Integer} users.id <code>id</code> of user
 * @apiSuccess {Integer} users.version <code>version</code> of user
 * @apiSuccess {String} users.f_login <code>f_login</code> of user
 * @apiSuccess {String} users.f_password <code>f_password</code> of user
 * @apiSuccess {String} users.f_email <code>f_email</code> of user
 * @apiSuccess {String} users.f_token_password_reset <code>f_token_password_reset</code> of user
 * @apiSuccess {Integer} users.f_enabled <code>f_enabled</code> of user
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for user
 */

/**
 * @api {get} /api/user/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>user</code> with <code>id</code>
 * @apiGroup e_user
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of user to fetch
 * @apiSuccess {Object} user Object of user
 * @apiSuccess {Integer} user.id <code>id</code> of user
 * @apiSuccess {Integer} user.version <code>version</code> of user
 * @apiSuccess {String} user.f_login <code>f_login</code> of user
 * @apiSuccess {String} user.f_password <code>f_password</code> of user
 * @apiSuccess {String} user.f_email <code>f_email</code> of user
 * @apiSuccess {String} user.f_token_password_reset <code>f_token_password_reset</code> of user
 * @apiSuccess {Integer} user.f_enabled <code>f_enabled</code> of user
 * @apiError (Error 404) {Object} NotFound No user with ID <code>id</code> found
 */

/**
 * @api {get} /api/user/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>user</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_user
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the user to which <code>association</code> is related
 * @apiParam (Params parameters) {String=role,group,notification,service,power,team} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No user with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/user/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>user</code> using values defined in request's <code>body</code>
 * @apiGroup e_user
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_login] <code>f_login</code> of user
 * @apiParam (Body parameters) {String} [f_email] <code>f_email</code> of user
 * @apiParam (Body parameters) {Integer} [fk_id_service_service] <code>id</code> of entity service to associate
 * @apiParam (Body parameters) {Integer} [fk_id_team_team] <code>id</code> of entity team to associate
 * @apiSuccess {Object} user Created user
 * @apiSuccess {Integer} user.id <code>id</code> of user
 * @apiSuccess {String} user.f_login <code>f_login</code> of user
 * @apiSuccess {String} user.f_email <code>f_email</code> of user
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create user
 */

/**
 * @api {put} /api/user/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>user</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_user
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the user to update
 * @apiParam (Body parameters) {String} [f_login] New value of <code>f_login</code> for user
 * @apiParam (Body parameters) {String} [f_email] New value of <code>f_email</code> for user
 * @apiParam (Body parameters) {Integer} [fk_id_service_service] <code>id</code> of entity service to associate
 * @apiParam (Body parameters) {Integer} [fk_id_team_team] <code>id</code> of entity team to associate
 * @apiSuccess {Object} user Updated user
 * @apiSuccess {Integer} user.id <code>id</code> of user
 * @apiSuccess {String} user.f_login <code>f_login</code> of user
 * @apiSuccess {String} user.f_email <code>f_email</code> of user
 * @apiError (Error 404) {Object} NotFound No user with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update user
 */

/**
 * @api {delete} /api/user/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>user</code> with <code>id</code>
 * @apiGroup e_user
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of user to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No user with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * ROLE
 ********************************************
 *******************************************/
/** @apiDefine e_role Role */
/**
 * @api {get} /api/role?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>role</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_role
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} roles List of role
 * @apiSuccess {Integer} roles.id <code>id</code> of role
 * @apiSuccess {Integer} roles.version <code>version</code> of role
 * @apiSuccess {String} roles.f_label <code>f_label</code> of role
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for role
 */

/**
 * @api {get} /api/role/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>role</code> with <code>id</code>
 * @apiGroup e_role
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of role to fetch
 * @apiSuccess {Object} role Object of role
 * @apiSuccess {Integer} role.id <code>id</code> of role
 * @apiSuccess {Integer} role.version <code>version</code> of role
 * @apiSuccess {String} role.f_label <code>f_label</code> of role
 * @apiError (Error 404) {Object} NotFound No role with ID <code>id</code> found
 */

/**
 * @api {get} /api/role/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>role</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_role
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the role to which <code>association</code> is related
 * @apiParam (Params parameters) {String=user} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No role with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/role/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>role</code> using values defined in request's <code>body</code>
 * @apiGroup e_role
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_label] <code>f_label</code> of role
 * @apiSuccess {Object} role Created role
 * @apiSuccess {Integer} role.id <code>id</code> of role
 * @apiSuccess {String} role.f_label <code>f_label</code> of role
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create role
 */

/**
 * @api {put} /api/role/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>role</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_role
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the role to update
 * @apiParam (Body parameters) {String} [f_label] New value of <code>f_label</code> for role
 * @apiSuccess {Object} role Updated role
 * @apiSuccess {Integer} role.id <code>id</code> of role
 * @apiSuccess {String} role.f_label <code>f_label</code> of role
 * @apiError (Error 404) {Object} NotFound No role with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update role
 */

/**
 * @api {delete} /api/role/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>role</code> with <code>id</code>
 * @apiGroup e_role
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of role to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No role with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * GROUP
 ********************************************
 *******************************************/
/** @apiDefine e_group Group */
/**
 * @api {get} /api/group?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>group</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_group
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} groups List of group
 * @apiSuccess {Integer} groups.id <code>id</code> of group
 * @apiSuccess {Integer} groups.version <code>version</code> of group
 * @apiSuccess {String} groups.f_label <code>f_label</code> of group
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for group
 */

/**
 * @api {get} /api/group/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>group</code> with <code>id</code>
 * @apiGroup e_group
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of group to fetch
 * @apiSuccess {Object} group Object of group
 * @apiSuccess {Integer} group.id <code>id</code> of group
 * @apiSuccess {Integer} group.version <code>version</code> of group
 * @apiSuccess {String} group.f_label <code>f_label</code> of group
 * @apiError (Error 404) {Object} NotFound No group with ID <code>id</code> found
 */

/**
 * @api {get} /api/group/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>group</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_group
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the group to which <code>association</code> is related
 * @apiParam (Params parameters) {String=user,power} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No group with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/group/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>group</code> using values defined in request's <code>body</code>
 * @apiGroup e_group
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_label] <code>f_label</code> of group
 * @apiParam (Body parameters) {Integer} [fk_id_group_power] <code>id</code> of entity power to associate
 * @apiSuccess {Object} group Created group
 * @apiSuccess {Integer} group.id <code>id</code> of group
 * @apiSuccess {String} group.f_label <code>f_label</code> of group
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create group
 */

/**
 * @api {put} /api/group/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>group</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_group
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the group to update
 * @apiParam (Body parameters) {String} [f_label] New value of <code>f_label</code> for group
 * @apiParam (Body parameters) {Integer} [fk_id_group_power] <code>id</code> of entity power to associate
 * @apiSuccess {Object} group Updated group
 * @apiSuccess {Integer} group.id <code>id</code> of group
 * @apiSuccess {String} group.f_label <code>f_label</code> of group
 * @apiError (Error 404) {Object} NotFound No group with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update group
 */

/**
 * @api {delete} /api/group/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>group</code> with <code>id</code>
 * @apiGroup e_group
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of group to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No group with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * STATUS
 ********************************************
 *******************************************/
/** @apiDefine e_status Status */
/**
 * @api {get} /api/status?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>status</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_status
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} statuss List of status
 * @apiSuccess {Integer} statuss.id <code>id</code> of status
 * @apiSuccess {Integer} statuss.version <code>version</code> of status
 * @apiSuccess {String} statuss.f_entity <code>f_entity</code> of status
 * @apiSuccess {String} statuss.f_field <code>f_field</code> of status
 * @apiSuccess {String} statuss.f_name <code>f_name</code> of status
 * @apiSuccess {String} statuss.f_color <code>f_color</code> of status
 * @apiSuccess {Integer} statuss.f_position <code>f_position</code> of status
 * @apiSuccess {Boolean} statuss.f_default <code>f_default</code> of status
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for status
 */

/**
 * @api {get} /api/status/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>status</code> with <code>id</code>
 * @apiGroup e_status
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of status to fetch
 * @apiSuccess {Object} status Object of status
 * @apiSuccess {Integer} status.id <code>id</code> of status
 * @apiSuccess {Integer} status.version <code>version</code> of status
 * @apiSuccess {String} status.f_entity <code>f_entity</code> of status
 * @apiSuccess {String} status.f_field <code>f_field</code> of status
 * @apiSuccess {String} status.f_name <code>f_name</code> of status
 * @apiSuccess {String} status.f_color <code>f_color</code> of status
 * @apiSuccess {Integer} status.f_position <code>f_position</code> of status
 * @apiSuccess {Boolean} status.f_default <code>f_default</code> of status
 * @apiError (Error 404) {Object} NotFound No status with ID <code>id</code> found
 */

/**
 * @api {get} /api/status/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>status</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_status
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the status to which <code>association</code> is related
 * @apiParam (Params parameters) {String=translation,action,status} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No status with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/status/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>status</code> using values defined in request's <code>body</code>
 * @apiGroup e_status
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_entity] <code>f_entity</code> of status
 * @apiParam (Body parameters) {String} [f_field] <code>f_field</code> of status
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of status
 * @apiParam (Body parameters) {String} [f_color] <code>f_color</code> of status
 * @apiParam (Body parameters) {Integer} [f_position] <code>f_position</code> of status
 * @apiParam (Body parameters) {Boolean} [f_default] <code>f_default</code> of status
 * @apiParam (Body parameters) {Integer} [fk_id_status_translations] <code>id</code> of entity translation to associate
 * @apiParam (Body parameters) {Integer} [fk_id_status_actions] <code>id</code> of entity action to associate
 * @apiSuccess {Object} status Created status
 * @apiSuccess {Integer} status.id <code>id</code> of status
 * @apiSuccess {String} status.f_entity <code>f_entity</code> of status
 * @apiSuccess {String} status.f_field <code>f_field</code> of status
 * @apiSuccess {String} status.f_name <code>f_name</code> of status
 * @apiSuccess {String} status.f_color <code>f_color</code> of status
 * @apiSuccess {Integer} status.f_position <code>f_position</code> of status
 * @apiSuccess {Boolean} status.f_default <code>f_default</code> of status
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create status
 */

/**
 * @api {put} /api/status/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>status</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_status
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the status to update
 * @apiParam (Body parameters) {String} [f_entity] New value of <code>f_entity</code> for status
 * @apiParam (Body parameters) {String} [f_field] New value of <code>f_field</code> for status
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for status
 * @apiParam (Body parameters) {String} [f_color] New value of <code>f_color</code> for status
 * @apiParam (Body parameters) {Integer} [f_position] New value of <code>f_position</code> for status
 * @apiParam (Body parameters) {Boolean} [f_default] New value of <code>f_default</code> for status
 * @apiParam (Body parameters) {Integer} [fk_id_status_translations] <code>id</code> of entity translation to associate
 * @apiParam (Body parameters) {Integer} [fk_id_status_actions] <code>id</code> of entity action to associate
 * @apiSuccess {Object} status Updated status
 * @apiSuccess {Integer} status.id <code>id</code> of status
 * @apiSuccess {String} status.f_entity <code>f_entity</code> of status
 * @apiSuccess {String} status.f_field <code>f_field</code> of status
 * @apiSuccess {String} status.f_name <code>f_name</code> of status
 * @apiSuccess {String} status.f_color <code>f_color</code> of status
 * @apiSuccess {Integer} status.f_position <code>f_position</code> of status
 * @apiSuccess {Boolean} status.f_default <code>f_default</code> of status
 * @apiError (Error 404) {Object} NotFound No status with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update status
 */

/**
 * @api {delete} /api/status/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>status</code> with <code>id</code>
 * @apiGroup e_status
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of status to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No status with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * TRANSLATION
 ********************************************
 *******************************************/
/** @apiDefine e_translation Translation */
/**
 * @api {get} /api/translation?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>translation</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_translation
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} translations List of translation
 * @apiSuccess {Integer} translations.id <code>id</code> of translation
 * @apiSuccess {Integer} translations.version <code>version</code> of translation
 * @apiSuccess {String} translations.f_language <code>f_language</code> of translation
 * @apiSuccess {String} translations.f_value <code>f_value</code> of translation
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for translation
 */

/**
 * @api {get} /api/translation/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>translation</code> with <code>id</code>
 * @apiGroup e_translation
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of translation to fetch
 * @apiSuccess {Object} translation Object of translation
 * @apiSuccess {Integer} translation.id <code>id</code> of translation
 * @apiSuccess {Integer} translation.version <code>version</code> of translation
 * @apiSuccess {String} translation.f_language <code>f_language</code> of translation
 * @apiSuccess {String} translation.f_value <code>f_value</code> of translation
 * @apiError (Error 404) {Object} NotFound No translation with ID <code>id</code> found
 */

/**
 * @api {post} /api/translation/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>translation</code> using values defined in request's <code>body</code>
 * @apiGroup e_translation
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_language] <code>f_language</code> of translation
 * @apiParam (Body parameters) {String} [f_value] <code>f_value</code> of translation
 * @apiSuccess {Object} translation Created translation
 * @apiSuccess {Integer} translation.id <code>id</code> of translation
 * @apiSuccess {String} translation.f_language <code>f_language</code> of translation
 * @apiSuccess {String} translation.f_value <code>f_value</code> of translation
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create translation
 */

/**
 * @api {put} /api/translation/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>translation</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_translation
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the translation to update
 * @apiParam (Body parameters) {String} [f_language] New value of <code>f_language</code> for translation
 * @apiParam (Body parameters) {String} [f_value] New value of <code>f_value</code> for translation
 * @apiSuccess {Object} translation Updated translation
 * @apiSuccess {Integer} translation.id <code>id</code> of translation
 * @apiSuccess {String} translation.f_language <code>f_language</code> of translation
 * @apiSuccess {String} translation.f_value <code>f_value</code> of translation
 * @apiError (Error 404) {Object} NotFound No translation with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update translation
 */

/**
 * @api {delete} /api/translation/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>translation</code> with <code>id</code>
 * @apiGroup e_translation
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of translation to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No translation with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * MEDIA
 ********************************************
 *******************************************/
/** @apiDefine e_media Media */
/**
 * @api {get} /api/media?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>media</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_media
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} medias List of media
 * @apiSuccess {Integer} medias.id <code>id</code> of media
 * @apiSuccess {Integer} medias.version <code>version</code> of media
 * @apiSuccess {Enum} medias.f_type <code>f_type</code> of media
 * @apiSuccess {String} medias.f_name <code>f_name</code> of media
 * @apiSuccess {String} medias.f_target_entity <code>f_target_entity</code> of media
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for media
 */

/**
 * @api {get} /api/media/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>media</code> with <code>id</code>
 * @apiGroup e_media
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of media to fetch
 * @apiSuccess {Object} media Object of media
 * @apiSuccess {Integer} media.id <code>id</code> of media
 * @apiSuccess {Integer} media.version <code>version</code> of media
 * @apiSuccess {Enum} media.f_type <code>f_type</code> of media
 * @apiSuccess {String} media.f_name <code>f_name</code> of media
 * @apiSuccess {String} media.f_target_entity <code>f_target_entity</code> of media
 * @apiError (Error 404) {Object} NotFound No media with ID <code>id</code> found
 */

/**
 * @api {get} /api/media/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>media</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_media
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the media to which <code>association</code> is related
 * @apiParam (Params parameters) {String=media_mail,media_notification,media_function} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No media with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/media/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>media</code> using values defined in request's <code>body</code>
 * @apiGroup e_media
 * @apiUse token
 * @apiParam (Body parameters) {Enum} [f_type] <code>f_type</code> of media
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of media
 * @apiParam (Body parameters) {String} [f_target_entity] <code>f_target_entity</code> of media
 * @apiParam (Body parameters) {Integer} [fk_id_media_mail] <code>id</code> of entity media_mail to associate
 * @apiParam (Body parameters) {Integer} [fk_id_media_notification] <code>id</code> of entity media_notification to associate
 * @apiParam (Body parameters) {Integer} [fk_id_media_function] <code>id</code> of entity media_function to associate
 * @apiSuccess {Object} media Created media
 * @apiSuccess {Integer} media.id <code>id</code> of media
 * @apiSuccess {Enum} media.f_type <code>f_type</code> of media
 * @apiSuccess {String} media.f_name <code>f_name</code> of media
 * @apiSuccess {String} media.f_target_entity <code>f_target_entity</code> of media
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create media
 */

/**
 * @api {put} /api/media/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>media</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_media
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the media to update
 * @apiParam (Body parameters) {Enum} [f_type] New value of <code>f_type</code> for media
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for media
 * @apiParam (Body parameters) {String} [f_target_entity] New value of <code>f_target_entity</code> for media
 * @apiParam (Body parameters) {Integer} [fk_id_media_mail] <code>id</code> of entity media_mail to associate
 * @apiParam (Body parameters) {Integer} [fk_id_media_notification] <code>id</code> of entity media_notification to associate
 * @apiParam (Body parameters) {Integer} [fk_id_media_function] <code>id</code> of entity media_function to associate
 * @apiSuccess {Object} media Updated media
 * @apiSuccess {Integer} media.id <code>id</code> of media
 * @apiSuccess {Enum} media.f_type <code>f_type</code> of media
 * @apiSuccess {String} media.f_name <code>f_name</code> of media
 * @apiSuccess {String} media.f_target_entity <code>f_target_entity</code> of media
 * @apiError (Error 404) {Object} NotFound No media with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update media
 */

/**
 * @api {delete} /api/media/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>media</code> with <code>id</code>
 * @apiGroup e_media
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of media to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No media with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * MEDIA MAIL
 ********************************************
 *******************************************/
/** @apiDefine e_media_mail Media mail */
/**
 * @api {get} /api/media_mail?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>media_mail</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_media_mail
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} media_mails List of media_mail
 * @apiSuccess {Integer} media_mails.id <code>id</code> of media_mail
 * @apiSuccess {Integer} media_mails.version <code>version</code> of media_mail
 * @apiSuccess {String} media_mails.f_to <code>f_to</code> of media_mail
 * @apiSuccess {String} media_mails.f_cc <code>f_cc</code> of media_mail
 * @apiSuccess {String} media_mails.f_cci <code>f_cci</code> of media_mail
 * @apiSuccess {String} media_mails.f_from <code>f_from</code> of media_mail
 * @apiSuccess {String} media_mails.f_subject <code>f_subject</code> of media_mail
 * @apiSuccess {Text} media_mails.f_content <code>f_content</code> of media_mail
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for media_mail
 */

/**
 * @api {get} /api/media_mail/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>media_mail</code> with <code>id</code>
 * @apiGroup e_media_mail
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of media_mail to fetch
 * @apiSuccess {Object} media_mail Object of media_mail
 * @apiSuccess {Integer} media_mail.id <code>id</code> of media_mail
 * @apiSuccess {Integer} media_mail.version <code>version</code> of media_mail
 * @apiSuccess {String} media_mail.f_to <code>f_to</code> of media_mail
 * @apiSuccess {String} media_mail.f_cc <code>f_cc</code> of media_mail
 * @apiSuccess {String} media_mail.f_cci <code>f_cci</code> of media_mail
 * @apiSuccess {String} media_mail.f_from <code>f_from</code> of media_mail
 * @apiSuccess {String} media_mail.f_subject <code>f_subject</code> of media_mail
 * @apiSuccess {Text} media_mail.f_content <code>f_content</code> of media_mail
 * @apiError (Error 404) {Object} NotFound No media_mail with ID <code>id</code> found
 */

/**
 * @api {post} /api/media_mail/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>media_mail</code> using values defined in request's <code>body</code>
 * @apiGroup e_media_mail
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_to] <code>f_to</code> of media_mail
 * @apiParam (Body parameters) {String} [f_cc] <code>f_cc</code> of media_mail
 * @apiParam (Body parameters) {String} [f_cci] <code>f_cci</code> of media_mail
 * @apiParam (Body parameters) {String} [f_from] <code>f_from</code> of media_mail
 * @apiParam (Body parameters) {String} [f_subject] <code>f_subject</code> of media_mail
 * @apiParam (Body parameters) {Text} [f_content] <code>f_content</code> of media_mail
 * @apiSuccess {Object} media_mail Created media_mail
 * @apiSuccess {Integer} media_mail.id <code>id</code> of media_mail
 * @apiSuccess {String} media_mail.f_to <code>f_to</code> of media_mail
 * @apiSuccess {String} media_mail.f_cc <code>f_cc</code> of media_mail
 * @apiSuccess {String} media_mail.f_cci <code>f_cci</code> of media_mail
 * @apiSuccess {String} media_mail.f_from <code>f_from</code> of media_mail
 * @apiSuccess {String} media_mail.f_subject <code>f_subject</code> of media_mail
 * @apiSuccess {Text} media_mail.f_content <code>f_content</code> of media_mail
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create media_mail
 */

/**
 * @api {put} /api/media_mail/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>media_mail</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_media_mail
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the media_mail to update
 * @apiParam (Body parameters) {String} [f_to] New value of <code>f_to</code> for media_mail
 * @apiParam (Body parameters) {String} [f_cc] New value of <code>f_cc</code> for media_mail
 * @apiParam (Body parameters) {String} [f_cci] New value of <code>f_cci</code> for media_mail
 * @apiParam (Body parameters) {String} [f_from] New value of <code>f_from</code> for media_mail
 * @apiParam (Body parameters) {String} [f_subject] New value of <code>f_subject</code> for media_mail
 * @apiParam (Body parameters) {Text} [f_content] New value of <code>f_content</code> for media_mail
 * @apiSuccess {Object} media_mail Updated media_mail
 * @apiSuccess {Integer} media_mail.id <code>id</code> of media_mail
 * @apiSuccess {String} media_mail.f_to <code>f_to</code> of media_mail
 * @apiSuccess {String} media_mail.f_cc <code>f_cc</code> of media_mail
 * @apiSuccess {String} media_mail.f_cci <code>f_cci</code> of media_mail
 * @apiSuccess {String} media_mail.f_from <code>f_from</code> of media_mail
 * @apiSuccess {String} media_mail.f_subject <code>f_subject</code> of media_mail
 * @apiSuccess {Text} media_mail.f_content <code>f_content</code> of media_mail
 * @apiError (Error 404) {Object} NotFound No media_mail with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update media_mail
 */

/**
 * @api {delete} /api/media_mail/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>media_mail</code> with <code>id</code>
 * @apiGroup e_media_mail
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of media_mail to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No media_mail with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * MEDIA NOTIFICATION
 ********************************************
 *******************************************/
/** @apiDefine e_media_notification Media notification */
/**
 * @api {get} /api/media_notification?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>media_notification</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_media_notification
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} media_notifications List of media_notification
 * @apiSuccess {Integer} media_notifications.id <code>id</code> of media_notification
 * @apiSuccess {Integer} media_notifications.version <code>version</code> of media_notification
 * @apiSuccess {String} media_notifications.f_title <code>f_title</code> of media_notification
 * @apiSuccess {String} media_notifications.f_description <code>f_description</code> of media_notification
 * @apiSuccess {String} media_notifications.f_icon <code>f_icon</code> of media_notification
 * @apiSuccess {String} media_notifications.f_color <code>f_color</code> of media_notification
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for media_notification
 */

/**
 * @api {get} /api/media_notification/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>media_notification</code> with <code>id</code>
 * @apiGroup e_media_notification
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of media_notification to fetch
 * @apiSuccess {Object} media_notification Object of media_notification
 * @apiSuccess {Integer} media_notification.id <code>id</code> of media_notification
 * @apiSuccess {Integer} media_notification.version <code>version</code> of media_notification
 * @apiSuccess {String} media_notification.f_title <code>f_title</code> of media_notification
 * @apiSuccess {String} media_notification.f_description <code>f_description</code> of media_notification
 * @apiSuccess {String} media_notification.f_icon <code>f_icon</code> of media_notification
 * @apiSuccess {String} media_notification.f_color <code>f_color</code> of media_notification
 * @apiError (Error 404) {Object} NotFound No media_notification with ID <code>id</code> found
 */

/**
 * @api {get} /api/media_notification/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>media_notification</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_media_notification
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the media_notification to which <code>association</code> is related
 * @apiParam (Params parameters) {String=group,user} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No media_notification with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/media_notification/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>media_notification</code> using values defined in request's <code>body</code>
 * @apiGroup e_media_notification
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_title] <code>f_title</code> of media_notification
 * @apiParam (Body parameters) {String} [f_description] <code>f_description</code> of media_notification
 * @apiParam (Body parameters) {String} [f_icon] <code>f_icon</code> of media_notification
 * @apiParam (Body parameters) {String} [f_color] <code>f_color</code> of media_notification
 * @apiSuccess {Object} media_notification Created media_notification
 * @apiSuccess {Integer} media_notification.id <code>id</code> of media_notification
 * @apiSuccess {String} media_notification.f_title <code>f_title</code> of media_notification
 * @apiSuccess {String} media_notification.f_description <code>f_description</code> of media_notification
 * @apiSuccess {String} media_notification.f_icon <code>f_icon</code> of media_notification
 * @apiSuccess {String} media_notification.f_color <code>f_color</code> of media_notification
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create media_notification
 */

/**
 * @api {put} /api/media_notification/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>media_notification</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_media_notification
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the media_notification to update
 * @apiParam (Body parameters) {String} [f_title] New value of <code>f_title</code> for media_notification
 * @apiParam (Body parameters) {String} [f_description] New value of <code>f_description</code> for media_notification
 * @apiParam (Body parameters) {String} [f_icon] New value of <code>f_icon</code> for media_notification
 * @apiParam (Body parameters) {String} [f_color] New value of <code>f_color</code> for media_notification
 * @apiSuccess {Object} media_notification Updated media_notification
 * @apiSuccess {Integer} media_notification.id <code>id</code> of media_notification
 * @apiSuccess {String} media_notification.f_title <code>f_title</code> of media_notification
 * @apiSuccess {String} media_notification.f_description <code>f_description</code> of media_notification
 * @apiSuccess {String} media_notification.f_icon <code>f_icon</code> of media_notification
 * @apiSuccess {String} media_notification.f_color <code>f_color</code> of media_notification
 * @apiError (Error 404) {Object} NotFound No media_notification with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update media_notification
 */

/**
 * @api {delete} /api/media_notification/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>media_notification</code> with <code>id</code>
 * @apiGroup e_media_notification
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of media_notification to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No media_notification with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * MEDIA FUNCTION
 ********************************************
 *******************************************/
/** @apiDefine e_media_function Media function */
/**
 * @api {get} /api/media_function?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>media_function</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_media_function
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} media_functions List of media_function
 * @apiSuccess {Integer} media_functions.id <code>id</code> of media_function
 * @apiSuccess {Integer} media_functions.version <code>version</code> of media_function
 * @apiSuccess {String} media_functions.f_title <code>f_title</code> of media_function
 * @apiSuccess {Text} media_functions.f_function <code>f_function</code> of media_function
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for media_function
 */

/**
 * @api {get} /api/media_function/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>media_function</code> with <code>id</code>
 * @apiGroup e_media_function
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of media_function to fetch
 * @apiSuccess {Object} media_function Object of media_function
 * @apiSuccess {Integer} media_function.id <code>id</code> of media_function
 * @apiSuccess {Integer} media_function.version <code>version</code> of media_function
 * @apiSuccess {String} media_function.f_title <code>f_title</code> of media_function
 * @apiSuccess {Text} media_function.f_function <code>f_function</code> of media_function
 * @apiError (Error 404) {Object} NotFound No media_function with ID <code>id</code> found
 */

/**
 * @api {post} /api/media_function/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>media_function</code> using values defined in request's <code>body</code>
 * @apiGroup e_media_function
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_title] <code>f_title</code> of media_function
 * @apiParam (Body parameters) {Text} [f_function] <code>f_function</code> of media_function
 * @apiSuccess {Object} media_function Created media_function
 * @apiSuccess {Integer} media_function.id <code>id</code> of media_function
 * @apiSuccess {String} media_function.f_title <code>f_title</code> of media_function
 * @apiSuccess {Text} media_function.f_function <code>f_function</code> of media_function
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create media_function
 */

/**
 * @api {put} /api/media_function/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>media_function</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_media_function
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the media_function to update
 * @apiParam (Body parameters) {String} [f_title] New value of <code>f_title</code> for media_function
 * @apiParam (Body parameters) {Text} [f_function] New value of <code>f_function</code> for media_function
 * @apiSuccess {Object} media_function Updated media_function
 * @apiSuccess {Integer} media_function.id <code>id</code> of media_function
 * @apiSuccess {String} media_function.f_title <code>f_title</code> of media_function
 * @apiSuccess {Text} media_function.f_function <code>f_function</code> of media_function
 * @apiError (Error 404) {Object} NotFound No media_function with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update media_function
 */

/**
 * @api {delete} /api/media_function/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>media_function</code> with <code>id</code>
 * @apiGroup e_media_function
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of media_function to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No media_function with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * ACTION
 ********************************************
 *******************************************/
/** @apiDefine e_action Action */
/**
 * @api {get} /api/action?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>action</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_action
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} actions List of action
 * @apiSuccess {Integer} actions.id <code>id</code> of action
 * @apiSuccess {Integer} actions.version <code>version</code> of action
 * @apiSuccess {Integer} actions.f_order <code>f_order</code> of action
 * @apiSuccess {Enum} actions.f_execution <code>f_execution</code> of action
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for action
 */

/**
 * @api {get} /api/action/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>action</code> with <code>id</code>
 * @apiGroup e_action
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of action to fetch
 * @apiSuccess {Object} action Object of action
 * @apiSuccess {Integer} action.id <code>id</code> of action
 * @apiSuccess {Integer} action.version <code>version</code> of action
 * @apiSuccess {Integer} action.f_order <code>f_order</code> of action
 * @apiSuccess {Enum} action.f_execution <code>f_execution</code> of action
 * @apiError (Error 404) {Object} NotFound No action with ID <code>id</code> found
 */

/**
 * @api {get} /api/action/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>action</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_action
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the action to which <code>association</code> is related
 * @apiParam (Params parameters) {String=media} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No action with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/action/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>action</code> using values defined in request's <code>body</code>
 * @apiGroup e_action
 * @apiUse token
 * @apiParam (Body parameters) {Integer} [f_order] <code>f_order</code> of action
 * @apiParam (Body parameters) {Enum} [f_execution] <code>f_execution</code> of action
 * @apiParam (Body parameters) {Integer} [fk_id_media_media] <code>id</code> of entity media to associate
 * @apiSuccess {Object} action Created action
 * @apiSuccess {Integer} action.id <code>id</code> of action
 * @apiSuccess {Integer} action.f_order <code>f_order</code> of action
 * @apiSuccess {Enum} action.f_execution <code>f_execution</code> of action
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create action
 */

/**
 * @api {put} /api/action/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>action</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_action
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the action to update
 * @apiParam (Body parameters) {Integer} [f_order] New value of <code>f_order</code> for action
 * @apiParam (Body parameters) {Enum} [f_execution] New value of <code>f_execution</code> for action
 * @apiParam (Body parameters) {Integer} [fk_id_media_media] <code>id</code> of entity media to associate
 * @apiSuccess {Object} action Updated action
 * @apiSuccess {Integer} action.id <code>id</code> of action
 * @apiSuccess {Integer} action.f_order <code>f_order</code> of action
 * @apiSuccess {Enum} action.f_execution <code>f_execution</code> of action
 * @apiError (Error 404) {Object} NotFound No action with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update action
 */

/**
 * @api {delete} /api/action/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>action</code> with <code>id</code>
 * @apiGroup e_action
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of action to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No action with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * NOTIFICATION
 ********************************************
 *******************************************/
/** @apiDefine e_notification Notification */
/**
 * @api {get} /api/notification?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>notification</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_notification
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} notifications List of notification
 * @apiSuccess {Integer} notifications.id <code>id</code> of notification
 * @apiSuccess {Integer} notifications.version <code>version</code> of notification
 * @apiSuccess {String} notifications.f_title <code>f_title</code> of notification
 * @apiSuccess {String} notifications.f_description <code>f_description</code> of notification
 * @apiSuccess {String} notifications.f_url <code>f_url</code> of notification
 * @apiSuccess {String} notifications.f_color <code>f_color</code> of notification
 * @apiSuccess {String} notifications.f_icon <code>f_icon</code> of notification
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for notification
 */

/**
 * @api {get} /api/notification/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>notification</code> with <code>id</code>
 * @apiGroup e_notification
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of notification to fetch
 * @apiSuccess {Object} notification Object of notification
 * @apiSuccess {Integer} notification.id <code>id</code> of notification
 * @apiSuccess {Integer} notification.version <code>version</code> of notification
 * @apiSuccess {String} notification.f_title <code>f_title</code> of notification
 * @apiSuccess {String} notification.f_description <code>f_description</code> of notification
 * @apiSuccess {String} notification.f_url <code>f_url</code> of notification
 * @apiSuccess {String} notification.f_color <code>f_color</code> of notification
 * @apiSuccess {String} notification.f_icon <code>f_icon</code> of notification
 * @apiError (Error 404) {Object} NotFound No notification with ID <code>id</code> found
 */

/**
 * @api {get} /api/notification/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>notification</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_notification
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the notification to which <code>association</code> is related
 * @apiParam (Params parameters) {String=user} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No notification with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/notification/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>notification</code> using values defined in request's <code>body</code>
 * @apiGroup e_notification
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_title] <code>f_title</code> of notification
 * @apiParam (Body parameters) {String} [f_description] <code>f_description</code> of notification
 * @apiParam (Body parameters) {String} [f_url] <code>f_url</code> of notification
 * @apiParam (Body parameters) {String} [f_color] <code>f_color</code> of notification
 * @apiParam (Body parameters) {String} [f_icon] <code>f_icon</code> of notification
 * @apiSuccess {Object} notification Created notification
 * @apiSuccess {Integer} notification.id <code>id</code> of notification
 * @apiSuccess {String} notification.f_title <code>f_title</code> of notification
 * @apiSuccess {String} notification.f_description <code>f_description</code> of notification
 * @apiSuccess {String} notification.f_url <code>f_url</code> of notification
 * @apiSuccess {String} notification.f_color <code>f_color</code> of notification
 * @apiSuccess {String} notification.f_icon <code>f_icon</code> of notification
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create notification
 */

/**
 * @api {put} /api/notification/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>notification</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_notification
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the notification to update
 * @apiParam (Body parameters) {String} [f_title] New value of <code>f_title</code> for notification
 * @apiParam (Body parameters) {String} [f_description] New value of <code>f_description</code> for notification
 * @apiParam (Body parameters) {String} [f_url] New value of <code>f_url</code> for notification
 * @apiParam (Body parameters) {String} [f_color] New value of <code>f_color</code> for notification
 * @apiParam (Body parameters) {String} [f_icon] New value of <code>f_icon</code> for notification
 * @apiSuccess {Object} notification Updated notification
 * @apiSuccess {Integer} notification.id <code>id</code> of notification
 * @apiSuccess {String} notification.f_title <code>f_title</code> of notification
 * @apiSuccess {String} notification.f_description <code>f_description</code> of notification
 * @apiSuccess {String} notification.f_url <code>f_url</code> of notification
 * @apiSuccess {String} notification.f_color <code>f_color</code> of notification
 * @apiSuccess {String} notification.f_icon <code>f_icon</code> of notification
 * @apiError (Error 404) {Object} NotFound No notification with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update notification
 */

/**
 * @api {delete} /api/notification/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>notification</code> with <code>id</code>
 * @apiGroup e_notification
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of notification to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No notification with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * INLINE HELP
 ********************************************
 *******************************************/
/** @apiDefine e_inline_help Inline help */
/**
 * @api {get} /api/inline_help?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>inline_help</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_inline_help
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} inline_helps List of inline_help
 * @apiSuccess {Integer} inline_helps.id <code>id</code> of inline_help
 * @apiSuccess {Integer} inline_helps.version <code>version</code> of inline_help
 * @apiSuccess {String} inline_helps.f_entity <code>f_entity</code> of inline_help
 * @apiSuccess {String} inline_helps.f_field <code>f_field</code> of inline_help
 * @apiSuccess {Text} inline_helps.f_content <code>f_content</code> of inline_help
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for inline_help
 */

/**
 * @api {get} /api/inline_help/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>inline_help</code> with <code>id</code>
 * @apiGroup e_inline_help
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of inline_help to fetch
 * @apiSuccess {Object} inline_help Object of inline_help
 * @apiSuccess {Integer} inline_help.id <code>id</code> of inline_help
 * @apiSuccess {Integer} inline_help.version <code>version</code> of inline_help
 * @apiSuccess {String} inline_help.f_entity <code>f_entity</code> of inline_help
 * @apiSuccess {String} inline_help.f_field <code>f_field</code> of inline_help
 * @apiSuccess {Text} inline_help.f_content <code>f_content</code> of inline_help
 * @apiError (Error 404) {Object} NotFound No inline_help with ID <code>id</code> found
 */

/**
 * @api {post} /api/inline_help/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>inline_help</code> using values defined in request's <code>body</code>
 * @apiGroup e_inline_help
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_entity] <code>f_entity</code> of inline_help
 * @apiParam (Body parameters) {String} [f_field] <code>f_field</code> of inline_help
 * @apiParam (Body parameters) {Text} [f_content] <code>f_content</code> of inline_help
 * @apiSuccess {Object} inline_help Created inline_help
 * @apiSuccess {Integer} inline_help.id <code>id</code> of inline_help
 * @apiSuccess {String} inline_help.f_entity <code>f_entity</code> of inline_help
 * @apiSuccess {String} inline_help.f_field <code>f_field</code> of inline_help
 * @apiSuccess {Text} inline_help.f_content <code>f_content</code> of inline_help
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create inline_help
 */

/**
 * @api {put} /api/inline_help/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>inline_help</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_inline_help
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the inline_help to update
 * @apiParam (Body parameters) {String} [f_entity] New value of <code>f_entity</code> for inline_help
 * @apiParam (Body parameters) {String} [f_field] New value of <code>f_field</code> for inline_help
 * @apiParam (Body parameters) {Text} [f_content] New value of <code>f_content</code> for inline_help
 * @apiSuccess {Object} inline_help Updated inline_help
 * @apiSuccess {Integer} inline_help.id <code>id</code> of inline_help
 * @apiSuccess {String} inline_help.f_entity <code>f_entity</code> of inline_help
 * @apiSuccess {String} inline_help.f_field <code>f_field</code> of inline_help
 * @apiSuccess {Text} inline_help.f_content <code>f_content</code> of inline_help
 * @apiError (Error 404) {Object} NotFound No inline_help with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update inline_help
 */

/**
 * @api {delete} /api/inline_help/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>inline_help</code> with <code>id</code>
 * @apiGroup e_inline_help
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of inline_help to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No inline_help with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * ORGANIZATION
 ********************************************
 *******************************************/
/** @apiDefine e_organization Organization */
/**
 * @api {get} /api/organization?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>organization</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_organization
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} organizations List of organization
 * @apiSuccess {Integer} organizations.id <code>id</code> of organization
 * @apiSuccess {Integer} organizations.version <code>version</code> of organization
 * @apiSuccess {String} organizations.f_name <code>f_name</code> of organization
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for organization
 */

/**
 * @api {get} /api/organization/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>organization</code> with <code>id</code>
 * @apiGroup e_organization
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of organization to fetch
 * @apiSuccess {Object} organization Object of organization
 * @apiSuccess {Integer} organization.id <code>id</code> of organization
 * @apiSuccess {Integer} organization.version <code>version</code> of organization
 * @apiSuccess {String} organization.f_name <code>f_name</code> of organization
 * @apiError (Error 404) {Object} NotFound No organization with ID <code>id</code> found
 */

/**
 * @api {post} /api/organization/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>organization</code> using values defined in request's <code>body</code>
 * @apiGroup e_organization
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of organization
 * @apiSuccess {Object} organization Created organization
 * @apiSuccess {Integer} organization.id <code>id</code> of organization
 * @apiSuccess {String} organization.f_name <code>f_name</code> of organization
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create organization
 */

/**
 * @api {put} /api/organization/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>organization</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_organization
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the organization to update
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for organization
 * @apiSuccess {Object} organization Updated organization
 * @apiSuccess {Integer} organization.id <code>id</code> of organization
 * @apiSuccess {String} organization.f_name <code>f_name</code> of organization
 * @apiError (Error 404) {Object} NotFound No organization with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update organization
 */

/**
 * @api {delete} /api/organization/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>organization</code> with <code>id</code>
 * @apiGroup e_organization
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of organization to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No organization with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * SERVICE
 ********************************************
 *******************************************/
/** @apiDefine e_service Service */
/**
 * @api {get} /api/service?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>service</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_service
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} services List of service
 * @apiSuccess {Integer} services.id <code>id</code> of service
 * @apiSuccess {Integer} services.version <code>version</code> of service
 * @apiSuccess {String} services.f_name <code>f_name</code> of service
 * @apiSuccess {Date} services.f_creation_date <code>f_creation_date</code> of service
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for service
 */

/**
 * @api {get} /api/service/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>service</code> with <code>id</code>
 * @apiGroup e_service
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of service to fetch
 * @apiSuccess {Object} service Object of service
 * @apiSuccess {Integer} service.id <code>id</code> of service
 * @apiSuccess {Integer} service.version <code>version</code> of service
 * @apiSuccess {String} service.f_name <code>f_name</code> of service
 * @apiSuccess {Date} service.f_creation_date <code>f_creation_date</code> of service
 * @apiError (Error 404) {Object} NotFound No service with ID <code>id</code> found
 */

/**
 * @api {get} /api/service/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>service</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_service
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the service to which <code>association</code> is related
 * @apiParam (Params parameters) {String=organization,activity} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No service with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/service/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>service</code> using values defined in request's <code>body</code>
 * @apiGroup e_service
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of service
 * @apiParam (Body parameters) {Date} [f_creation_date] <code>f_creation_date</code> of service
 * @apiParam (Body parameters) {Integer} [fk_id_organization_organization] <code>id</code> of entity organization to associate
 * @apiParam (Body parameters) {Integer} [fk_id_service_activity] <code>id</code> of entity activity to associate
 * @apiSuccess {Object} service Created service
 * @apiSuccess {Integer} service.id <code>id</code> of service
 * @apiSuccess {String} service.f_name <code>f_name</code> of service
 * @apiSuccess {Date} service.f_creation_date <code>f_creation_date</code> of service
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create service
 */

/**
 * @api {put} /api/service/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>service</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_service
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the service to update
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for service
 * @apiParam (Body parameters) {Date} [f_creation_date] New value of <code>f_creation_date</code> for service
 * @apiParam (Body parameters) {Integer} [fk_id_organization_organization] <code>id</code> of entity organization to associate
 * @apiParam (Body parameters) {Integer} [fk_id_service_activity] <code>id</code> of entity activity to associate
 * @apiSuccess {Object} service Updated service
 * @apiSuccess {Integer} service.id <code>id</code> of service
 * @apiSuccess {String} service.f_name <code>f_name</code> of service
 * @apiSuccess {Date} service.f_creation_date <code>f_creation_date</code> of service
 * @apiError (Error 404) {Object} NotFound No service with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update service
 */

/**
 * @api {delete} /api/service/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>service</code> with <code>id</code>
 * @apiGroup e_service
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of service to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No service with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * ACTIVITY
 ********************************************
 *******************************************/
/** @apiDefine e_activity Activity */
/**
 * @api {get} /api/activity?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>activity</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_activity
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} activitys List of activity
 * @apiSuccess {Integer} activitys.id <code>id</code> of activity
 * @apiSuccess {Integer} activitys.version <code>version</code> of activity
 * @apiSuccess {String} activitys.f_name <code>f_name</code> of activity
 * @apiSuccess {Boolean} activitys.f_enabled <code>f_enabled</code> of activity
 * @apiSuccess {String} activitys.f_picture <code>f_picture</code> of activity
 * @apiSuccess {Integer} activitys.f_every <code>f_every</code> of activity
 * @apiSuccess {Enum} activitys.f_frequence <code>f_frequence</code> of activity
 * @apiSuccess {Date} activitys.f_start_date <code>f_start_date</code> of activity
 * @apiSuccess {Time} activitys.f_start_time <code>f_start_time</code> of activity
 * @apiSuccess {Time} activitys.f_end_time <code>f_end_time</code> of activity
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for activity
 */

/**
 * @api {get} /api/activity/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>activity</code> with <code>id</code>
 * @apiGroup e_activity
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of activity to fetch
 * @apiSuccess {Object} activity Object of activity
 * @apiSuccess {Integer} activity.id <code>id</code> of activity
 * @apiSuccess {Integer} activity.version <code>version</code> of activity
 * @apiSuccess {String} activity.f_name <code>f_name</code> of activity
 * @apiSuccess {Boolean} activity.f_enabled <code>f_enabled</code> of activity
 * @apiSuccess {String} activity.f_picture <code>f_picture</code> of activity
 * @apiSuccess {Integer} activity.f_every <code>f_every</code> of activity
 * @apiSuccess {Enum} activity.f_frequence <code>f_frequence</code> of activity
 * @apiSuccess {Date} activity.f_start_date <code>f_start_date</code> of activity
 * @apiSuccess {Time} activity.f_start_time <code>f_start_time</code> of activity
 * @apiSuccess {Time} activity.f_end_time <code>f_end_time</code> of activity
 * @apiError (Error 404) {Object} NotFound No activity with ID <code>id</code> found
 */

/**
 * @api {get} /api/activity/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>activity</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_activity
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the activity to which <code>association</code> is related
 * @apiParam (Params parameters) {String=organization,entry,team} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No activity with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/activity/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>activity</code> using values defined in request's <code>body</code>
 * @apiGroup e_activity
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of activity
 * @apiParam (Body parameters) {String} [f_picture] <code>f_picture</code> of activity
 * @apiParam (Body parameters) {Integer} [f_every] <code>f_every</code> of activity
 * @apiParam (Body parameters) {Enum} [f_frequence] <code>f_frequence</code> of activity
 * @apiParam (Body parameters) {Date} [f_start_date] <code>f_start_date</code> of activity
 * @apiParam (Body parameters) {Time} [f_start_time] <code>f_start_time</code> of activity
 * @apiParam (Body parameters) {Time} [f_end_time] <code>f_end_time</code> of activity
 * @apiParam (Body parameters) {Integer} [fk_id_organization_organization] <code>id</code> of entity organization to associate
 * @apiParam (Body parameters) {Integer} [fk_id_activity] <code>id</code> of entity entry to associate
 * @apiParam (Body parameters) {Integer} [fk_id_team_team] <code>id</code> of entity team to associate
 * @apiSuccess {Object} activity Created activity
 * @apiSuccess {Integer} activity.id <code>id</code> of activity
 * @apiSuccess {String} activity.f_name <code>f_name</code> of activity
 * @apiSuccess {String} activity.f_picture <code>f_picture</code> of activity
 * @apiSuccess {Integer} activity.f_every <code>f_every</code> of activity
 * @apiSuccess {Enum} activity.f_frequence <code>f_frequence</code> of activity
 * @apiSuccess {Date} activity.f_start_date <code>f_start_date</code> of activity
 * @apiSuccess {Time} activity.f_start_time <code>f_start_time</code> of activity
 * @apiSuccess {Time} activity.f_end_time <code>f_end_time</code> of activity
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create activity
 */

/**
 * @api {put} /api/activity/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>activity</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_activity
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the activity to update
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for activity
 * @apiParam (Body parameters) {String} [f_picture] New value of <code>f_picture</code> for activity
 * @apiParam (Body parameters) {Integer} [f_every] New value of <code>f_every</code> for activity
 * @apiParam (Body parameters) {Enum} [f_frequence] New value of <code>f_frequence</code> for activity
 * @apiParam (Body parameters) {Date} [f_start_date] New value of <code>f_start_date</code> for activity
 * @apiParam (Body parameters) {Time} [f_start_time] New value of <code>f_start_time</code> for activity
 * @apiParam (Body parameters) {Time} [f_end_time] New value of <code>f_end_time</code> for activity
 * @apiParam (Body parameters) {Integer} [fk_id_organization_organization] <code>id</code> of entity organization to associate
 * @apiParam (Body parameters) {Integer} [fk_id_activity] <code>id</code> of entity entry to associate
 * @apiParam (Body parameters) {Integer} [fk_id_team_team] <code>id</code> of entity team to associate
 * @apiSuccess {Object} activity Updated activity
 * @apiSuccess {Integer} activity.id <code>id</code> of activity
 * @apiSuccess {String} activity.f_name <code>f_name</code> of activity
 * @apiSuccess {String} activity.f_picture <code>f_picture</code> of activity
 * @apiSuccess {Integer} activity.f_every <code>f_every</code> of activity
 * @apiSuccess {Enum} activity.f_frequence <code>f_frequence</code> of activity
 * @apiSuccess {Date} activity.f_start_date <code>f_start_date</code> of activity
 * @apiSuccess {Time} activity.f_start_time <code>f_start_time</code> of activity
 * @apiSuccess {Time} activity.f_end_time <code>f_end_time</code> of activity
 * @apiError (Error 404) {Object} NotFound No activity with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update activity
 */

/**
 * @api {delete} /api/activity/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>activity</code> with <code>id</code>
 * @apiGroup e_activity
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of activity to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No activity with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * POWER
 ********************************************
 *******************************************/
/** @apiDefine e_power Power */
/**
 * @api {get} /api/power?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>power</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_power
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} powers List of power
 * @apiSuccess {Integer} powers.id <code>id</code> of power
 * @apiSuccess {Integer} powers.version <code>version</code> of power
 * @apiSuccess {String} powers.f_label <code>f_label</code> of power
 * @apiSuccess {String} powers.f_point <code>f_point</code> of power
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for power
 */

/**
 * @api {get} /api/power/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>power</code> with <code>id</code>
 * @apiGroup e_power
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of power to fetch
 * @apiSuccess {Object} power Object of power
 * @apiSuccess {Integer} power.id <code>id</code> of power
 * @apiSuccess {Integer} power.version <code>version</code> of power
 * @apiSuccess {String} power.f_label <code>f_label</code> of power
 * @apiSuccess {String} power.f_point <code>f_point</code> of power
 * @apiError (Error 404) {Object} NotFound No power with ID <code>id</code> found
 */

/**
 * @api {get} /api/power/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>power</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_power
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the power to which <code>association</code> is related
 * @apiParam (Params parameters) {String=user} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No power with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/power/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>power</code> using values defined in request's <code>body</code>
 * @apiGroup e_power
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_label] <code>f_label</code> of power
 * @apiParam (Body parameters) {String} [f_point] <code>f_point</code> of power
 * @apiSuccess {Object} power Created power
 * @apiSuccess {Integer} power.id <code>id</code> of power
 * @apiSuccess {String} power.f_label <code>f_label</code> of power
 * @apiSuccess {String} power.f_point <code>f_point</code> of power
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create power
 */

/**
 * @api {put} /api/power/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>power</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_power
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the power to update
 * @apiParam (Body parameters) {String} [f_label] New value of <code>f_label</code> for power
 * @apiParam (Body parameters) {String} [f_point] New value of <code>f_point</code> for power
 * @apiSuccess {Object} power Updated power
 * @apiSuccess {Integer} power.id <code>id</code> of power
 * @apiSuccess {String} power.f_label <code>f_label</code> of power
 * @apiSuccess {String} power.f_point <code>f_point</code> of power
 * @apiError (Error 404) {Object} NotFound No power with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update power
 */

/**
 * @api {delete} /api/power/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>power</code> with <code>id</code>
 * @apiGroup e_power
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of power to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No power with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * ENTRY
 ********************************************
 *******************************************/
/** @apiDefine e_entry Entry */
/**
 * @api {get} /api/entry?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>entry</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_entry
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} entrys List of entry
 * @apiSuccess {Integer} entrys.id <code>id</code> of entry
 * @apiSuccess {Integer} entrys.version <code>version</code> of entry
 * @apiSuccess {String} entrys.f_name <code>f_name</code> of entry
 * @apiSuccess {Text} entrys.f_comment <code>f_comment</code> of entry
 * @apiSuccess {String} entrys.f_point <code>f_point</code> of entry
 * @apiSuccess {String} entrys.f_distance <code>f_distance</code> of entry
 * @apiSuccess {String} entrys.f_picture <code>f_picture</code> of entry
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for entry
 */

/**
 * @api {get} /api/entry/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>entry</code> with <code>id</code>
 * @apiGroup e_entry
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of entry to fetch
 * @apiSuccess {Object} entry Object of entry
 * @apiSuccess {Integer} entry.id <code>id</code> of entry
 * @apiSuccess {Integer} entry.version <code>version</code> of entry
 * @apiSuccess {String} entry.f_name <code>f_name</code> of entry
 * @apiSuccess {Text} entry.f_comment <code>f_comment</code> of entry
 * @apiSuccess {String} entry.f_point <code>f_point</code> of entry
 * @apiSuccess {String} entry.f_distance <code>f_distance</code> of entry
 * @apiSuccess {String} entry.f_picture <code>f_picture</code> of entry
 * @apiError (Error 404) {Object} NotFound No entry with ID <code>id</code> found
 */

/**
 * @api {post} /api/entry/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>entry</code> using values defined in request's <code>body</code>
 * @apiGroup e_entry
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of entry
 * @apiParam (Body parameters) {Text} [f_comment] <code>f_comment</code> of entry
 * @apiParam (Body parameters) {String} [f_point] <code>f_point</code> of entry
 * @apiParam (Body parameters) {String} [f_distance] <code>f_distance</code> of entry
 * @apiParam (Body parameters) {String} [f_picture] <code>f_picture</code> of entry
 * @apiSuccess {Object} entry Created entry
 * @apiSuccess {Integer} entry.id <code>id</code> of entry
 * @apiSuccess {String} entry.f_name <code>f_name</code> of entry
 * @apiSuccess {Text} entry.f_comment <code>f_comment</code> of entry
 * @apiSuccess {String} entry.f_point <code>f_point</code> of entry
 * @apiSuccess {String} entry.f_distance <code>f_distance</code> of entry
 * @apiSuccess {String} entry.f_picture <code>f_picture</code> of entry
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create entry
 */

/**
 * @api {put} /api/entry/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>entry</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_entry
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the entry to update
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for entry
 * @apiParam (Body parameters) {Text} [f_comment] New value of <code>f_comment</code> for entry
 * @apiParam (Body parameters) {String} [f_point] New value of <code>f_point</code> for entry
 * @apiParam (Body parameters) {String} [f_distance] New value of <code>f_distance</code> for entry
 * @apiParam (Body parameters) {String} [f_picture] New value of <code>f_picture</code> for entry
 * @apiSuccess {Object} entry Updated entry
 * @apiSuccess {Integer} entry.id <code>id</code> of entry
 * @apiSuccess {String} entry.f_name <code>f_name</code> of entry
 * @apiSuccess {Text} entry.f_comment <code>f_comment</code> of entry
 * @apiSuccess {String} entry.f_point <code>f_point</code> of entry
 * @apiSuccess {String} entry.f_distance <code>f_distance</code> of entry
 * @apiSuccess {String} entry.f_picture <code>f_picture</code> of entry
 * @apiError (Error 404) {Object} NotFound No entry with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update entry
 */

/**
 * @api {delete} /api/entry/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>entry</code> with <code>id</code>
 * @apiGroup e_entry
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of entry to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No entry with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * TEAM
 ********************************************
 *******************************************/
/** @apiDefine e_team Team */
/**
 * @api {get} /api/team?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>team</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup e_team
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} teams List of team
 * @apiSuccess {Integer} teams.id <code>id</code> of team
 * @apiSuccess {Integer} teams.version <code>version</code> of team
 * @apiSuccess {String} teams.f_name <code>f_name</code> of team
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for team
 */

/**
 * @api {get} /api/team/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>team</code> with <code>id</code>
 * @apiGroup e_team
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of team to fetch
 * @apiSuccess {Object} team Object of team
 * @apiSuccess {Integer} team.id <code>id</code> of team
 * @apiSuccess {Integer} team.version <code>version</code> of team
 * @apiSuccess {String} team.f_name <code>f_name</code> of team
 * @apiError (Error 404) {Object} NotFound No team with ID <code>id</code> found
 */

/**
 * @api {post} /api/team/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>team</code> using values defined in request's <code>body</code>
 * @apiGroup e_team
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_name] <code>f_name</code> of team
 * @apiSuccess {Object} team Created team
 * @apiSuccess {Integer} team.id <code>id</code> of team
 * @apiSuccess {String} team.f_name <code>f_name</code> of team
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create team
 */

/**
 * @api {put} /api/team/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>team</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup e_team
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the team to update
 * @apiParam (Body parameters) {String} [f_name] New value of <code>f_name</code> for team
 * @apiSuccess {Object} team Updated team
 * @apiSuccess {Integer} team.id <code>id</code> of team
 * @apiSuccess {String} team.f_name <code>f_name</code> of team
 * @apiError (Error 404) {Object} NotFound No team with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update team
 */

/**
 * @api {delete} /api/team/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>team</code> with <code>id</code>
 * @apiGroup e_team
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of team to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No team with ID <code>id</code> found
 */



