//***ImportingPackages*****//
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDB = require('./config/database');
const port = process.env.PORT || 3000;

//***Database***//
connectDB();

//****Middlewares****//
app.use(express.json());
app.use(cors());


//***Importing Routes****//
const userRoutes = require("./routes/userRoutes");
app.use("/api/users",userRoutes)

//**Listen****//
app.listen(port, () => {
    console.log(`Listening on the port ${port}`)
})