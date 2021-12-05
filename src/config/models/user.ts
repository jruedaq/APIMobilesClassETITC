import {Schema, model} from 'mongoose';

const usersSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

export default model("users", usersSchema)
