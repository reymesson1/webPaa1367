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
    master.images.push( obj.image );
    master.save(function(err,m){
      console.log("Product Edit updated");
    })
  })

  console.log(obj);

  // res.send(product);

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

exports.editDeletePicture = async(req,res)=>{

  var obj = req.body;

  var product = await Product.findOne({"id":obj.productId},function(err,master){
    master.images.pull( obj.name );
    master.save(function(err,m){
      console.log("Product Edit delete picture");
    })
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

exports.getMasterIpad = async(req,res)=>{


  var productBracelet = await Product.find({category:'Bracelet'});

  let data = {

    "error": false,
    "message": "successfully",
    "data": 
    [
      {
       "id":"0",
       "category":"Bracelets",
       "items": productBracelet
      },
      {
       "id":"1",
       "category":"RM",
       "items":[
       {
         "id": "1629658342738",
         "description": "rings-new-water-point",
         "price": "",
         "company": "Company1",
         "style": "Style1",
         "companystyle": "",
         "category": "rm",
         "priceopt": "",
         "notes": "4 pics",
         "hidden": false,
         "image": "rings-new-water-point-Style1-4.jpg"
       }
       ]
      },
      {
       "id":"2",
       "category":"Rings",
       "items":[
       {
         "id": "1629658342738",
         "description": "rings-new-water-point",
         "price": "",
         "company": "Company1",
         "style": "Style1",
         "companystyle": "",
         "category": "rm",
         "priceopt": "",
         "notes": "4 pics",
         "hidden": false,
         "image": "rings-new-water-point-Style1-4.jpg"
       }
       ]
      },
      {
       "id":"3",
       "category":"Pendant",
       "items":[
       {
         "id": "1629658342738",
         "description": "rings-new-water-point",
         "price": "",
         "company": "Company1",
         "style": "Style1",
         "companystyle": "",
         "category": "rm",
         "priceopt": "",
         "notes": "4 pics",
         "hidden": false,
         "image": "rings-new-water-point-Style1-4.jpg"
       }
       ]
      },
      {
       "id":"4",
       "category":"Pings",
       "items":[
       {
         "id": "1629658342738",
         "description": "rings-new-water-point",
         "price": "",
         "company": "Company1",
         "style": "Style1",
         "companystyle": "",
         "category": "rm",
         "priceopt": "",
         "notes": "4 pics",
         "hidden": false,
         "image": "rings-new-water-point-Style1-4.jpg"
       }
       ]
      },
      {
       "id":"5",
       "category":"Necklace",
       "items":[
       {
         "id": "1629658342738",
         "description": "rings-new-water-point",
         "price": "",
         "company": "Company1",
         "style": "Style1",
         "companystyle": "",
         "category": "rm",
         "priceopt": "",
         "notes": "4 pics",
         "hidden": false,
         "image": "rings-new-water-point-Style1-4.jpg"
       }
       ]
      },
      {
       "id":"6",
       "category":"Earings",
       "items":[
       {
         "id": "1629658342738",
         "description": "rings-new-water-point",
         "price": "",
         "company": "Company1",
         "style": "Style1",
         "companystyle": "",
         "category": "rm",
         "priceopt": "",
         "notes": "4 pics",
         "hidden": false,
         "image": "rings-new-water-point-Style1-4.jpg"
       }
       ]
      },
      {
       "id":"7",
       "category":"Watches",
       "items":[
       {
         "id": "1629658342738",
         "description": "rings-new-water-point",
         "price": "",
         "company": "Company1",
         "style": "Style1",
         "companystyle": "",
         "category": "rm",
         "priceopt": "",
         "notes": "4 pics",
         "hidden": false,
         "image": "rings-new-water-point-Style1-4.jpg"
       }
       ]
      },
     
     ]
  
  }



  // let products = await Product.find({})

  
  // let data2 = {

  //   "error": false,
  //   "message": "successfully",
  //   "data": products
  // }
  
  // res.send(data2);


  res.send(data);
}

exports.setMasterIpad = async(req,res)=>{

  console.log(req.body);

  var obj = req.body;

  let data = {

    "error": false,
    "message": "successfully",
    "data": [
      {
      "id": "1",
      "title": "testing",
      "post": "newData"
    },{
      "id": "2",
      "title": "testing",
      "post": "newData"
    }]
  }


  let products;

  if(obj.company!=''){

    products = await Product.find({"company" : { $regex: '.*' + obj.company + '.*' }  })
  } else if(obj.companystyle!=''){

    products = await Product.find({"companystyle" : { $regex: '.*' + obj.companystyle + '.*' }  })
  }



  
  let data2 = {

    "error": false,
    "message": "successfully",
    "data": products
  }
  
  res.send(data2);



  // res.send(data);

}