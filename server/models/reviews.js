let mongoose = require("mongoose");

// Model for database.
let reviewModel = mongoose.Schema(
    {
    reviewer: String,
    rating: Number,
    comment: String,
    film: String
    },
    {
        collection: "filmreviews"
    }
);
module.exports=mongoose.model('Review', reviewModel)