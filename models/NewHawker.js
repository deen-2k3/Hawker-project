const mongoose = require('mongoose');

const newHawkerSchema=new mongoose.Schema(
    {
        title :{
            type:String,
            require:true
        },
        ownerName:{
            type:String,
            require:true
        },
        mbNb:{
            type:Number,
            require:true
        },
        address:{
            type:String,
            require:true
        },
        image:{
            type:String,
            require:true
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users",
        }
    }
);

const hawkerSchema=mongoose.model("hawkerSchema",newHawkerSchema);

 module.exports=hawkerSchema;