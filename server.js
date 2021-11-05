const express = require("express");
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config();

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'})) //Change to client's http address
app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyPetRoutes = require("./server/routes/pet.routes");
AllMyPetRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
