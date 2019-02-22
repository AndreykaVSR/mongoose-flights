var Flight = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    // console.log('hi' + req.params.id);
  Flight.findById(req.params.id, function(err, flight) {
    // console.log('flight ' + flight);
    flight.destination.push(req.body);
    flight.save(function(err) {
    res.redirect(`/flights/${flight._id}`);
    });
  });
}

// function create(req, res) {
//     for (let key in req.body){
//         if (req.body[key] === '') delete req.body[key];
//     }
//     var flight = new Flight(req.body);
//     flight.save(function(err) {
//       // one way to handle errors
//       if (err) return res.render('flights/new');
//     //   console.log(flight);
//       // for now, redirect right back to new.ejs
//       res.redirect('/flights');
//     });
//   }