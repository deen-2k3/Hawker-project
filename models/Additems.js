const mongoose = require('mongoose');

const addvegSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
},
name:{
   type:String,
   required:true
    
},
quantity:{
  type:Number,
  required:true
},

image:{
     type:String,
    //  required:true,
    default:"https://unsplash.com/photos/five-tomatoes-in-round-brown-wooden-platet-EPwuZxdketc",
     set:(v)=> v==="" ? "https://unsplash.com/photos/five-tomatoes-in-round-brown-wooden-platet-EPwuZxdketc":v
},
description:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
location:String,
country:String
});
// Create the Vegetable model
const Addvegetable = mongoose.model("Addvegetable", addvegSchema);

module.exports = Addvegetable;




