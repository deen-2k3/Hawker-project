const express= require("express");
const mongoose = require("mongoose");
const Customer = require("../models/customer.js");
const dbUrl="mongodb://127.0.0.1:27017/hawker"
const router = express.Router();
const Seller= require("../models/seller.js");
const cors = require("cors");
main()
.then(()=>{
    console.log("connect to DB");
})
.catch(err=>{
    console.log(err);
})
router.use(cors());
async function main() {
    await mongoose.connect(dbUrl);
}
router.get("/allitems", async(req, res)=>{
    const allItems = await Seller.find({});
    res.send(allItems);
})
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

router.get("/allitems")
module.exports = router;