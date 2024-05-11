const express = require("express");
const app=  express();
const port = 8080;
const mongoose = require('mongoose');
const Seller= require("./models/seller.js");
const sellerApp=require("./sellerapp.js");
<<<<<<< HEAD
const customer = require("./routes/customer.js");
const dbUrl="mongodb://127.0.0.1:27017/hawker";
=======
const cors = require("cors");
const UserModel = require("./models/User.js");




app.use(express.json());
app.use(cors());

const dbUrl="mongodb://127.0.0.1:27017/hawker"
>>>>>>> cea065c46d92c8c5d2d518b75fd7593dd93f40f6
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


app.get("/", (req, res)=>{
    res.send(" This is home route");

});

app.use("/customer", customer);
app.use(sellerApp);

    
    // res.send(allSellers);





app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});