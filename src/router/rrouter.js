const express=require("express")
const rrouter=express.Router();
rrouter.get("/",(req,res)=>{
    res.render("registration")
})
rrouter.get("/login",(req,res)=>{
    res.render("home" ,{title:"home page"})
})
rrouter.get("/signup",(req,res)=>{
    res.render("login")
})

// rrouter.get("/quote",(req,res)=>{
//     res.redirect("home")
// })
module.exports=rrouter;