const express=require("express")
const dotenv=require("dotenv")
const connectDB = require("./config/connectDB")
const userRoute =require("./routes/userRoute")
const rentRoute =require("./routes/rentRoute")
const morgan=require("morgan")


const app=express();
dotenv.config();
connectDB();

//middleware

app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/houses", rentRoute )
app.use(morgan('dev'))



app.get("/", (req, res) => {
res.send("<h1>Welcome to our Rent Management App</h>")
})


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}` )
})