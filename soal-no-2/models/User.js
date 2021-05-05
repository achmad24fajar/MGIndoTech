
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	nama: String,
	hobi: String,
	alamat: String,
	notelp: Number,
});

module.exports = mongoose.model('User', UserSchema);