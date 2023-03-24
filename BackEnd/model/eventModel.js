const mongoose = require("mongoose")

const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const EventSchema = new Schema({
    title: {type: String, required: true,},
    description: {type: String, required: true},
    location: {type: String, required: true},
    startTime: {type: String, required: true},
    endTime: {type: String, required: true}
    
});

const EventModel = mongoose.model('Events', EventSchema);

module.exports=EventModel;