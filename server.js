//Import Dependencies
const express = require("express");
const cors = require("cors");

//Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

//Create app object
const app = express();

//Setup middleware
app.use(cors());

//Home route to test app
app.get("/",(req,res)=>{
    res.send("Hello World");
});

//Retrieve Projects
app.get("/projects",(req,res)=>{
    res.json(projects);
});

//Retrieve About
app.get("/about",(req,res)=>{
    res.json(about);
});

//PORT variable
const PORT=process.env.PORT || 4000;

//Server Listner
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}...`))
