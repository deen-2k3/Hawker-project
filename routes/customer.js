const express= require("express");
const mongoose = require("mongoose");
const Customer = require("../models/customer.js");
const Cart = require("../models/cart.js");
const dbUrl="mongodb://127.0.0.1:27017/hawker"
const router = express.Router();
const Seller= require("../models/seller.js");
const cors = require("cors");
const axios = require('axios');
router.use(cors());
router.use(express.urlencoded({extended:true}));
// router.use(bodyParser.json());
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
router.get("/allitems", async(req, res)=>{
    const allItems = await Seller.find({});
    res.send(allItems);
})
router.get("/item/:id", async(req, res)=>{
    let {id} = req.params;
    const data = await Seller.findById(id);
    res.send(data);
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
router.get("/cart", async(req, res)=>{
    const cart = await Cart.find({});
    res.send(cart);
});
router.put("/cart/:id", async(req, res)=>{
    let {id} = req.params;
    const updatedItem = req.body;
    await Cart.findByIdAndUpdate(id, updatedItem, {new:true});
    res.json(updatedItem);
})

module.exports = router;