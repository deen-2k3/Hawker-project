const express= require("express");
const mongoose = require("mongoose");
const Customer = require("../models/customer.js");
const Cart = require("../models/cart.js");
const OrderHistory = require("../models/orderHistory");
const dbUrl="mongodb://127.0.0.1:27017/hawker"
const router = express.Router();
// const Seller= require("../models/seller.js");
const Addvegetable = require("../models/Additems.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const axios = require('axios');
router.use(cors());
router.use(express.urlencoded({extended:true}));
router.use(express.json());
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
    const allItems = await Addvegetable.find({});
    res.send(allItems);
})
router.get("/item/:id", async(req, res)=>{
    let {id} = req.params;
    const data = await Addvegetable.findById(id);
    res.send(data);
})
router.post("/user/register", (req,res)=>{
    try{
        const {name, email, password} = req.body;

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function (err, hash){
                if(err){
                    return res.send(err.message);
                }
                else{
                    let user = await Customer.create({
                        email,
                        password:hash,
                        name,
                    });
                    let token = jwt.sign({email, id:user._id}, "myjwtsecret");
                    res.cookie("token", token);
                    res.send("user created successfully");
                }
            });
        });
    }
    catch(err){
        res.send(err.message);
    }


    // let sampleCustomer = new Customer({
    //     name: "John Doe",
    //     username: "johndoe123",
    //     email: "johndoe@example.com",
    //     address: "123 Main Street, Cityville, USA"
    //   });
    //   await sampleCustomer.save();
    //   console.log("sample customer was saved");
    //   res.send("sample customer was saved in database");

});
router.get("/cart", async(req, res)=>{
    const cart = await Cart.find({});
    res.send(cart);
});

router.get("/cart/:id", async(req, res)=>{
    let {id} = req.params;
    const data = await Cart.findById(id);
    console.log("fetch item is", data);
    res.send(data);
})
router.put("/cart/:id", async(req, res)=>{
    let {id} = req.params;
    const updatedItem = req.body;
    console.log("req.body is", updatedItem);
    await Cart.findByIdAndUpdate(id, updatedItem, {new:true});
    console.log(updatedItem);
    res.json(updatedItem);
});
router.delete("/cart/:id", async(req, res)=>{
    let {id} = req.params;
    const data = await Cart.findByIdAndDelete(id);
    console.log("Item deleted");
    res.send(data);
})
router.post("/cart/addToCart", async(req, res)=>{
    const item = req.body;
    const itemId=item._id;
    try{
        const existingItem = await Cart.findOne({_id:itemId});
        if(existingItem){
            req.flash("message", "Item is already in cart");
            return res.status(400).json({message: req.flash("message")});
        }
        const newItem = new Cart(item);
        await newItem.save();
        req.flash("message", "Item added to cart successfully");
        res.status(400).json({message: req.flash("message")});
        // res.send(item);
    }
    catch(err){
        console.log("error adding item to cart:", err);
        res.status(500).json({message:"Internal server error"});
    }
})
router.get("/orderHistory", async(req, res)=>{
    const orderHistory = await OrderHistory.find({});
    res.send(orderHistory);
})
router.delete("/orderHistory/:id", async(req, res)=>{
    let {id} = req.params;
    const data = await OrderHistory.findByIdAndDelete(id);
    res.send(data);
})
module.exports = router;

module.exports = router;