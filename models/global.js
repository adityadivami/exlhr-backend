import mongoose from 'mongoose';

const globalSchema = new mongoose.Schema({
    createdOn: {
        type: Date,
        default: new Date(),
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('globalModel', globalSchema);