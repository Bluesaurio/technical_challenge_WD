const mongoose = require("mongoose")
const Phone = require("../models/Phone.model")
const allPhones = require("./phones.json")

mongoose.connect("mongodb://127.0.0.1:27017/technical_challenge_WD")
.then(() => {
    console.log("Connected to DB")
    return Phone.insertMany(allPhones)
})
.then(() => {
    console.log("All phones added")
    return mongoose.disconnect()
})
.then(() => {
    console.log("DB closed")
})
.catch((err) => {
console.log(err)
})