import {Schema, model} from 'mongoose';

const placeSchema = new Schema({
    name: {type: String, required: true},
    desc: {type: String, required: true},
    long: {type: String, required: true},
    lat: {type: String, required: true},
})

export default model("place", placeSchema)
