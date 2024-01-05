////step--1///
npm init

///step2///-

create new file --- index.js

and open pakage.json and update 
    "type":"module"


///step--3///

install i express cors mongoose


                                                                                   ///step--4//
                                                                          ***now write coad in index.js***



import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/userLogin",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("DB connected")
})

//Routes
app.get("/",(req,res)=>{
    res.send("My API")
})

app.listen(9002,()=>{
    console.log("BE started at port 9002")
})
                



 
                                                                  ***this coad will connect your DB to your port***