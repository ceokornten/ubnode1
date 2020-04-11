const express = require("express")
const app = express()

app.use(express.static('public'));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/elements.html", function(req,res){
    res.sendFile(__dirname + "/elements.html");

});

app.listen(3000, function(req,res){
    console.log(" THis server run on port 3000");
});