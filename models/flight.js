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
    },
    arrival: {
        type: Date  
    }
});    


 module.exports = mongoose.model('Flight', flightSchema);
 