var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();
var bodyParser = require('body-parser');
var port = process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
})
app.post('/file-upload', upload.single('fileupload'), function(req, res){
  let jsonBody = {
    File_Name: req.file.originalname,
    size: req.file.size + " bytes"
  } 
  !req.file ? res.send("No File provided") : res.send(jsonBody);
})

app.listen(port, function(){
  console.log("listening on port: " + port);
});