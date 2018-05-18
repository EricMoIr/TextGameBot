const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const itemSchema = new Schema({
    id: ObjectId,
    name: String
});
module.exports = mongoose.model("Item", itemSchema);