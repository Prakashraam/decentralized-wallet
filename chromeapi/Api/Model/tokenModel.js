
const mongoose = require("mongoose");
const tokenSchema = new mongoose.Schema({
name: String,
address: String,
symbol: String,
})
const token = mongoose.model("token", tokenSchema);
module.exports = token;