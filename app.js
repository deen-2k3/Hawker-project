const express = require("express");
const app=  express();
const port = 8080;
const mongoose = require('mongoose');
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



app.get("/", (req, res)=>{
    res.send(" This is home route");

})
app.get("/testseller",async(req,res)=>{
    let sampleSeller=new Seller({
        title:"Green Vegetable",
        name:"Onion",
        quantity:50,
        // image:"",
        description:"eat healthy vegetable",
        price:25,
        location:"Gorakhpur",
        country:"India"
       

    });
    await sampleSeller.save();
    console.log("sample was saved");
      res.send("successfull  testing");
})

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});