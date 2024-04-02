const express = require("express");
const app=  express();
const port = 8080;
const mongoose = require('mongoose');

const dbUrl="mongodb://127.0.0.1:27017/hawker"

async function main() {
    await mongoose.connect(dbUrl);
}
main()
.then(()=>{
    console.log("connect to DB");
})
.catch(err=>{
    console.log(err);
})


app.get("/", (req, res)=>{
    res.send(" This is home route");

})

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});