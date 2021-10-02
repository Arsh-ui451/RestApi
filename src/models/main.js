const express = require("express");
const mongoose = require("mongoose");
const mainSchema = new mongoose.Schema({
    Athlete:{
        type:String,
        required:true,
        trim:true
    },
    Event:{
        type:String,
        required:true,
        trim:true
    },
    Medal:{
        type:String,
        required:true,
        trim:true
    }
})

const Winners = new mongoose.model("winner",mainSchema) // creating new collections
module.exports = Winners;