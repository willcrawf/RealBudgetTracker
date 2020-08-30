const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: String,
    cost: Number,
    location: String,
    date: Date,
    category: String,
    upcoming: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
})
module.exports = mongoose.model('Item', ItemSchema)
