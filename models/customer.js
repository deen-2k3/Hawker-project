const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // cart:{ 
    //     type: Schema.Types.ObjectId,
    //      ref: "Cart",
    //     },
    // orderHistory:{
    //     type: Schema.Types.objectId,
    //     ref:"orderHistory",
    // }
})

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;