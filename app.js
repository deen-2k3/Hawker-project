const express = require("express");
const app=  express();
const port = 8080;
const mongoose = require('mongoose');
const Seller= require("./models/seller.js");
const sellerApp=require("./sellerapp.js");

<<<<<<< HEAD
=======
const customerRouter = require("./routes/customer.js");
>>>>>>> origin/main

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

});


app.use(sellerApp);
<<<<<<< HEAD

    
    // res.send(allSellers);



=======
app.use("/customer", customerRouter);
>>>>>>> origin/main


app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});