const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Review = require('../models/reviews');
console.log("Hello");

router.get('/reviews', async(req, res, next)=>{
  console.log(":3");
  try 
    {
        const ReviewList = await Review.find();
        res.render('Reviews/list', { 
            title: 'HollywoodStar',
            ReviewList:ReviewList
        });
    }
    catch(err)
    {
        console.error(err);
        res.render
    }
});

module.exports = router;