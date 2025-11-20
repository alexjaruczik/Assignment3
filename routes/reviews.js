let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Review = require('../models/reviews');

router.get('/reviews',async(req,res,next)=>{
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