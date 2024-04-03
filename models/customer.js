const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    gmail:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
})

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;