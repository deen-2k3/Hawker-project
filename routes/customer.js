const express= require("express");
const mongoose = require("mongoose");
const Customer = require("../models/customer.js");
const dbUrl="mongodb://127.0.0.1:27017/hawker"
const router = express.Router();

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

router.get("/addCustomer", async(req,res)=>{
    let sampleCustomer = new Customer({
        name: "John Doe",
        username: "johndoe123",
        email: "johndoe@example.com",
        address: "123 Main Street, Cityville, USA"
      });
      await sampleCustomer.save();
      console.log("sample customer was saved");
      res.send("sample customer was saved in database");
});

module.exports = router;