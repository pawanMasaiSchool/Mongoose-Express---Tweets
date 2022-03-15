const express = require("express");
const { getAllTweets, getTweet,createTweet,deleteTweet } = require("../Controllers/tweet.controller");
const router = express.Router()

router.get("/",getAllTweets);
router.get("/:id",getTweet);
router.post("/",createTweet);
router.delete("/:id",deleteTweet);


module.exports = router