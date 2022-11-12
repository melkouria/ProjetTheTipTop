const email1  = require("../BackEnd/models/email");



exports.new =  (req,res)=>{
    
    const result =  new email1({
        nom : req.params.nom,
        prenom : req.params.prenom,
        email : req.params.email,
        telephone : req.params.telephone,
        mesage : req.params.mesage
    })
    .save();
    res.json({
        message:"email Inserted"
    })


}

exports.index = async(req,res) => {
    const result = await email1.find()
    res.json({
        result : result.map((result) =>{
            return{
                _id : result._id,
                nom : result.nom,
                prenom : result.prenom,
                email : result.email,
                telephone : result.telephone,
                mesage : result.mesage,
                
            }
        })
    })
}
