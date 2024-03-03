const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cloudComputerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const CloudComputer = mongoose.model('CloudComputer', cloudComputerSchema);

module.exports = CloudComputer;
