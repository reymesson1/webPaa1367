// var sql = require('mssql');
var fs = require('fs');
var multer  = require('multer');
var uploadsFolder = __dirname + '/uploads/';  // defining real upload path
var upload = multer({ dest: uploadsFolder }); // setting path for multer

var Product = require('../models/product.js');

exports.getMaster = async(req,res)=>{

    // console.log(req.body);
    // var dbConfig = {
    //   host:'localhost',
    //   server:'DESKTOP-4CBHF69',
    //   database:'WideWorldImporters',
    //   user:'sa',
    //   password:'1234',
    //   port:1433,
    //   options: {
    //     encrypt: false,
    //     trustedConnection: true,
    //   },
  
    // };

    // sql.connect(dbConfig)
    // .then((conn) => 
    //     conn.query("SELECT TOP 10 * FROM Sales.Orders")
    //       // .then((v) => console.log(v.recordset))
    //       .then( (v) => {

    //         return res.send(v.recordset);

    //       })
    //       .then(() => conn.close())
    //       // .then((v) => res.send(v)  )
    // )

      let products = await Product.find({})
  
      res.send(products);
  
  

}

exports.setMaster = async(req,res)=>{

  let newProduct = req.body;
  
  let product = new Product(newProduct);
  
  console.log(product);

  product.save(function(err){
    if(!err){
      console.log('Product saved');
    }else{
        console.log(err)
    }
  })
    
  res.send(req.body);
    

}

exports.editPictureProduct = async(req,res)=>{

  var obj = req.body;

  var product = await Product.findOne({"id":obj.productId},function(err,master){
    master.image = obj.name
    master.save(function(err,m){
      console.log("Product Default updated");
    })
  })


}


exports.editProduct = async(req,res)=>{

  var obj = req.body;

  var product = await Product.findOne({"id":obj.id},function(err,master){
    master.description = obj.description
    master.price = obj.price
    master.priceopt = obj.priceopt
    master.company = obj.company,
    master.companystyle = obj.companystyle,
    master.category = obj.category,
    master.style = obj.style,
    master.notes = obj.notes
    master.save(function(err,m){
      console.log("Product Edit updated");
    })
  })

}

exports.deleteProduct = async(req,res)=>{

  var obj = req.body;

  var product = await Product.remove({"id":req.body.id},function(err,master){
    if(!err){
      console.log("Product removed ");
    }
  })

  res.send(product);
}

exports.setPagination = async(req,res)=>{

    var obj = req.body;

    console.log(req.body)

}

exports.getHidden = async(req,res)=>{


  let productBracelet = await Product.findOne({category:'Bracelet'},{_id:0, hidden:1});

  console.log(productBracelet);

  res.send(productBracelet)

}
exports.setHidden = async(req,res)=>{

  let obj = req.body;

  let reverse = !obj.onhiddenmode

  let product = await Product.updateMany({}, {"$set":{"hidden": reverse}});



}