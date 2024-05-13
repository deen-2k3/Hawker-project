const express = require("express");
const app=  express();
const port = 8080;
const mongoose = require('mongoose');
const Seller= require("./models/seller.js");
const sellerApp=require("./sellerapp.js");
const cors = require("cors");
const UserModel = require("./models/User.js");
const Addvegetable=require("./models/Additems.js")
const seller=require("./routes/seller.js")

app.use(express.json());
app.use(cors());

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


app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user=>{
      if(user){
        if(user.password===password){
          res.json("Success")
        }else{
          res.json("the password is incorrect")
        }
      }
      else{
        res.json("No record existed")
      }
    })
  })

app.post('/signup', (req, res) => {
  UserModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json({ error: err.message }));
});
// /////////////////////////////////////////////////
app.post('/additem', (req, res) => {
  Addvegetable.create(req.body)
    .then(newItem => {
      console.log(newItem); // Log the new item to the console
      res.json(newItem); // Send the new item as a response
    })
    .catch(err => {
      console.error(err); // Log the error to the console
      res.status(400).json({ error: err.message });
    });
});

////////////////////////////////////////////////////////


app.get("/", (req, res)=>{
    res.send(" This is home route");

});

app.use('/newhawker', seller);

app.use(sellerApp);

    
    // res.send(allSellers);





app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});