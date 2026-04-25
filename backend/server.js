const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");

const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Apply CORS with options

app.use(express.json()); // tell the server to accept the json data from frontend

//Signup and login
app.use("/", emailRoutes);



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});