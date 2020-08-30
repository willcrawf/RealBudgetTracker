const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subSchema = new Schema({
    name: String,
    costPerCycle: Number,
    cycleLength: Number,
    date: Date,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
})
module.exports = mongoose.model('sub', subSchema)
