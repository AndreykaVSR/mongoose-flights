var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

/* GET show page. */
// router.get('/:id', function(req, res, next) {
//     console.log(req.params.id, 'MIRZA')
//   res.render('./flights/show', { title: 'Flights' });
// });

router.get('/:id', flightsCtrl.show);

module.exports = router;
