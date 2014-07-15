/**
 * Project
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models


 * Project = academic projects (CS projects, ongoing music projects)

 */

var Project = {
	tableName: 'projects',
	adapter: 'mysql',

  	attributes: {
  		name: 'STRING',
  		description: 'TEXT',
  		started_at: 'DATE',
  		ended_at: 'DATE',
  	}
};


module.exports = Project;