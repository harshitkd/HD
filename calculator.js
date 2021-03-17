const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});
app.post("/", function(req, res){
  var weight = Number(req.body.n1);
  var height = Number(req.body.n2);
  var result = weight + height;
  res.send("Your BMI is : " + result);
});
app.listen(3000, function(){
  console.log("Server is running on 3000");
});
