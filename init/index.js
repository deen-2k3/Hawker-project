const mongoose = require("mongoose");
const initdata = require("./sellerdata.js");
const Seller = require("../models/seller.js");
const initcustomerdata = require("./customerdata.js");
const Customer = require("../models/customer.js");

const Cart = require("../models/cart.js");
const OrderHistory = require("../models/orderHistory");
const dbUrl="mongodb://127.0.0.1:27017/hawker"

main()
    .then(() => {
        console.log("connect to DB");
    })
    .catch(err => {
        console.log(err);
    })
async function main() {
    await mongoose.connect(dbUrl);
}

// <<<<<<< customer-app
// const initDB= async ()=>{
// =======

const initDB = async () => {
// >>>>>>> main
    await Seller.deleteMany({});
    await Seller.insertMany(initdata.data);
    console.log("data was initialized");
}

// <<<<<<< HEAD
initDB();
// =======
const initCutsomerDB = async()=>{
    await Customer.deleteMany({});
    await Customer.insertMany(initcustomerdata.customerData);
    console.log("customer data was initialized");
}
const initCartDB = async()=>{
    await Cart.deleteMany({});
    await Cart.insertMany(initdata.data);
    console.log("orderHistory data was initailized");
}
initDB();
initCartDB();
initCutsomerDB();
const initOrderHistorytDB = async()=>{
    await OrderHistory.deleteMany({});
    await OrderHistory.insertMany(initdata.data);
    console.log("Cart data was initailized");
}
initOrderHistorytDB()
// >>>>>>> origin/main
