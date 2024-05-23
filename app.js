const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require('bcrypt');
require('dotenv').config(); // Load environment variables from .env file

// Import models
const UserModel = require("./models/User");
const Addvegetable = require("./models/Additems");

// Import routes
const sellerRouter = require("./routes/seller");
const vegetableRouter = require('./routes/sellercard');

// Initialize Express app
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const dbUrl = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/hawker";
main().then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.error("DB connection error:", err);
});

async function main() {
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

// Routes
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password });

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            console.log('User not found');
            return res.status(400).json({ message: "No record existed" });
        }

        console.log('User found:', user);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('Password is valid:', isPasswordValid);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "The password is incorrect" });
        }

        res.json({ message: "Success" });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/signup', async (req, res) => {
    try {
        const { email, password, ...rest } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ email, password: hashedPassword, ...rest });
        await newUser.save();
        res.json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        console.error('Error during signup:', err);
        res.status(400).json({ error: err.message });
    }
});

app.post('/additem', async (req, res) => {
    try {
        const newItem = await Addvegetable.create(req.body);
        console.log(newItem);
        res.json(newItem);
    } catch (err) {
        console.error('Error during additem:', err);
        res.status(400).json({ error: err.message });
    }
});

app.get("/", (req, res) => {
    res.send("This is the home route");
});

app.use('/newhawker', sellerRouter);
app.use('/scard/vegetables', vegetableRouter);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
