'use strict';

const dataProvider = require('../data/query.js');
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
   */
  post: function executeQuery(req, res, next) {
    /**
     * Get the data for response 200
     * For response `default` status 200 is used.
     */
    let status = 200;
    let provider = dataProvider.post['200'];
    provider(req, res, (err, data) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      if (!data) {
        status = 204;
        provider = dataProvider.post[204];
        provider(req, res, (err, data) => {
          if (err) {
            res.status(500).send(err);
          }
          res.status(status).send(data);
        });
        return;
      }
      res.status(status).send(data);
    });
  }
};
