const mongoose= require("mongoose");
const initdata=require("./sellerdata.js");
const Seller=require("../models/seller.js");
const initcustomerdata = require("./customerdata.js");
const Customer = require("../models/customer.js");
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


const initDB= async ()=>{
    await Seller.deleteMany({});
    await Seller.insertMany(initdata.data);
    console.log("data was initialized");
}

const initCutsomerDB = async()=>{
    await Customer.deleteMany({});
    await Customer.insertMany(initcustomerdata.customerData);
    console.log("customer data was initialized");
}

initDB();
initCutsomerDB();