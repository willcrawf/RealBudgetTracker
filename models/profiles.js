var mongoose = require('mongoose');
const Schema = mongoose.Schema

const profileSchema = Schema({
    email: String,
    name: String,
    avatar: String,
    budget: Number,
    salary: Number
})