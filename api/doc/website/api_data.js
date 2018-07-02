define({ "api": [
  {
    "type": "get",
    "url": "/api/getToken/",
    "title": "Basic Auth",
    "version": "1.0.0",
    "group": "1_Authentication",
    "description": "<p>To be able to interact with the API, you need to generate a Bearer Token using the <code>/api/getToken/</code> url</p> <p>Set your HTTP header like so with basic64 encoding : <code>Authorization clientID:clientSecret</code></p>",
    "examples": [
      {
        "title": "Example",
        "content": "var request = require('request');\n\n// API credentials\nvar clientKey = 'THcfYQ7sGW3jRdq';\nvar clientSecret = 'dexXLYNwdhezlxk';\n\n// Base64 encoding\nvar auth = 'Basic ' + new Buffer(clientKey + ':' + clientSecret).toString('base64');\n\n// API request\nrequest(\n    {\n        url : 'http://127.0.0.1:9034/api/getToken',\n        headers : {\n            \"Authorization\" : auth\n        }\n    },\n    function (error, response, body) {\n    \tbody = JSON.parse(body);\n        console.log(body.token);\n    }\n);",
        "type": "node"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ClientID",
            "description": "<p>Generated application's API credentials</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ClientSecret",
            "description": "<p>Generated application's API credentials</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Bearer Token, required for further API calls</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "BadAuthorizationHeader",
            "description": "<p>There is an invalid or no authorization header</p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "AuthenticationFailed",
            "description": "<p>Couldn't match clientID/clientSecret with database</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "1_Authentication",
    "name": "GetApiGettoken"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/website/main.js",
    "group": "_home_magikbyte_NetBeansProjects_newmips_workspace_9_api_doc_website_main_js",
    "groupTitle": "_home_magikbyte_NetBeansProjects_newmips_workspace_9_api_doc_website_main_js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/api/action/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>action</code> with <code>id</code></p>",
    "group": "e_action",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of action to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No action with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Action",
    "name": "DeleteApiActionIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/action/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>action</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_action",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the action to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "media"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No action with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Action",
    "name": "GetApiActionIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/action/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>action</code> with <code>id</code></p>",
    "group": "e_action",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of action to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "action",
            "description": "<p>Object of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.id",
            "description": "<p><code>id</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.version",
            "description": "<p><code>version</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.f_order",
            "description": "<p><code>f_order</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "action.f_execution",
            "description": "<p><code>f_execution</code> of action</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No action with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Action",
    "name": "GetApiActionIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/action?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>action</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_action",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>List of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "actions.id",
            "description": "<p><code>id</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "actions.version",
            "description": "<p><code>version</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "actions.f_order",
            "description": "<p><code>f_order</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "actions.f_execution",
            "description": "<p><code>f_execution</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for action</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Action",
    "name": "GetApiActionTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/action/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>action</code> using values defined in request's <code>body</code></p>",
    "group": "e_action",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_order",
            "description": "<p><code>f_order</code> of action</p>"
          },
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_execution",
            "description": "<p><code>f_execution</code> of action</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_media",
            "description": "<p><code>id</code> of entity media to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "action",
            "description": "<p>Created action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.id",
            "description": "<p><code>id</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.f_order",
            "description": "<p><code>f_order</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "action.f_execution",
            "description": "<p><code>f_execution</code> of action</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create action</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Action",
    "name": "PostApiActionTokenToken"
  },
  {
    "type": "put",
    "url": "/api/action/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>action</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_action",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the action to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_order",
            "description": "<p>New value of <code>f_order</code> for action</p>"
          },
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_execution",
            "description": "<p>New value of <code>f_execution</code> for action</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_media",
            "description": "<p><code>id</code> of entity media to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "action",
            "description": "<p>Updated action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.id",
            "description": "<p><code>id</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "action.f_order",
            "description": "<p><code>f_order</code> of action</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "action.f_execution",
            "description": "<p><code>f_execution</code> of action</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No action with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update action</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Action",
    "name": "PutApiActionIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/activity/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>activity</code> with <code>id</code></p>",
    "group": "e_activity",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of activity to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No activity with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Activity",
    "name": "DeleteApiActivityIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/activity/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>activity</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_activity",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the activity to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "organization",
              "entry",
              "team"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No activity with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Activity",
    "name": "GetApiActivityIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/activity/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>activity</code> with <code>id</code></p>",
    "group": "e_activity",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of activity to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "activity",
            "description": "<p>Object of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity.id",
            "description": "<p><code>id</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity.version",
            "description": "<p><code>version</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity.f_name",
            "description": "<p><code>f_name</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "activity.f_enabled",
            "description": "<p><code>f_enabled</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity.f_picture",
            "description": "<p><code>f_picture</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity.f_every",
            "description": "<p><code>f_every</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "activity.f_frequence",
            "description": "<p><code>f_frequence</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "activity.f_start_date",
            "description": "<p><code>f_start_date</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "activity.f_start_time",
            "description": "<p><code>f_start_time</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "activity.f_end_time",
            "description": "<p><code>f_end_time</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity.f_user_choice",
            "description": "<p><code>f_user_choice</code> of activity</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No activity with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Activity",
    "name": "GetApiActivityIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/activity?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>activity</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_activity",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "activitys",
            "description": "<p>List of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activitys.id",
            "description": "<p><code>id</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activitys.version",
            "description": "<p><code>version</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activitys.f_name",
            "description": "<p><code>f_name</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "activitys.f_enabled",
            "description": "<p><code>f_enabled</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activitys.f_picture",
            "description": "<p><code>f_picture</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activitys.f_every",
            "description": "<p><code>f_every</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "activitys.f_frequence",
            "description": "<p><code>f_frequence</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "activitys.f_start_date",
            "description": "<p><code>f_start_date</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "activitys.f_start_time",
            "description": "<p><code>f_start_time</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "activitys.f_end_time",
            "description": "<p><code>f_end_time</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activitys.f_user_choice",
            "description": "<p><code>f_user_choice</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for activity</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Activity",
    "name": "GetApiActivityTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/activity/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>activity</code> using values defined in request's <code>body</code></p>",
    "group": "e_activity",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_picture",
            "description": "<p><code>f_picture</code> of activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_every",
            "description": "<p><code>f_every</code> of activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_frequence",
            "description": "<p><code>f_frequence</code> of activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Date",
            "optional": true,
            "field": "f_start_date",
            "description": "<p><code>f_start_date</code> of activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Time",
            "optional": true,
            "field": "f_start_time",
            "description": "<p><code>f_start_time</code> of activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Time",
            "optional": true,
            "field": "f_end_time",
            "description": "<p><code>f_end_time</code> of activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_user_choice",
            "description": "<p><code>f_user_choice</code> of activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_organization_organization",
            "description": "<p><code>id</code> of entity organization to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_activity",
            "description": "<p><code>id</code> of entity entry to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_team_team",
            "description": "<p><code>id</code> of entity team to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "activity",
            "description": "<p>Created activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity.id",
            "description": "<p><code>id</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity.f_name",
            "description": "<p><code>f_name</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity.f_picture",
            "description": "<p><code>f_picture</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity.f_every",
            "description": "<p><code>f_every</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "activity.f_frequence",
            "description": "<p><code>f_frequence</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "activity.f_start_date",
            "description": "<p><code>f_start_date</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "activity.f_start_time",
            "description": "<p><code>f_start_time</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "activity.f_end_time",
            "description": "<p><code>f_end_time</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity.f_user_choice",
            "description": "<p><code>f_user_choice</code> of activity</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create activity</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Activity",
    "name": "PostApiActivityTokenToken"
  },
  {
    "type": "put",
    "url": "/api/activity/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>activity</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_activity",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the activity to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_picture",
            "description": "<p>New value of <code>f_picture</code> for activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_every",
            "description": "<p>New value of <code>f_every</code> for activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_frequence",
            "description": "<p>New value of <code>f_frequence</code> for activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Date",
            "optional": true,
            "field": "f_start_date",
            "description": "<p>New value of <code>f_start_date</code> for activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Time",
            "optional": true,
            "field": "f_start_time",
            "description": "<p>New value of <code>f_start_time</code> for activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Time",
            "optional": true,
            "field": "f_end_time",
            "description": "<p>New value of <code>f_end_time</code> for activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_user_choice",
            "description": "<p>New value of <code>f_user_choice</code> for activity</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_organization_organization",
            "description": "<p><code>id</code> of entity organization to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_activity",
            "description": "<p><code>id</code> of entity entry to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_team_team",
            "description": "<p><code>id</code> of entity team to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "activity",
            "description": "<p>Updated activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity.id",
            "description": "<p><code>id</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity.f_name",
            "description": "<p><code>f_name</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity.f_picture",
            "description": "<p><code>f_picture</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity.f_every",
            "description": "<p><code>f_every</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "activity.f_frequence",
            "description": "<p><code>f_frequence</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "activity.f_start_date",
            "description": "<p><code>f_start_date</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "activity.f_start_time",
            "description": "<p><code>f_start_time</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "activity.f_end_time",
            "description": "<p><code>f_end_time</code> of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "activity.f_user_choice",
            "description": "<p><code>f_user_choice</code> of activity</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No activity with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update activity</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Activity",
    "name": "PutApiActivityIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/entry/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>entry</code> with <code>id</code></p>",
    "group": "e_entry",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of entry to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No entry with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Entry",
    "name": "DeleteApiEntryIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/entry/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>entry</code> with <code>id</code></p>",
    "group": "e_entry",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of entry to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entry",
            "description": "<p>Object of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "entry.id",
            "description": "<p><code>id</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "entry.version",
            "description": "<p><code>version</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry.f_name",
            "description": "<p><code>f_name</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "entry.f_comment",
            "description": "<p><code>f_comment</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry.f_point",
            "description": "<p><code>f_point</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry.f_distance",
            "description": "<p><code>f_distance</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry.f_picture",
            "description": "<p><code>f_picture</code> of entry</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No entry with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Entry",
    "name": "GetApiEntryIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/entry?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>entry</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_entry",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entrys",
            "description": "<p>List of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "entrys.id",
            "description": "<p><code>id</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "entrys.version",
            "description": "<p><code>version</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entrys.f_name",
            "description": "<p><code>f_name</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "entrys.f_comment",
            "description": "<p><code>f_comment</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entrys.f_point",
            "description": "<p><code>f_point</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entrys.f_distance",
            "description": "<p><code>f_distance</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entrys.f_picture",
            "description": "<p><code>f_picture</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for entry</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Entry",
    "name": "GetApiEntryTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/entry/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>entry</code> using values defined in request's <code>body</code></p>",
    "group": "e_entry",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of entry</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_comment",
            "description": "<p><code>f_comment</code> of entry</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_point",
            "description": "<p><code>f_point</code> of entry</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_distance",
            "description": "<p><code>f_distance</code> of entry</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_picture",
            "description": "<p><code>f_picture</code> of entry</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entry",
            "description": "<p>Created entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "entry.id",
            "description": "<p><code>id</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry.f_name",
            "description": "<p><code>f_name</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "entry.f_comment",
            "description": "<p><code>f_comment</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry.f_point",
            "description": "<p><code>f_point</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry.f_distance",
            "description": "<p><code>f_distance</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry.f_picture",
            "description": "<p><code>f_picture</code> of entry</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create entry</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Entry",
    "name": "PostApiEntryTokenToken"
  },
  {
    "type": "put",
    "url": "/api/entry/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>entry</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_entry",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the entry to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for entry</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_comment",
            "description": "<p>New value of <code>f_comment</code> for entry</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_point",
            "description": "<p>New value of <code>f_point</code> for entry</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_distance",
            "description": "<p>New value of <code>f_distance</code> for entry</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_picture",
            "description": "<p>New value of <code>f_picture</code> for entry</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entry",
            "description": "<p>Updated entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "entry.id",
            "description": "<p><code>id</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry.f_name",
            "description": "<p><code>f_name</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "entry.f_comment",
            "description": "<p><code>f_comment</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry.f_point",
            "description": "<p><code>f_point</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry.f_distance",
            "description": "<p><code>f_distance</code> of entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entry.f_picture",
            "description": "<p><code>f_picture</code> of entry</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No entry with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update entry</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Entry",
    "name": "PutApiEntryIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/group/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>group</code> with <code>id</code></p>",
    "group": "e_group",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of group to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No group with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "DeleteApiGroupIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/group/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>group</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_group",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the group to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "user",
              "power"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No group with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "GetApiGroupIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/group/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>group</code> with <code>id</code></p>",
    "group": "e_group",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of group to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Object of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "group.id",
            "description": "<p><code>id</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "group.version",
            "description": "<p><code>version</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group.f_label",
            "description": "<p><code>f_label</code> of group</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No group with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "GetApiGroupIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/group?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>group</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_group",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>List of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "groups.id",
            "description": "<p><code>id</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "groups.version",
            "description": "<p><code>version</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.f_label",
            "description": "<p><code>f_label</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for group</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "GetApiGroupTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/group/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>group</code> using values defined in request's <code>body</code></p>",
    "group": "e_group",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p><code>f_label</code> of group</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_group_power",
            "description": "<p><code>id</code> of entity power to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Created group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "group.id",
            "description": "<p><code>id</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group.f_label",
            "description": "<p><code>f_label</code> of group</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create group</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "PostApiGroupTokenToken"
  },
  {
    "type": "put",
    "url": "/api/group/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>group</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_group",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the group to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p>New value of <code>f_label</code> for group</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_group_power",
            "description": "<p><code>id</code> of entity power to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Updated group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "group.id",
            "description": "<p><code>id</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group.f_label",
            "description": "<p><code>f_label</code> of group</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No group with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update group</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "PutApiGroupIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/inline_help/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>inline_help</code> with <code>id</code></p>",
    "group": "e_inline_help",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of inline_help to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No inline_help with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Inline help",
    "name": "DeleteApiInline_helpIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/inline_help/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>inline_help</code> with <code>id</code></p>",
    "group": "e_inline_help",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of inline_help to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "inline_help",
            "description": "<p>Object of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "inline_help.id",
            "description": "<p><code>id</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "inline_help.version",
            "description": "<p><code>version</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_help.f_entity",
            "description": "<p><code>f_entity</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_help.f_field",
            "description": "<p><code>f_field</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "inline_help.f_content",
            "description": "<p><code>f_content</code> of inline_help</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No inline_help with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Inline help",
    "name": "GetApiInline_helpIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/inline_help?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>inline_help</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_inline_help",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "inline_helps",
            "description": "<p>List of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "inline_helps.id",
            "description": "<p><code>id</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "inline_helps.version",
            "description": "<p><code>version</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_helps.f_entity",
            "description": "<p><code>f_entity</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_helps.f_field",
            "description": "<p><code>f_field</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "inline_helps.f_content",
            "description": "<p><code>f_content</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for inline_help</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Inline help",
    "name": "GetApiInline_helpTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/inline_help/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>inline_help</code> using values defined in request's <code>body</code></p>",
    "group": "e_inline_help",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_entity",
            "description": "<p><code>f_entity</code> of inline_help</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_field",
            "description": "<p><code>f_field</code> of inline_help</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_content",
            "description": "<p><code>f_content</code> of inline_help</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "inline_help",
            "description": "<p>Created inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "inline_help.id",
            "description": "<p><code>id</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_help.f_entity",
            "description": "<p><code>f_entity</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_help.f_field",
            "description": "<p><code>f_field</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "inline_help.f_content",
            "description": "<p><code>f_content</code> of inline_help</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create inline_help</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Inline help",
    "name": "PostApiInline_helpTokenToken"
  },
  {
    "type": "put",
    "url": "/api/inline_help/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>inline_help</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_inline_help",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the inline_help to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_entity",
            "description": "<p>New value of <code>f_entity</code> for inline_help</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_field",
            "description": "<p>New value of <code>f_field</code> for inline_help</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_content",
            "description": "<p>New value of <code>f_content</code> for inline_help</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "inline_help",
            "description": "<p>Updated inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "inline_help.id",
            "description": "<p><code>id</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_help.f_entity",
            "description": "<p><code>f_entity</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inline_help.f_field",
            "description": "<p><code>f_field</code> of inline_help</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "inline_help.f_content",
            "description": "<p><code>f_content</code> of inline_help</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No inline_help with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update inline_help</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Inline help",
    "name": "PutApiInline_helpIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/media/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>media</code> with <code>id</code></p>",
    "group": "e_media",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of media to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media",
    "name": "DeleteApiMediaIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>media</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_media",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the media to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "media_mail",
              "media_notification",
              "media_function"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media",
    "name": "GetApiMediaIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/media/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>media</code> with <code>id</code></p>",
    "group": "e_media",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of media to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Object of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media.id",
            "description": "<p><code>id</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media.version",
            "description": "<p><code>version</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "media.f_type",
            "description": "<p><code>f_type</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.f_name",
            "description": "<p><code>f_name</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.f_target_entity",
            "description": "<p><code>f_target_entity</code> of media</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media",
    "name": "GetApiMediaIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>media</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_media",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "medias",
            "description": "<p>List of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "medias.id",
            "description": "<p><code>id</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "medias.version",
            "description": "<p><code>version</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "medias.f_type",
            "description": "<p><code>f_type</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medias.f_name",
            "description": "<p><code>f_name</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medias.f_target_entity",
            "description": "<p><code>f_target_entity</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for media</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media",
    "name": "GetApiMediaTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/media/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>media</code> using values defined in request's <code>body</code></p>",
    "group": "e_media",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_type",
            "description": "<p><code>f_type</code> of media</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of media</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_target_entity",
            "description": "<p><code>f_target_entity</code> of media</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_mail",
            "description": "<p><code>id</code> of entity media_mail to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_notification",
            "description": "<p><code>id</code> of entity media_notification to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_function",
            "description": "<p><code>id</code> of entity media_function to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Created media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media.id",
            "description": "<p><code>id</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "media.f_type",
            "description": "<p><code>f_type</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.f_name",
            "description": "<p><code>f_name</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.f_target_entity",
            "description": "<p><code>f_target_entity</code> of media</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create media</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media",
    "name": "PostApiMediaTokenToken"
  },
  {
    "type": "put",
    "url": "/api/media/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>media</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_media",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the media to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Enum",
            "optional": true,
            "field": "f_type",
            "description": "<p>New value of <code>f_type</code> for media</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for media</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_target_entity",
            "description": "<p>New value of <code>f_target_entity</code> for media</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_mail",
            "description": "<p><code>id</code> of entity media_mail to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_notification",
            "description": "<p><code>id</code> of entity media_notification to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_media_function",
            "description": "<p><code>id</code> of entity media_function to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media",
            "description": "<p>Updated media</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media.id",
            "description": "<p><code>id</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "media.f_type",
            "description": "<p><code>f_type</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.f_name",
            "description": "<p><code>f_name</code> of media</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media.f_target_entity",
            "description": "<p><code>f_target_entity</code> of media</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update media</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media",
    "name": "PutApiMediaIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/media_function/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>media_function</code> with <code>id</code></p>",
    "group": "e_media_function",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of media_function to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_function with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media function",
    "name": "DeleteApiMedia_functionIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media_function/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>media_function</code> with <code>id</code></p>",
    "group": "e_media_function",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of media_function to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_function",
            "description": "<p>Object of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_function.id",
            "description": "<p><code>id</code> of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_function.version",
            "description": "<p><code>version</code> of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_function.f_title",
            "description": "<p><code>f_title</code> of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_function.f_function",
            "description": "<p><code>f_function</code> of media_function</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_function with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media function",
    "name": "GetApiMedia_functionIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media_function?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>media_function</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_media_function",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "media_functions",
            "description": "<p>List of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_functions.id",
            "description": "<p><code>id</code> of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_functions.version",
            "description": "<p><code>version</code> of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_functions.f_title",
            "description": "<p><code>f_title</code> of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_functions.f_function",
            "description": "<p><code>f_function</code> of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for media_function</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media function",
    "name": "GetApiMedia_functionTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/media_function/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>media_function</code> using values defined in request's <code>body</code></p>",
    "group": "e_media_function",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_title",
            "description": "<p><code>f_title</code> of media_function</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_function",
            "description": "<p><code>f_function</code> of media_function</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_function",
            "description": "<p>Created media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_function.id",
            "description": "<p><code>id</code> of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_function.f_title",
            "description": "<p><code>f_title</code> of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_function.f_function",
            "description": "<p><code>f_function</code> of media_function</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create media_function</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media function",
    "name": "PostApiMedia_functionTokenToken"
  },
  {
    "type": "put",
    "url": "/api/media_function/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>media_function</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_media_function",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the media_function to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_title",
            "description": "<p>New value of <code>f_title</code> for media_function</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_function",
            "description": "<p>New value of <code>f_function</code> for media_function</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_function",
            "description": "<p>Updated media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_function.id",
            "description": "<p><code>id</code> of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_function.f_title",
            "description": "<p><code>f_title</code> of media_function</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_function.f_function",
            "description": "<p><code>f_function</code> of media_function</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_function with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update media_function</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media function",
    "name": "PutApiMedia_functionIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/media_mail/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>media_mail</code> with <code>id</code></p>",
    "group": "e_media_mail",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of media_mail to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_mail with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media mail",
    "name": "DeleteApiMedia_mailIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media_mail/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>media_mail</code> with <code>id</code></p>",
    "group": "e_media_mail",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of media_mail to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_mail",
            "description": "<p>Object of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_mail.id",
            "description": "<p><code>id</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_mail.version",
            "description": "<p><code>version</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_to",
            "description": "<p><code>f_to</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_cc",
            "description": "<p><code>f_cc</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_cci",
            "description": "<p><code>f_cci</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_from",
            "description": "<p><code>f_from</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_subject",
            "description": "<p><code>f_subject</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_mail.f_content",
            "description": "<p><code>f_content</code> of media_mail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_mail with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media mail",
    "name": "GetApiMedia_mailIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media_mail?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>media_mail</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_media_mail",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "media_mails",
            "description": "<p>List of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_mails.id",
            "description": "<p><code>id</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_mails.version",
            "description": "<p><code>version</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mails.f_to",
            "description": "<p><code>f_to</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mails.f_cc",
            "description": "<p><code>f_cc</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mails.f_cci",
            "description": "<p><code>f_cci</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mails.f_from",
            "description": "<p><code>f_from</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mails.f_subject",
            "description": "<p><code>f_subject</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_mails.f_content",
            "description": "<p><code>f_content</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for media_mail</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media mail",
    "name": "GetApiMedia_mailTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/media_mail/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>media_mail</code> using values defined in request's <code>body</code></p>",
    "group": "e_media_mail",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_to",
            "description": "<p><code>f_to</code> of media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_cc",
            "description": "<p><code>f_cc</code> of media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_cci",
            "description": "<p><code>f_cci</code> of media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_from",
            "description": "<p><code>f_from</code> of media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_subject",
            "description": "<p><code>f_subject</code> of media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_content",
            "description": "<p><code>f_content</code> of media_mail</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_mail",
            "description": "<p>Created media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_mail.id",
            "description": "<p><code>id</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_to",
            "description": "<p><code>f_to</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_cc",
            "description": "<p><code>f_cc</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_cci",
            "description": "<p><code>f_cci</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_from",
            "description": "<p><code>f_from</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_subject",
            "description": "<p><code>f_subject</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_mail.f_content",
            "description": "<p><code>f_content</code> of media_mail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create media_mail</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media mail",
    "name": "PostApiMedia_mailTokenToken"
  },
  {
    "type": "put",
    "url": "/api/media_mail/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>media_mail</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_media_mail",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the media_mail to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_to",
            "description": "<p>New value of <code>f_to</code> for media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_cc",
            "description": "<p>New value of <code>f_cc</code> for media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_cci",
            "description": "<p>New value of <code>f_cci</code> for media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_from",
            "description": "<p>New value of <code>f_from</code> for media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_subject",
            "description": "<p>New value of <code>f_subject</code> for media_mail</p>"
          },
          {
            "group": "Body parameters",
            "type": "Text",
            "optional": true,
            "field": "f_content",
            "description": "<p>New value of <code>f_content</code> for media_mail</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_mail",
            "description": "<p>Updated media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_mail.id",
            "description": "<p><code>id</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_to",
            "description": "<p><code>f_to</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_cc",
            "description": "<p><code>f_cc</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_cci",
            "description": "<p><code>f_cci</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_from",
            "description": "<p><code>f_from</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_mail.f_subject",
            "description": "<p><code>f_subject</code> of media_mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "media_mail.f_content",
            "description": "<p><code>f_content</code> of media_mail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_mail with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update media_mail</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media mail",
    "name": "PutApiMedia_mailIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/media_notification/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>media_notification</code> with <code>id</code></p>",
    "group": "e_media_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of media_notification to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_notification with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media notification",
    "name": "DeleteApiMedia_notificationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media_notification/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>media_notification</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_media_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the media_notification to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "group",
              "user"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_notification with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media notification",
    "name": "GetApiMedia_notificationIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/media_notification/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>media_notification</code> with <code>id</code></p>",
    "group": "e_media_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of media_notification to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_notification",
            "description": "<p>Object of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_notification.id",
            "description": "<p><code>id</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_notification.version",
            "description": "<p><code>version</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_title",
            "description": "<p><code>f_title</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_description",
            "description": "<p><code>f_description</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_icon",
            "description": "<p><code>f_icon</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_color",
            "description": "<p><code>f_color</code> of media_notification</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_notification with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media notification",
    "name": "GetApiMedia_notificationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/media_notification?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>media_notification</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_media_notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "media_notifications",
            "description": "<p>List of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_notifications.id",
            "description": "<p><code>id</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_notifications.version",
            "description": "<p><code>version</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notifications.f_title",
            "description": "<p><code>f_title</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notifications.f_description",
            "description": "<p><code>f_description</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notifications.f_icon",
            "description": "<p><code>f_icon</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notifications.f_color",
            "description": "<p><code>f_color</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for media_notification</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media notification",
    "name": "GetApiMedia_notificationTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/media_notification/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>media_notification</code> using values defined in request's <code>body</code></p>",
    "group": "e_media_notification",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_title",
            "description": "<p><code>f_title</code> of media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_description",
            "description": "<p><code>f_description</code> of media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_icon",
            "description": "<p><code>f_icon</code> of media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_color",
            "description": "<p><code>f_color</code> of media_notification</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_notification",
            "description": "<p>Created media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_notification.id",
            "description": "<p><code>id</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_title",
            "description": "<p><code>f_title</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_description",
            "description": "<p><code>f_description</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_icon",
            "description": "<p><code>f_icon</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_color",
            "description": "<p><code>f_color</code> of media_notification</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create media_notification</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media notification",
    "name": "PostApiMedia_notificationTokenToken"
  },
  {
    "type": "put",
    "url": "/api/media_notification/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>media_notification</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_media_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the media_notification to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_title",
            "description": "<p>New value of <code>f_title</code> for media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_description",
            "description": "<p>New value of <code>f_description</code> for media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_icon",
            "description": "<p>New value of <code>f_icon</code> for media_notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_color",
            "description": "<p>New value of <code>f_color</code> for media_notification</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "media_notification",
            "description": "<p>Updated media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "media_notification.id",
            "description": "<p><code>id</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_title",
            "description": "<p><code>f_title</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_description",
            "description": "<p><code>f_description</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_icon",
            "description": "<p><code>f_icon</code> of media_notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "media_notification.f_color",
            "description": "<p><code>f_color</code> of media_notification</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No media_notification with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update media_notification</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Media notification",
    "name": "PutApiMedia_notificationIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/notification/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>notification</code> with <code>id</code></p>",
    "group": "e_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of notification to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No notification with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Notification",
    "name": "DeleteApiNotificationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/notification/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>notification</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the notification to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "user"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No notification with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Notification",
    "name": "GetApiNotificationIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/notification/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>notification</code> with <code>id</code></p>",
    "group": "e_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of notification to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification",
            "description": "<p>Object of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notification.id",
            "description": "<p><code>id</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notification.version",
            "description": "<p><code>version</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_title",
            "description": "<p><code>f_title</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_description",
            "description": "<p><code>f_description</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_url",
            "description": "<p><code>f_url</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_color",
            "description": "<p><code>f_color</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_icon",
            "description": "<p><code>f_icon</code> of notification</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No notification with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Notification",
    "name": "GetApiNotificationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/notification?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>notification</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "notifications",
            "description": "<p>List of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notifications.id",
            "description": "<p><code>id</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notifications.version",
            "description": "<p><code>version</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.f_title",
            "description": "<p><code>f_title</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.f_description",
            "description": "<p><code>f_description</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.f_url",
            "description": "<p><code>f_url</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.f_color",
            "description": "<p><code>f_color</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.f_icon",
            "description": "<p><code>f_icon</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for notification</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Notification",
    "name": "GetApiNotificationTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/notification/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>notification</code> using values defined in request's <code>body</code></p>",
    "group": "e_notification",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_title",
            "description": "<p><code>f_title</code> of notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_description",
            "description": "<p><code>f_description</code> of notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_url",
            "description": "<p><code>f_url</code> of notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_color",
            "description": "<p><code>f_color</code> of notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_icon",
            "description": "<p><code>f_icon</code> of notification</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification",
            "description": "<p>Created notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notification.id",
            "description": "<p><code>id</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_title",
            "description": "<p><code>f_title</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_description",
            "description": "<p><code>f_description</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_url",
            "description": "<p><code>f_url</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_color",
            "description": "<p><code>f_color</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_icon",
            "description": "<p><code>f_icon</code> of notification</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create notification</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Notification",
    "name": "PostApiNotificationTokenToken"
  },
  {
    "type": "put",
    "url": "/api/notification/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>notification</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_notification",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the notification to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_title",
            "description": "<p>New value of <code>f_title</code> for notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_description",
            "description": "<p>New value of <code>f_description</code> for notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_url",
            "description": "<p>New value of <code>f_url</code> for notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_color",
            "description": "<p>New value of <code>f_color</code> for notification</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_icon",
            "description": "<p>New value of <code>f_icon</code> for notification</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification",
            "description": "<p>Updated notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notification.id",
            "description": "<p><code>id</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_title",
            "description": "<p><code>f_title</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_description",
            "description": "<p><code>f_description</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_url",
            "description": "<p><code>f_url</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_color",
            "description": "<p><code>f_color</code> of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.f_icon",
            "description": "<p><code>f_icon</code> of notification</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No notification with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update notification</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Notification",
    "name": "PutApiNotificationIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/organization/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>organization</code> with <code>id</code></p>",
    "group": "e_organization",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of organization to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No organization with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Organization",
    "name": "DeleteApiOrganizationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/organization/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>organization</code> with <code>id</code></p>",
    "group": "e_organization",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of organization to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organization",
            "description": "<p>Object of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "organization.id",
            "description": "<p><code>id</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "organization.version",
            "description": "<p><code>version</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organization.f_name",
            "description": "<p><code>f_name</code> of organization</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No organization with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Organization",
    "name": "GetApiOrganizationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/organization?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>organization</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_organization",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "organizations",
            "description": "<p>List of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "organizations.id",
            "description": "<p><code>id</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "organizations.version",
            "description": "<p><code>version</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organizations.f_name",
            "description": "<p><code>f_name</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for organization</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Organization",
    "name": "GetApiOrganizationTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/organization/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>organization</code> using values defined in request's <code>body</code></p>",
    "group": "e_organization",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of organization</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organization",
            "description": "<p>Created organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "organization.id",
            "description": "<p><code>id</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organization.f_name",
            "description": "<p><code>f_name</code> of organization</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create organization</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Organization",
    "name": "PostApiOrganizationTokenToken"
  },
  {
    "type": "put",
    "url": "/api/organization/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>organization</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_organization",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the organization to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for organization</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organization",
            "description": "<p>Updated organization</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "organization.id",
            "description": "<p><code>id</code> of organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organization.f_name",
            "description": "<p><code>f_name</code> of organization</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No organization with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update organization</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Organization",
    "name": "PutApiOrganizationIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/power/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>power</code> with <code>id</code></p>",
    "group": "e_power",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of power to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No power with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Power",
    "name": "DeleteApiPowerIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/power/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>power</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_power",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the power to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "user"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No power with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Power",
    "name": "GetApiPowerIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/power/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>power</code> with <code>id</code></p>",
    "group": "e_power",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of power to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "power",
            "description": "<p>Object of power</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "power.id",
            "description": "<p><code>id</code> of power</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "power.version",
            "description": "<p><code>version</code> of power</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "power.f_label",
            "description": "<p><code>f_label</code> of power</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "power.f_point",
            "description": "<p><code>f_point</code> of power</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No power with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Power",
    "name": "GetApiPowerIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/power?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>power</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_power",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "powers",
            "description": "<p>List of power</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "powers.id",
            "description": "<p><code>id</code> of power</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "powers.version",
            "description": "<p><code>version</code> of power</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "powers.f_label",
            "description": "<p><code>f_label</code> of power</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "powers.f_point",
            "description": "<p><code>f_point</code> of power</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for power</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Power",
    "name": "GetApiPowerTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/power/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>power</code> using values defined in request's <code>body</code></p>",
    "group": "e_power",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p><code>f_label</code> of power</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_point",
            "description": "<p><code>f_point</code> of power</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "power",
            "description": "<p>Created power</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "power.id",
            "description": "<p><code>id</code> of power</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "power.f_label",
            "description": "<p><code>f_label</code> of power</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "power.f_point",
            "description": "<p><code>f_point</code> of power</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create power</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Power",
    "name": "PostApiPowerTokenToken"
  },
  {
    "type": "put",
    "url": "/api/power/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>power</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_power",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the power to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p>New value of <code>f_label</code> for power</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_point",
            "description": "<p>New value of <code>f_point</code> for power</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "power",
            "description": "<p>Updated power</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "power.id",
            "description": "<p><code>id</code> of power</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "power.f_label",
            "description": "<p><code>f_label</code> of power</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "power.f_point",
            "description": "<p><code>f_point</code> of power</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No power with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update power</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Power",
    "name": "PutApiPowerIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/role/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>role</code> with <code>id</code></p>",
    "group": "e_role",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of role to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No role with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "DeleteApiRoleIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/role/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>role</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_role",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the role to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "user"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No role with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "GetApiRoleIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/role/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>role</code> with <code>id</code></p>",
    "group": "e_role",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of role to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>Object of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role.id",
            "description": "<p><code>id</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role.version",
            "description": "<p><code>version</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role.f_label",
            "description": "<p><code>f_label</code> of role</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No role with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "GetApiRoleIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/role?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>role</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_role",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roles",
            "description": "<p>List of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roles.id",
            "description": "<p><code>id</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roles.version",
            "description": "<p><code>version</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles.f_label",
            "description": "<p><code>f_label</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for role</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "GetApiRoleTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/role/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>role</code> using values defined in request's <code>body</code></p>",
    "group": "e_role",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p><code>f_label</code> of role</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>Created role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role.id",
            "description": "<p><code>id</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role.f_label",
            "description": "<p><code>f_label</code> of role</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create role</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "PostApiRoleTokenToken"
  },
  {
    "type": "put",
    "url": "/api/role/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>role</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_role",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the role to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p>New value of <code>f_label</code> for role</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>Updated role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role.id",
            "description": "<p><code>id</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role.f_label",
            "description": "<p><code>f_label</code> of role</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No role with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update role</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "PutApiRoleIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/service/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>service</code> with <code>id</code></p>",
    "group": "e_service",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of service to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No service with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Service",
    "name": "DeleteApiServiceIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/service/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>service</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_service",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the service to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "organization",
              "activity"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No service with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Service",
    "name": "GetApiServiceIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/service/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>service</code> with <code>id</code></p>",
    "group": "e_service",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of service to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "service",
            "description": "<p>Object of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "service.id",
            "description": "<p><code>id</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "service.version",
            "description": "<p><code>version</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_name",
            "description": "<p><code>f_name</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "service.f_creation_date",
            "description": "<p><code>f_creation_date</code> of service</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No service with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Service",
    "name": "GetApiServiceIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/service?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>service</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_service",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "services",
            "description": "<p>List of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "services.id",
            "description": "<p><code>id</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "services.version",
            "description": "<p><code>version</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "services.f_name",
            "description": "<p><code>f_name</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "services.f_creation_date",
            "description": "<p><code>f_creation_date</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for service</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Service",
    "name": "GetApiServiceTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/service/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>service</code> using values defined in request's <code>body</code></p>",
    "group": "e_service",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of service</p>"
          },
          {
            "group": "Body parameters",
            "type": "Date",
            "optional": true,
            "field": "f_creation_date",
            "description": "<p><code>f_creation_date</code> of service</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_organization_organization",
            "description": "<p><code>id</code> of entity organization to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_service_activity",
            "description": "<p><code>id</code> of entity activity to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "service",
            "description": "<p>Created service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "service.id",
            "description": "<p><code>id</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_name",
            "description": "<p><code>f_name</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "service.f_creation_date",
            "description": "<p><code>f_creation_date</code> of service</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create service</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Service",
    "name": "PostApiServiceTokenToken"
  },
  {
    "type": "put",
    "url": "/api/service/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>service</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_service",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the service to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for service</p>"
          },
          {
            "group": "Body parameters",
            "type": "Date",
            "optional": true,
            "field": "f_creation_date",
            "description": "<p>New value of <code>f_creation_date</code> for service</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_organization_organization",
            "description": "<p><code>id</code> of entity organization to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_service_activity",
            "description": "<p><code>id</code> of entity activity to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "service",
            "description": "<p>Updated service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "service.id",
            "description": "<p><code>id</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service.f_name",
            "description": "<p><code>f_name</code> of service</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "service.f_creation_date",
            "description": "<p><code>f_creation_date</code> of service</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No service with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update service</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Service",
    "name": "PutApiServiceIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/status/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>status</code> with <code>id</code></p>",
    "group": "e_status",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of status to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No status with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Status",
    "name": "DeleteApiStatusIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/status/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>status</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_status",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the status to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "translation",
              "action",
              "status"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No status with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Status",
    "name": "GetApiStatusIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/status/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>status</code> with <code>id</code></p>",
    "group": "e_status",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of status to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>Object of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.id",
            "description": "<p><code>id</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.version",
            "description": "<p><code>version</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_entity",
            "description": "<p><code>f_entity</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_field",
            "description": "<p><code>f_field</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_name",
            "description": "<p><code>f_name</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_color",
            "description": "<p><code>f_color</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.f_position",
            "description": "<p><code>f_position</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status.f_default",
            "description": "<p><code>f_default</code> of status</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No status with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Status",
    "name": "GetApiStatusIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/status?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>status</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "statuss",
            "description": "<p>List of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statuss.id",
            "description": "<p><code>id</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statuss.version",
            "description": "<p><code>version</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statuss.f_entity",
            "description": "<p><code>f_entity</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statuss.f_field",
            "description": "<p><code>f_field</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statuss.f_name",
            "description": "<p><code>f_name</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statuss.f_color",
            "description": "<p><code>f_color</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statuss.f_position",
            "description": "<p><code>f_position</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "statuss.f_default",
            "description": "<p><code>f_default</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for status</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Status",
    "name": "GetApiStatusTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/status/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>status</code> using values defined in request's <code>body</code></p>",
    "group": "e_status",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_entity",
            "description": "<p><code>f_entity</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_field",
            "description": "<p><code>f_field</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_color",
            "description": "<p><code>f_color</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_position",
            "description": "<p><code>f_position</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_default",
            "description": "<p><code>f_default</code> of status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_status_translations",
            "description": "<p><code>id</code> of entity translation to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_status_actions",
            "description": "<p><code>id</code> of entity action to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>Created status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.id",
            "description": "<p><code>id</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_entity",
            "description": "<p><code>f_entity</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_field",
            "description": "<p><code>f_field</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_name",
            "description": "<p><code>f_name</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_color",
            "description": "<p><code>f_color</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.f_position",
            "description": "<p><code>f_position</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status.f_default",
            "description": "<p><code>f_default</code> of status</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create status</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Status",
    "name": "PostApiStatusTokenToken"
  },
  {
    "type": "put",
    "url": "/api/status/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>status</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_status",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the status to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_entity",
            "description": "<p>New value of <code>f_entity</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_field",
            "description": "<p>New value of <code>f_field</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_color",
            "description": "<p>New value of <code>f_color</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_position",
            "description": "<p>New value of <code>f_position</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_default",
            "description": "<p>New value of <code>f_default</code> for status</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_status_translations",
            "description": "<p><code>id</code> of entity translation to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_status_actions",
            "description": "<p><code>id</code> of entity action to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>Updated status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.id",
            "description": "<p><code>id</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_entity",
            "description": "<p><code>f_entity</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_field",
            "description": "<p><code>f_field</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_name",
            "description": "<p><code>f_name</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.f_color",
            "description": "<p><code>f_color</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.f_position",
            "description": "<p><code>f_position</code> of status</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status.f_default",
            "description": "<p><code>f_default</code> of status</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No status with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update status</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Status",
    "name": "PutApiStatusIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/team/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>team</code> with <code>id</code></p>",
    "group": "e_team",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of team to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No team with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Team",
    "name": "DeleteApiTeamIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/team/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>team</code> with <code>id</code></p>",
    "group": "e_team",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of team to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team",
            "description": "<p>Object of team</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "team.id",
            "description": "<p><code>id</code> of team</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "team.version",
            "description": "<p><code>version</code> of team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "team.f_name",
            "description": "<p><code>f_name</code> of team</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No team with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Team",
    "name": "GetApiTeamIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/team?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>team</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_team",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "teams",
            "description": "<p>List of team</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "teams.id",
            "description": "<p><code>id</code> of team</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "teams.version",
            "description": "<p><code>version</code> of team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.f_name",
            "description": "<p><code>f_name</code> of team</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for team</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Team",
    "name": "GetApiTeamTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/team/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>team</code> using values defined in request's <code>body</code></p>",
    "group": "e_team",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p><code>f_name</code> of team</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team",
            "description": "<p>Created team</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "team.id",
            "description": "<p><code>id</code> of team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "team.f_name",
            "description": "<p><code>f_name</code> of team</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create team</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Team",
    "name": "PostApiTeamTokenToken"
  },
  {
    "type": "put",
    "url": "/api/team/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>team</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_team",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the team to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_name",
            "description": "<p>New value of <code>f_name</code> for team</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team",
            "description": "<p>Updated team</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "team.id",
            "description": "<p><code>id</code> of team</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "team.f_name",
            "description": "<p><code>f_name</code> of team</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No team with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update team</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Team",
    "name": "PutApiTeamIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/translation/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>translation</code> with <code>id</code></p>",
    "group": "e_translation",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of translation to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No translation with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Translation",
    "name": "DeleteApiTranslationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/translation/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>translation</code> with <code>id</code></p>",
    "group": "e_translation",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of translation to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "translation",
            "description": "<p>Object of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "translation.id",
            "description": "<p><code>id</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "translation.version",
            "description": "<p><code>version</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translation.f_language",
            "description": "<p><code>f_language</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translation.f_value",
            "description": "<p><code>f_value</code> of translation</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No translation with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Translation",
    "name": "GetApiTranslationIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/translation?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>translation</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_translation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "translations",
            "description": "<p>List of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "translations.id",
            "description": "<p><code>id</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "translations.version",
            "description": "<p><code>version</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translations.f_language",
            "description": "<p><code>f_language</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translations.f_value",
            "description": "<p><code>f_value</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for translation</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Translation",
    "name": "GetApiTranslationTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/translation/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>translation</code> using values defined in request's <code>body</code></p>",
    "group": "e_translation",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_language",
            "description": "<p><code>f_language</code> of translation</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_value",
            "description": "<p><code>f_value</code> of translation</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "translation",
            "description": "<p>Created translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "translation.id",
            "description": "<p><code>id</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translation.f_language",
            "description": "<p><code>f_language</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translation.f_value",
            "description": "<p><code>f_value</code> of translation</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create translation</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Translation",
    "name": "PostApiTranslationTokenToken"
  },
  {
    "type": "put",
    "url": "/api/translation/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>translation</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_translation",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the translation to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_language",
            "description": "<p>New value of <code>f_language</code> for translation</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_value",
            "description": "<p>New value of <code>f_value</code> for translation</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "translation",
            "description": "<p>Updated translation</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "translation.id",
            "description": "<p><code>id</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translation.f_language",
            "description": "<p><code>f_language</code> of translation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "translation.f_value",
            "description": "<p><code>f_value</code> of translation</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No translation with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update translation</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "Translation",
    "name": "PutApiTranslationIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/user/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>user</code> with <code>id</code></p>",
    "group": "e_user",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of user to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No user with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "DeleteApiUserIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/user/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>user</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_user",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the user to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "role",
              "group",
              "notification",
              "service",
              "power",
              "team"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No user with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "GetApiUserIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/user/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>user</code> with <code>id</code></p>",
    "group": "e_user",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of user to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Object of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.id",
            "description": "<p><code>id</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.version",
            "description": "<p><code>version</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_password",
            "description": "<p><code>f_password</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_email",
            "description": "<p><code>f_email</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_token_password_reset",
            "description": "<p><code>f_token_password_reset</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.f_enabled",
            "description": "<p><code>f_enabled</code> of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No user with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "GetApiUserIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/user?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>user</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "e_user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.id",
            "description": "<p><code>id</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.version",
            "description": "<p><code>version</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.f_password",
            "description": "<p><code>f_password</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.f_email",
            "description": "<p><code>f_email</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.f_token_password_reset",
            "description": "<p><code>f_token_password_reset</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.f_enabled",
            "description": "<p><code>f_enabled</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for user</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "GetApiUserTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/user/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>user</code> using values defined in request's <code>body</code></p>",
    "group": "e_user",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_email",
            "description": "<p><code>f_email</code> of user</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_service_service",
            "description": "<p><code>id</code> of entity service to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_team_team",
            "description": "<p><code>id</code> of entity team to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Created user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.id",
            "description": "<p><code>id</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_email",
            "description": "<p><code>f_email</code> of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create user</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "PostApiUserTokenToken"
  },
  {
    "type": "put",
    "url": "/api/user/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>user</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "e_user",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the user to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_login",
            "description": "<p>New value of <code>f_login</code> for user</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_email",
            "description": "<p>New value of <code>f_email</code> for user</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_service_service",
            "description": "<p><code>id</code> of entity service to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "fk_id_team_team",
            "description": "<p><code>id</code> of entity team to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Updated user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.id",
            "description": "<p><code>id</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_email",
            "description": "<p><code>f_email</code> of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No user with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update user</p>"
          }
        ]
      }
    },
    "filename": "/home/magikbyte/NetBeansProjects/newmips/workspace/9/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "PutApiUserIdTokenToken"
  }
] });
