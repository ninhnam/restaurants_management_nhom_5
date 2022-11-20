const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    address: {
        building: String,
        coord: mongoose.Types.Decimal128,
        street: String,
        zipcode: String
    },
    borough: String,
    cuisine: String,
    grades: [{
        date: Date,
        grade: String,
        score: Number
    }],
    name: String,
    restaurant_id: String
})


module.exports = mongoose.model('Restaurant', RestaurantSchema)