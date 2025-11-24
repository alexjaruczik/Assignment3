const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Review = require('../models/reviews');
console.log("Hello");

//This reads from the database as a page, Read Operation
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
        res.render('Reviews/list', {
            error: 'Server Error.'
        })
    }
});

//This reads the page for creating a new review, Create Operation
router.get('/reviews/add', async(req, res, next)=>{
    try 
    {
        const ReviewList = await Review.find();
        res.render('Reviews/add', { 
            title: 'HollywoodStar',
            ReviewList:ReviewList
        });
    }
    catch(err)
    {
        console.error(err);
        res.render('Reviews/list', {
            error: 'Server Error.'
        })
    }
});
//This creates a new review, Create Operation
router.post('/reviews/add', async(req, res, next)=>{
    try 
    {
        let newReview = Review({
            "reviewer": req.body.reviewer,
            "rating": req.body.rating,
            "film": req.body.film,
            "comment": req.body.comment
        })
        Review.create(newReview).then(()=>{
            console.log("Successfully created!")
            res.redirect('/reviews')
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Reviews/list', {
            error: 'Server Error.'
        })
    }
});

module.exports = router;