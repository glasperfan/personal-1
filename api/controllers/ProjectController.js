/**
 * ProjectController
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



module.exports = {
    
  
  // GET /project/new
  new: function (req, res) {
    return res.view()
  },

  // POST /project/new 
  create: function (req, res) {
    var date_ended = ((req.param('alreadyEnded') == 'no') ? new Date(req.param('dateEnded')) : null)
    Project.create({
      name: req.param('name'),
      description: req.param('description'),
      started_at: new Date(req.param('dateStarted')),
      ended_at: date_ended
    })
      .done(function(err, p) {
        return res.json({
          project: p
        });
      });
  },


  // DESTROY METHOD:
  // Route: '/project/destroy/:id'
  // Convention: destroy(id)


  // FIND METHOD:
  // Route: '/project/find/:id'
  // Convention: find(id)
  // Route: '/project/find/'
  // Convention: find(:all)


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ProjectController)
   */
  _config: {}

  
};
