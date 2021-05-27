var express = require('express');
var bodyParser = require('body-parser');
var app = express();
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
app.use(express.static('static'));

app.use(bodyParser.json());

var fs = require('fs');

var multer  = require('multer');
var uploadsFolder = __dirname + '/uploads/';  // defining real upload path
var upload = multer({ dest: uploadsFolder }); // setting path for multer


var masterController = require('./controller/masterController');

var productController = require('./controller/productController');

var orderController = require('./controller/orderController');

app.get('/master', masterController.getMaster);

app.get('/product', productController.getMaster);

// app.post('/createproduct', upload.single('single-file'), productController.setMaster);

app.post('/createproduct', upload.single('single-file'), function(request, response) {

  var fileName = request.file.originalname; // original file name
  var file = request.file.path; // real file path with temporary name

  // renaming real file to it's original name
  fs.rename(file, uploadsFolder + fileName, function (err) {
    if (err) {
      console.log(err);
      response.json({success:false, message: err});
      return;
    }

    response.json({success:true, message: 'File uploaded successfully', fileName: fileName});
  });

});

app.post('/pagination', productController.setPagination);

app.get('/order', orderController.getMaster);

app.post('/master', masterController.setMaster);

app.listen(8085, function(){
    console.log("Listening from 8085...");
});