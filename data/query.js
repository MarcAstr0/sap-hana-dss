'use strict';

const hdbPool = require('node-hdb-pool');

/**
 * Operations on /query
 */
module.exports = {
  /**
   * summary:
   * description: Executes a SQL query on the database.
   * parameters: request
   * produces:
   * responses: 200, default
   * operationId:
   */
  post: {
    200: (req, res, callback) => {
      const hpool = hdbPool.createPool({
        host: req.body.database_parameters.db_host,
        port: req.body.database_parameters.db_port,
        user: req.body.database_parameters.db_user,
        password: req.body.database_parameters.db_password,
        maxPoolSize: 5,
        databaseName: req.body.database_parameters.db_name
      });

      const clientExec = (query) => new Promise((pass, fail) => {
        if (hpool) {
          hpool.exec(query, [], (err, result) => {
            if (err) fail(err);
            else pass(result);
          });
        } else fail('No pool available');
      });

      clientExec(req.body.query).then((data) => {
        if (data.length === 0) {
          callback(null, null);
        } else {
          callback(null, { result: data });
        }
      }).catch((e) => {
        callback({
          code: e.code,
          message: e.message
        }, null);
      });
    },
    204: (req, res, callback) => {
      callback(null, null);
    }
  }
};
