exports.getStyle = async(req,res)=>{

    var styles = [{
            id : "0001",
            description: "",
            notes: ""
      }];

    res.send(styles);

}

exports.setStyle = async(req,res)=>{

    console.log(req.body)
}