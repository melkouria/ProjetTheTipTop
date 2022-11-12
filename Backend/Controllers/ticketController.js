const { validate } = require('@hapi/joi/lib/base');
let bcrypt = require('bcrypt');
const { Ticket } = require('../BackEnd/models/tickeModel');
const Lots= require('../BackEnd/models/lotModel');
const User= require('../BackEnd/models/userModel');
const Tickets = require('../BackEnd/models/tickeModel');



exports.new =  (req,res,next)=>{
    
    const result =  new Tickets({
        statusT : req.body.statusT,
    })
    .save();
    res.json({
        message:"ticket Inserted"
    })

}

exports.index = async(req,res) => {
    const result = await Tickets.find()
    res.json({
        result : result.map((result) =>{
            return{
                _id : result._id,
                statusT : result.statusT,
                Prix: result.Prix,
            }
        })
    })
}

/*exports.indexTicketbyUser = async(req,res) => {
    const uid = req.params.uid;
    const result =  await  Tickets.findById(uid).populate('idUser')
    console.log('user:',result);
    res.json({
        result : result.map((result) =>{
            return{
                _id : result._id,
                statusT : result.statusT,
                Prix: result.Prix,
                idLot : result.idLot,
                idUser: result.idUser,
            }
        })
    })
}*/
exports.insertTicketByIdlot = async (req,res)=>{
    const tid = req.params.tid;

    const lot = await new Lots({
        nom : req.body.nom,
        description : req.body.description,
     }).save()
     //console.log(id);
     const ticket = await  Tickets.findById(tid)
    // console.log('user:',ticket);
     ticket.idLot.push(lot);
     await ticket.save();

    res.json({
        message:'inserted'
    })

}

exports.delete = (req,res) =>{
    Tickets.findByIdAndDelete(req.params.id,function(err,ticket){
        if(err){
            res.json({
                status: 0,
                message: err,
                message: 'le id existe pas, changeé le!'
            })
        }else {
            res.json({
            status: 1,
            message: 'bravo ticket suprrimer',
            data: ticket
        })
        }
        
    });
}