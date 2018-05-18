const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const zombieSchema = new Schema({
    id: ObjectId,
    name: String,
    location: { type: ObjectId, ref: 'Location' },
});
module.exports = mongoose.model("Zombie", zombieSchema);