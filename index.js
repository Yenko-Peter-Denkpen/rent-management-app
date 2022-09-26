const express=require("express")
const dotenv=require("dotenv")
const morgan=require("morgan")


const app=express();
dotenv.config();



app.get("/", (req, res) => {
res.send("<h1>Welcome to our Rent Management App</h>")
})


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}` )
})