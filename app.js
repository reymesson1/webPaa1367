var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('static'));
app.use(bodyParser.json());
var fs = require('fs');
var cors = require('cors')
app.use(cors())
app.options('*', cors())
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
var mongoose = require('mongoose');
var multer  = require('multer');
var uploadsFolder = __dirname + '/static/images/';  // defining real upload path
// var uploadsFolder = __dirname + '/static/executed/';  // defining real upload path
// var uploadsFolder = __dirname + '/uploads/';  // defining real upload path
var upload = multer({ dest: uploadsFolder }); // setting path for multer

var masterController = require('./controller/masterController');

var productController = require('./controller/productController');

var styleController = require('./controller/styleController');

var companyController = require('./controller/companyController');

app.get('/restaurants', masterController.getMaster);

app.get('/product', productController.getMaster);

app.post('/createproduct2', productController.setMaster);

app.post('/editproduct', productController.editProduct);

app.post('/deleteproduct', productController.deleteProduct);

app.post('/createproduct', upload.single('single-file'), function(request, response) {

  console.log(request.body)

  var description = request.body.description;
  var style = request.body.style;

  var fileName = request.file.originalname; // original file name
  var file = request.file.path; // real file path with temporary name

  // renaming real file to it's original name
  fs.rename(file, uploadsFolder + description +'-'+style+'.jpg', function (err) {
  // fs.rename(file, uploadsFolder + fileName, function (err) {
    if (err) {
      console.log(err);
      response.json({success:false, message: err});
      return;
    }

    response.json({success:true, message: 'File uploaded successfully', fileName: fileName});
  });

});

app.get('/style', styleController.getStyle);

app.post('/createstyle', styleController.setStyle);

app.get('/companies', companyController.getCompany);

app.post('/createcompany', companyController.setCompany);

mongoose.connect('mongodb://localhost:27017/amsel',(err)=>{
    if(!err){
        console.log('Connected to mongo Database');
    }
})

app.listen(8085, function(){
    console.log("Listening from 8085...");
});