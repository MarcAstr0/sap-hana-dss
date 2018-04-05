'use strict';
var Mockgen = require('./mockgen.js');
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
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/query',
                operation: 'post',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/query',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
