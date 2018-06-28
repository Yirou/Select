var globalConf = require('./global');

var databaseConf = {
	develop: {
		connection: {
                  host: '127.0.0.1',
                  port: '3306',
                  user: '',
                  password: '',
                  database: '',
                  users_table: 'user',
                  dateStrings: 'true'
		}
	},
      recette: {
            connection: {
                  host: '127.0.0.1',
                  port: '3306',
                  user: '',
                  password: '',
                  database: '',
                  users_table: 'user',
                  dateStrings: 'true'
            }
      },
	production: {
		connection: {
                  host: '127.0.0.1',
                  port: '3306',
                  user: '',
                  password: '',
                  database: '',
                  users_table: 'user',
                  dateStrings: 'true'
		}
	}
}

module.exports = databaseConf[globalConf.env];
