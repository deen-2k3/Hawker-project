const mongoose = require("mongoose");
const initdata = require("./sellerdata.js");
const Seller = require("../models/seller.js");
const initcustomerdata = require("./customerdata.js");
const Customer = require("../models/customer.js");

const Cart = require("../models/cart.js");
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


const initDB = async () => {
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
    console.log("Cart data was initailized");
}
initDB();
initCartDB();
initCutsomerDB();
// >>>>>>> origin/main
