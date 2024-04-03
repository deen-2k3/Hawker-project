const mongoose= require("mongoose");
const initdata=require("./sellerdata.js");
const Seller=require("../models/seller.js");

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

initDB();