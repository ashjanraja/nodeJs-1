const express = require("express");

const app = express();
const cars  =[
    {
        name : "BMW",
        color : "black",
    },
    {
        name : "Kia",
        color: "gold",
    },
    {
        name:"towota",
        color : "green"
    }
];

app.get("/",  (req, res) => res.send("Hello World"))
app.get("/cars" , (req , res)=>{
    res.json(cars);
})

app.get("/search" , (req , res)=>{
    const {name, color}=req.query;

    let newArr = cars

    if(name){
        newArr = cars.filter(item => item.name.includes(name))
    }
    if(color){
        newArr = cars.filter(item => item.color.includes(color))
    }

    
    if(newArr.length === 0){
        res.status(400).send('400 hello')
    }
    else{
        res.status(200).json(newArr)
    }
})

app.listen(3000,console.log("Server is running http://localhost:3000"));