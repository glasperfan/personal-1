/**
 * Work
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var Work = {
	tableName: 'works',
	adapter: 'mysql',

  	attributes: {
  		name: 'STRING',
  		instrumentation: 'STRING',
  		description: 'TEXT',
  		link: 'STRING', /* stores relative url of the file upload */
  		started_at: 'DATE',
  		ended_at: 'DATE'
  	}
};


module.exports = Work;
