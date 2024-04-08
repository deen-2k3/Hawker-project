const express = require("express");
const app=  express();
const mongoose =require("mongoose");
const Seller= require("./models/seller.js");


const dbUrl="mongodb://127.0.0.1:27017/hawker"
main()
.then(()=>{
    console.log("connect to DB");
})
.catch(err=>{
    console.log(err);
})
async function main() {
    await mongoose.connect(dbUrl);
}

// app.get("/testseller",async(req,res)=>{
//     let sampleSeller=new Seller({
//         title:"Green Vegetable",
//         name:"Onion",
//         quantity:50,
//         // image:"",
//         description:"eat healthy vegetable",
//         price:25,
//         location:"Gorakhpur",
//         country:"India"
       

//     });
//     await sampleSeller.save();
//     console.log("sample was saved");
//       res.send("successfull  testing");
// });
app.get("/sellers", (req, res) => {
    Seller.find({})
        .then((foundSellers) => {
            console.log(foundSellers);
            res.send(foundSellers);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Internal Server Error");
        });
    
    // res.send(allSellers);

});


module.exports=app;