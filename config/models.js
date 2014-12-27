
// models.js


module.exports = {
	
	/* 	Database migration options:
	   	1. safe  - never auto-migrate my database(s). I will do it myself (by hand) 
 	   	2. alter - auto-migrate, but attempt to keep my existing data (experimental)
  		3. drop  - wipe/drop ALL my data and rebuild models every time I lift Sails
  	*/

	models: { migrate: 'alter' }
}