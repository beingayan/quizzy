import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const signupModel = new Schema({
    email : { type : String, default: ''},
    firstName: { type : String, default: ''}, // create question with [] default value
    password : { type : String, default: ''},
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('UserDetails', signupModel);