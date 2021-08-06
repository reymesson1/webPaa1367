exports.getMaster = async(req,res)=>{

    var orders = [{
            id : "0001",
            orderDetails:[],
            subtotal: "0.00",
            total: "0.00"
      }];

    res.send(orders);

}

exports.setMaster = async(req,res)=>{

    console.log(req.body)
}