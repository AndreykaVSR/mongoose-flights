var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
    // addToFlight
};

// function addToFlight(req, res) {
//   Flight.findById(req.params.id, function(err, flight) {
//     flight.push(req.body.flightId);
//     flight.save(function(err) {
//       res.render('/flights/show/${flight._id}');
//     });
//   });
// }

function show(req, res) {
  // console.log('I see you');
    Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
    // console.log(tickets);
    res.render('./flights/show', { title: 'Flights',  flight, tickets})
    });
  });
}

function index(req, res) {
  Flight.find({}).sort({departs: -1}).exec(function(err, flights) {
    res.render('flights/index', { flights });
  });
}

function create(req, res) {
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
    }
    var flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      // console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }

function newFlight(req, res) {
    res.render('flights/new');
  };