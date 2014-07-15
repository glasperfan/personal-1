/**
 * Skill
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var Skill = {
	tableName: 'skills',
	adapter: 'mysql',

  	attributes: {
  		name: 'STRING',
  		type: 'STRING'
  	}
};


module.exports = Skill;