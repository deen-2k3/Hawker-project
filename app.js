const express = require("express");
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require('bcrypt');
const Customer = require("./models/customer.js");
const jwt =require('jsonwebtoken')
const cookieParser= require('cookie-parser')

const saltRounds = 10;

// Import models
const UserModel = require("./models/User");
const Addvegetable = require("./models/Additems");

const customer = require("./routes/customer");
// Import routes
const sellerRouter = require("./routes/seller");
const vegetableRouter = require('./routes/sellercard');

// Middleware
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    methods: ["GET","POST"],
    credentials: true
}));
app.use(cookieParser());

// MongoDB connection
const dbUrl = "mongodb://127.0.0.1:27017/hawker";
main().then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

// Routes
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        const token=jwt.sign({email:user.email},"jwt-secret-key",{expiresIn:"1d"})
                        res.cookie("token",token);
                        res.json("Success");
                    } else {
                        res.json("The password is incorrect");
                    }
                });
            } else {
                res.json("No record existed");
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        UserModel.create({ email, password: hash })
            .then(user => res.json(user))
            .catch(err => res.status(400).json({ error: err.message }));
    });
});

app.post('/additem', (req, res) => {
    Addvegetable.create(req.body)
        .then(newItem => {
            console.log(newItem);
            res.json(newItem);
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ error: err.message });
        });
});

app.get("/", (req, res) => {
    res.send("This is the home route");
});

app.use('/customer', customer);
// Use the routers
app.use('/newhawker', sellerRouter);
app.use('/scard/vegetables', vegetableRouter);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
