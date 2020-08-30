const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newItemSchema = new Schema({
    name: String,
    cost: Number,
    location: String,
    datet: Date,
    category: String,
    upcoming: Boolean,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
})
module.exports = mongoose.model('newItem', newItemSchema)
