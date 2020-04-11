const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const fs = require("fs")

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extends: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    
    var name = req.body.name
    var productColor = req.body.radio
    var tel = req.body.tel
    var lineid = req.body.LINE_ID
    var address = req.body.address
    var zip = req.body.zipCode

    res.json({
        name , productColor , tel , lineid , address , zip
    });

    console.log(name , productColor , tel , lineid , address , zip)

})

app.get("/elements.html", function(req,res){
    res.sendFile(__dirname + "/elements.html");

});


app.listen(3000, function(req,res){
    console.log(" This server run on port 3000");
});