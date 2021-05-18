var sql = require('mssql');

exports.getMaster = async(req,res)=>{

    console.log(req.body);
    var dbConfig = {
      host:'localhost',
      server:'DESKTOP-4CBHF69',
      database:'WideWorldImporters',
      user:'sa',
      password:'1234',
      port:1433,
      options: {
        encrypt: false,
        trustedConnection: true,
      },
  
    };

    sql.connect(dbConfig)
    .then((conn) => 
        conn.query("SELECT TOP 10 * FROM Sales.Orders")
          // .then((v) => console.log(v.recordset))
          .then( (v) => {

            return res.send(v.recordset);

          })
          .then(() => conn.close())
          // .then((v) => res.send(v)  )
    )

  

}

exports.setMaster = async(req,res)=>{

    console.log(req.body)

}

exports.setPagination = async(req,res)=>{

    var obj = req.body;



    console.log(req.body)

}