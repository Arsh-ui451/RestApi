const express = require("express");
require("../src/db/conn");
const Winners = require("../src/models/main");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/",async(req,res) =>{
    res.send("Hello  from Arsh")
})

//handle post request: Create
app.post("/main",async(req,res) =>{
    try{

        const addwinnner = new Winners(req.body);
        console.log(req.body);
        const insertwinner = await addwinnner.save();  
        res.status(201).send(insertwinner);
    }catch(e){
        res.status(400).send(e);
    }
})

//handle get request: Read
app.get("/main",async(req,res) =>{
    try{
        const getwinnner = await Winners.find({});
        res.status(201).send(getwinnner);
    }catch(e){
        res.status(400).send(e);
    }
})

//handle patch request: update
app.get("/main/:id",async(req,res) =>{
    try{
        const _id = req.params.id;
        const getwinner = await Winners.findByIdAndUpdate(_id,req.body, {
            new:true
        })
        res.send(getwinnner);
    }catch(e){
        res.status(500).send(e);
    }
})

//handle delete request: delete 
app.delete("/main/:id",async(req,res) =>{
    try{
        const getWinner = await Winners.findByIdAndDelete(req.params.id);
        res.send(getWinner);
    }catch(e){
        res.status(500).send(e);
    }
})


app.listen(port,() => {
    console.log(`connection is live at Port no. ${port}`);
})