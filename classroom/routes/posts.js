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
})