const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema({
    name: String,
    seasons: Number,
    watched: Boolean
}, {
    timestamps: true
})


module.exports = mongoose.model("Show", showSchema);
