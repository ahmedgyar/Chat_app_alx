const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/user_route');
const chatRoute = require('./routes/Chat_route');



const app = express();
require('dotenv').config();


app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);


app.get("/", (req, res) => {
    res.send("weclome our chat app user ")
})

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URL;

app.listen(port, (req, res) => {
    console.log(`server ..running on port:${port}`);
})

mongoose.connect(`${uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("database connected successfully")).
catch((err) => console.log(`failed to connect to database error: ${err}`));