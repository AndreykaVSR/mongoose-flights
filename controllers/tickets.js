var Ticket = require('../models/ticket');

module.exports = {
    create
};

function create(req, res) {
    // console.log('hi Tickets' + req.params.id); !!! this is working
    var ticket = new Ticket({
        seat: req.body.seat,
        price: req.body.price,
        flight: req.params.id
        });
    // flight.ticket.push(req.body);
        ticket.save(function(err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect(`/flights/${req.params.id}`);
            }
        });
    }

//   Ticket.findById(req.params.id, function(err, flight) {
//     // console.log('flight ' + flight);
//     flight.destination.push(req.body);
//     flight.save(function(err) {
//     //   res.render(req.params.id './flights/id', { title: 'Flights', flight: flightFound } Destination: 'airport');
//     res.redirect(`/flights/${flight._id}`);
//     });
//   });