const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: ObjectId,
    userId: String,
    name: String,
    level: Number,
    location: Number, //x coordinate
});
module.exports = mongoose.model("User", userSchema);