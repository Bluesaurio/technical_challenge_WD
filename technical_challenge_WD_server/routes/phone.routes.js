
const router = require("express").Router();
const Phone = require("../models/Phone.model")

// GET "/api/phones" to show all phones

router.get("/", async (req,res,next) => {
try {
   const response = await Phone.find().select({id: 1, name: 1, price: 1, imageFileName: 1})
   res.json(response)
} catch (error) {
    next(error)
}
})

// GET "api/phones/:id" to show a phone details

router.get("/:id", async (req,res,next) => {
    try {
        const response = await Phone.find({id: req.params.id})
        res.json(response)
    } catch (error) {
        next(error)
    }
})







module.exports = router