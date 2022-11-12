
let bcrypt = require('bcrypt');
const express = require('express');
const { default: mongoose } = require('mongoose');
const Users = require("../BackEnd/models/userModel");
const Roles = require("../BackEnd/models/roleModel");
const Lots = require('../BackEnd/models/lotModel');
const jwt = require('jsonwebtoken');
const secretKey = "azertyuio@%123456";
//const verifyToken = require("../apiRoute/verifyToken");




let app = express();


exports.login = async function(req,res){
    const email = req.body.email
    const Password  = req.body.password
    await Users.findOne({email:email}).then(existAdmin =>{
        console.log(existAdmin.isAdmin)
        console.log('hada admin')
    if(existAdmin.isAdmin==true){
            console.log('reeur')
            bcrypt.compare(Password,  existAdmin.password,  async function(err , resp){
                    
                if(!err){
                    if(resp){ 
                        console.log('dazt l admin')
                            const  AuthToken =  jwt.sign({_id : existAdmin._id , email : existAdmin.email}, secretKey, {
                            expiresIn : '1h',
                            
                    })
                        await res.json({status : 'yes' , data : {AuthToken, resp, existAdmin}})
                     }else if(!resp){
                    res.json({status : 'yes' , data : {existAdmin , resp}})
                 }
                }
            })
        }else{
            if( existAdmin && existAdmin._id){
                bcrypt.compare(Password,  existAdmin.password,  async function(err , resp){
                   if(!err){
                       if(resp){ 
                               const  AuthToken =  jwt.sign({_id : existAdmin._id , email : existAdmin.email}, secretKey, {
                               expiresIn : '1h',
                       })
                           await res.json({status : 'ok' , data : {AuthToken, resp, existAdmin}})
                        }else if(!resp){
                       res.json({status : 'ok' , data : {existAdmin , resp}})
                    }
                   }else{
                   console.log('ma daztch')}
               })   
             }
        }
        console.log('exist user ', existAdmin)
    }).catch(err =>{
        res.json({status : 'error1', data : 'il ya une erreur'})
    })
    
        
         
}

exports.verifyToken = (req,res,next) =>{
    const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
   // const token = await req.headers.Autorization.split(" ")[1];
    console.log('token',token)
    if(!token){
        res.status(403).send("token is required for authentication")
    }else{
        try{ 
           
            decodedToken = jwt.verify(token, secretKey )
           req.decodedToken = decodedToken
            console.log(req.decodedToken)
        }catch {
            res.json({status : 'error', data: 'il ya une erreur'})
        }
    } next();
    console.log('coucou')
    if( req && req.decodedToken){
        res.json({status : 'ok' , data: 'ok'})  
    }else{
        res.json({status : 'erreur' , data: 'erreur'})
    }

}
exports.new = async (req,res,next)=>{
    
        const result = await new Users({
            nom : req.body.nom,
            prenom : req.body.prenom,
            genre : req.body.genre,
            email : req.body.email,
            telephone : req.body.telephone,
            password : req.body.password
            //idRole : req.body.idRole

        });
        const salt = await bcrypt.genSalt(10)
        await bcrypt.hash(req.body.password,salt).then(hashedPassword =>{
            console.log('hashed password', hashedPassword)
            result.password = hashedPassword;
        })
        await Users.create(result).then(userStoreData =>{
            if(userStoreData && userStoreData._id){
                console.log('user stored data',userStoreData)
                res.json({status :'ok', data:userStoreData})
            }
        })
         await result.save();
        
        
        console.log(result);
        
        res.json({message:"user Inserted"})

}

exports.index = async(req,res)=>{
        const result = await Users.find().populate('idRole')
        res.json({
            result : result.map(result=>{
                return{
                    _id : result._id,
                    nom : result.nom,
                    prenom : result.prenom,
                    genre : result.genre,
                    email : result.email,
                    telephone : result.telephone,
                    password : result.password,
                    idRole : result.idRole,
                    idLot : result.idLot,

                }
            })
        })
}

exports.insertByIdRole = async (req,res)=>{
    const rid = req.params.rid;

    
    const role = await new Roles({
       // _id : mongoose.Types.ObjectId,
        nom : req.body.nom,
     }).save()
     //console.log(id);
     const user = await  Users.findById(rid)
    // console.log('user:',user);
     user.idRole.push(role);
    // console.log(user.idRole.push(role));
    
     await user.save();

    res.json({
        message:'inserted'
    })

}
exports.insertByIdLot = async (req,res)=>{
    const lid = req.params.lid;

    const lot = await new Lots({
       // _id : mongoose.Types.ObjectId,
       nom : req.body.nom,
       description : req.body.description,
       ref_participation : req.body.ref_participation,
       reception : req.body.reception,
     }).save()
     //console.log(id);
     const user = await  Users.findById(lid)
    // console.log('user:',user);
     user.idLot.push(lot);
    // console.log(user.idRole.push(role));
    
     await user.save();

    res.json({
        message:'inserted'
    })

}

exports.delete = (req,res) =>{
    Users.findByIdAndDelete(req.params.id,function(err,user){
        if(err){
            res.json({
                status: 0,
                message: err,
                message: 'le id existe pas, changeé le!'
            })
        }else {
            res.json({
            status: 1,
            message: 'bravo utilisateur suprrimer',
            data: user
        })
        }
        
    });
}