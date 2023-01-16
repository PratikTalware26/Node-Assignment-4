const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())
// your code goes here
app.get("/",(req, res)=>{
    res.send("<h1>Hello World</h1>")
})

let num1, num2;

app.get("/add",(req,res)=>{
    num1= parseInt(req.query.num1);
    num2= parseInt(req.query.num2);
    // console.log(num1, num2)
    console.log(req.query)

    let sum;
    sum= num1 + num2;
    if(isNaN(num1) || isNaN(num2)){
        res.json({
            Status:"error"
        })
    }
    if(sum>1000000){
        res.status(400).send("Overflow")
    }else if(sum<-1000000){
        res.status(400).send("Underflow")
    }else{
        res.json({
            Status:"success",
            message: "the sum of given two numbers", 
            sum: num1+num2
        })
    }
})

app.get("/sub",(req,res)=>{
    num1= parseInt(req.query.num1);
    num2= parseInt(req.query.num2);
    let sub;
    sub= num1 - num2;
    if(isNaN(num1) || isNaN(num2)){
        res.json({
            Status:"error"
        })
    }
    if(sub>1000000){
        res.status(400).send("Overflow")
    }else if(sub<-1000000){
        res.status(400).send("Underflow")
    }else{
        res.json({
            Status:"success",
            message: "the sub of given two numbers", 
            sub: num1-num2
        })
    }
})

app.get("/multiply",(req,res)=>{
    num1= parseInt(req.query.num1);
    num2= parseInt(req.query.num2);
    let multiply;
    multiply= num1 * num2;
    if(isNaN(num1) || isNaN(num2)){
        res.json({
            Status:"error"
        })
    }
    if(multiply>1000000){
        res.status(400).send("Overflow")
    }else if(multiply<-1000000){
        res.status(400).send("Underflow")
    }else{
        res.json({
            Status:"success",
            message: "the multiplication of given two numbers", 
            multiply: multiply
        })
    }
})


app.get("/divide",(req,res)=>{
    num1= parseInt(req.query.num1);
    num2= parseInt(req.query.num2);
    let divide;
    divide= num1 / num2;
    if(isNaN(num1) || isNaN(num2)){
        res.json({
            Status:"error"
        })
    }else if(num2===0){
        res.send("Cannot divide by zero")
    }
    if(divide>1000000){
        res.status(400).send("Overflow")
    }else if(divide<-1000000){
        res.status(400).send("Underflow")
    }else{
        res.json({
            Status:"success",
            message: "the division of given two numbers", 
            divide: divide
        })
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;