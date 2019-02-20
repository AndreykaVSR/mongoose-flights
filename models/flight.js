var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 var Schema = mongoose.Schema;

 var flightSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA'
    },
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: function() {
            var date = new Date();
            return new Date(date.setFullYear(date.getFullYear() + 1));
          }
        },
    destination: {
        type: [destinationSchema]
        }
});

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
    arrival: {
        type: Date
        }
    },
});    

var ticketSchema = new Schema({
        seat: {
            type: String, 
            match: /[A-F][1-9]\d?/
        },
        price: {
            type: Number,
            min: 0
        },
        flight: {
            type: ObjectId,
            ref: 'Flight',
        }
});


 module.exports = mongoose.model('Flight', flightSchema);