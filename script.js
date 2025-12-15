const express=require('express')
const app=express()
const cors=require("cors")
app.use(express.json())
app.use(cors())
const todos=[{
    id:1,
    title:"go to gym",
    description : "early in the morning"
},{
    id:2,
    title:"go to take bath",
    description:"everyday"
},{
    id :3,
    title:"revise your deen",
    description:"most of the time"
},{
    id:4,
    title:"hard work on academic",
    description:"not only for the exam"
},{
    id:5,
    title:"make a healthy people bounding",
    description:"one of the important"
}]
app.get("/todo",(req,res)=>{
    const todo=todos.find(t=> t.id==req.query.id)
    console.log(req.query.id)
    res.json({
        todo
    })
    
})
app.get("/todos",(req,res)=>{
    const randomtodo=[];
        for(let i=0;i<5;i++){
    if(Math.random()>0.5){
        randomtodo.push(todos[i]);
    }
        
    }
    res.json({
      todos:  randomtodo
    })
})
app.get('/sum',function(req, res){
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    const final=a+b
    res.send(final.toString())
})
app.get('/simpleinterest',(req, res)=>{
    const principle=parseInt(req.query.principle)
    const interest=parseInt(req.query.interest)
    const time=parseInt(req.query.time)
    const total=principle*interest*time
    const calc=(principle*interest*time)/100
    res.send("total =" +total + "interest=" + calc.toString())
})
app.listen(3000)
