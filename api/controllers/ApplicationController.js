/**
 * ApplicationController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var Q = require('q');

module.exports = {
    
  index: function(req, res) {
  	var promise = Q.all([ Job.find(), Project.find(), Skill.find(), Work.find() ])
	promise.then(function(results) {
		return res.view({
        	jobs: results[0],
        	projects: results[1],
        	skills: results[2],
        	works: results[3]
    	});
	});
  },

  json: function(req, res) {
  	var promise = Q.all([ Job.find(), Project.find(), Skill.find(), Work.find() ])
	promise.then(function(results) {
		return res.json({
        	jobs: results[0],
        	projects: results[1],
        	skills: results[2],
        	works: results[3]
    	});
	});
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ApplicationController)
   */
  _config: {}

  
};
