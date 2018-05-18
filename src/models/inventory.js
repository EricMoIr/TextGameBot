const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const inventorySchema = new Schema({
    id: ObjectId,
    maxsize: Number,
    player: { type: ObjectId, ref: 'User' },
    contents: [{ type: ObjectId, ref: 'Item' }],
});
module.exports = mongoose.model("Inventory", inventorySchema);