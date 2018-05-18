const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const zoneSchema = new Schema({
    id: ObjectId,
    name: String,
    min: Number,
    max: Number,
});
module.exports = mongoose.model("Zone", zoneSchema);