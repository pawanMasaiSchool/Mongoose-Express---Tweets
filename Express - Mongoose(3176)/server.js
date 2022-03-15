const express = require('express');
const cors = require('cors');
const connect = require('./Utils/db');
const app = express();
const userRouter = require('./Routes/user.route');
const tweetRouter = require("./Routes/tweet.route")
const PORT = 2000;

app.use(cors())
app.use(express.json())
app.use("/users", userRouter)
app.use("/tweets",tweetRouter)

const start = async () => {
    await connect();
    app.listen(PORT,()=>{
        console.log(`Listening at ${PORT}`);
    })
}

module.exports = start