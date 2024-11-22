const express = require("express");
const app = express();
const users = require("./routes/users.js");


app.get("/",(req,res) =>{
    res.send("Hi, I am root");
});

app.use("/users",users);


//posts
//Index
app.get("/posts",(req,res) => {
    res.send("get for post");
});

//show 
app.get("/posts/:id",(req,res) => {
    res.send("Get for post id");
});

//post 
app.post("/posts",(req,res) => {
    res.send("post for post");
});

//delete 
app.delete("/posts/:id",(req,res) => {
    res.send("delete for post id");
});

app.use("/users",users);
app.listen(4000,() => {
    console.log("server is listening to 4000")
})