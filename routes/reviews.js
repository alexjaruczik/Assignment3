const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Review = require('../models/reviews');
console.log("Hello");

router.get('/reviews',async(req,res,next)=>{
    console.log("connected!");
    try 
    {
        const ReviewList = await Review.find();
        console.log(ReviewList);
    }
    catch(err)
    {
        console.error(err);
        res.render
    }
}
)
module.exports = router;