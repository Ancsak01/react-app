import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    id: Number,
    file_name: String,
    login_name: String,
    timestamp: Date,
    event: Number
});

const Event = mongoose.model('Event', eventSchema);

export default Event;