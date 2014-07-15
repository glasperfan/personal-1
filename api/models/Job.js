/**
 * Job
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 

 * Job = employment or education
 */

var Job = {
	tableName: 'jobs',
	adapter: 'mysql',

  	attributes: {
  		position: 'STRING',
  		group: 'STRING',
  		description: 'TEXT',
  		type: 'STRING',	/* 'education' or 'employment' */
  		started_at: 'DATE',
  		ended_at: 'DATE'
  	}
};


module.exports = Job;
