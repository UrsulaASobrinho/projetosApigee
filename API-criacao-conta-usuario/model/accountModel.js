import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";
const Schema = mongoose.Schema;
const AutoIncremente = mongooseSequence(mongoose);

const accountModel = new Schema({
    _id: Number,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index:{
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    dateBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    }  
},{
     _id: false
});

accountModel.plugin(AutoIncremente, {
    collection_name: "account_counter"
});

export default mongoose.model("accounts", accountModel);
