const express=require("express")
const app=express()
const rrouter=require("./src/router/rrouter")
app.use("/",rrouter)
app.set("view engine","ejs")
app.set("views",__dirname+"/src/view")

// app.get("/",(req,res)=>{
//     res.send("jkagdfj")
// })
app.listen(3344,()=>{
    console.log("servver listening...http://localhost:3344");
})