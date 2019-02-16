var Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
    // order: flightOrder
};

// function flightOrder(req, res) { 
  // Flight.find({}, null, {sort: '-date'}, function(err, flights) {
  //   res.render('flights/index', { flights })
  // });

  // OR
        // Flight.find().sort({date: -1}, function(err, flights){
        //   res.render('flights/index', { flights });
        // })
        // };


function index(req, res) {
  Flight.find({}, null, {sort: '-date'}, function(err, flights) {
          res.render('flights/index', { flights });
        });
    };

function create(req, res) {
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
    }
    var flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }

function newFlight(req, res) {
    res.render('flights/new');
  };