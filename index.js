const express = require("express");

const app = express();
const PORT = 80;

//GET Route
app.get("/sayHello", (req, res)=>{
    return res.json("Hello User");
})



app.listen(PORT, ()=> console.log(`Server started at PORT 80`));