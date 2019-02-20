var express = require('express');
var router = express.Router();
var destinationCtrl = require('../controllers/destinations');

/* GET show page. */
// router.get('/:id', function(req, res, next) {
//     console.log(req.params.id, 'MIRZA')
//   res.render('./flights/show', { title: 'Flights' });
// });

// router.get('/:id', flightsCtrl.show);

router.post('/flights/:id/destinations', destinationCtrl.create);

module.exports = router;
