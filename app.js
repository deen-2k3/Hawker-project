const express = require("express");
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const cors = require("cors");
const session = require("express-session");
const flash = require("connect-flash");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const saltRounds = 10;

// Import models
const UserModel = require("./models/User");
const Addvegetable = require("./models/Additems");

// Import routes
const customer = require("./routes/customer");
const sellerRouter = require("./routes/seller");
const vegetableRouter = require('./routes/sellercard');

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: "mysecret", resave: false, saveUninitialized: true }));
app.use(flash());

// CORS configuration
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    methods: ["GET", "POST"],
    credentials: true, // Enable credentials
}));

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

// JWT Secret Key
const JWT_SECRET = "jwt-secret-key";

// Routes
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1d" });
                        res.cookie("token", token, { httpOnly: true, sameSite: 'Lax' });
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

app.get("/", (req, res) => {
    res.send("This is the home route");
});

// Authentication Middleware
const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send('Unauthorized: No token passed');
        }
        const verifiedToken = jwt.verify(token, JWT_SECRET);
        const rootUser = await UserModel.findOne({ _id: verifiedToken.id });
        if (!rootUser) {
            throw new Error('User not found');
        }
        req.token = verifiedToken;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();
    } catch (error) {
        res.status(401).send('Unauthorized: Invalid token');
        console.error(error);
    }
};
app.get('/checkauth', (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ authenticated: false });
        }
        const verifiedToken = jwt.verify(token, JWT_SECRET);
        UserModel.findById(verifiedToken.id, (err, user) => {
            if (err || !user) {
                return res.status(401).json({ authenticated: false });
            }
            return res.status(200).json({ authenticated: true, user: user });
        });
    } catch (error) {
        return res.status(401).json({ authenticated: false });
    }
});


// Use the routers
app.use('/customer', customer);
app.use('/newhawker', auth, sellerRouter);
app.use('/scard/vegetables', vegetableRouter);
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

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
