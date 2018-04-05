'use strict';
var dataProvider = require('../data/query.js');
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
    post: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
