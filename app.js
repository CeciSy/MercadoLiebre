const express = require("express")
const app = express()
const path = require("path")
const PORT = 3001
const public = path.join(__dirname,"/public")

const port = process.env.PORT
app.listen(port,()=>console.log("servidor corriendo en el puerto ${port}"))

app.use(express.static(public))

app.get("/",(req,res)=>(res.sendFile(path.join(__dirname,"./views/home.html"))))
app.get("/login",(req,res)=>(res.sendFile(path.join(__dirname,"./views/login.html"))))
app.get("/register",(req,res)=>(res.sendFile(path.join(__dirname,"./views/register.html"))))