// var sql = require('mssql');
var fs = require('fs');
var multer  = require('multer');
var uploadsFolder = __dirname + '/uploads/';  // defining real upload path
var upload = multer({ dest: uploadsFolder }); // setting path for multer


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

    var products = [ 
      {
          id: 0,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'A unique combination'                        
        },                
        {
          id: 1,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Italian pizza'                                                        
        },                
        {
          id: 2,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        },                
        {
          id: 3,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        },                
        {
          id: 4,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        },                
        {
          id: 5,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        },                
        {
          id: 6,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        },                
        {
          id: 7,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                                       
        },                
        {
          id: 8,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        },                
        {
          id: 9,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        }                
      ];
  
      res.send(products);
  
  

}

exports.setMaster = async(req,res)=>{
  // app.post('/file_upload', upload.single('single-file'), function(request, response) {

  console.log(req.body);

  // var oldPath = req.body.image;
  // var newPath = 'c:/Downloads/fromNodeFile.jpg';

  // fs.rename(oldPath, newPath, function (err) {
  //   if (err) throw err
  //   console.log('Successfully renamed - AKA moved!')
  // })

  var fileName = req.file.originalname; // original file name
  var file = req.file.path; // real file path with temporary name

  fs.rename(file, "c:/Downloads/" + fileName, async (err) => {
    if (err) {
      console.log(err);
      res.json({success:false, message: err});
      return;
    }

    // response.json({success:true, message: 'File uploaded successfully', fileName: fileName});
    console.log({success:true, message: 'File uploaded successfully', fileName: fileName});
  });


}

exports.setPagination = async(req,res)=>{

    var obj = req.body;



    console.log(req.body)

}