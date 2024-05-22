const mongoose = require('mongoose')
const Cart = require("./cart.js");
const UserSchema =new mongoose.Schema({
    name:String,
    email:String,
    password:String
    // cart: { type: Schema.Types.ObjectId, ref: 'Cart' }
})

const  UserModel= mongoose.model("users",UserSchema)
module.exports =UserModel