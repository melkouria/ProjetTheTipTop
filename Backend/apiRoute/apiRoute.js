let router =require('express').Router();
const userController= require('../Controllers/userController');
const ticketController= require('../Controllers/ticketController');
const roleController= require('../Controllers/roleController');
const lotController= require('../Controllers/lotController');
const emailController= require('../Controllers/emailController');
const { append } = require('express/lib/response');
const express = require('express')
const cors = require('cors');

router.get('/' , function(req,res){
    res.json({
        status: 1,
        message: 'hello'
    });
});

router.route('/email/:nom/:prenom/:email/:telephone/:mesage')
.post(emailController.new)
router.route('/email')
.get(emailController.index)
router.route('/users/')
.get(userController.index)
.post(userController.new);
router.route('/login',cors())
.post(userController.login);
router.route('/dashbord')
.get(userController.verifyToken);
router.route('/users/:id')
.delete(userController.delete);

router.route('/users/:rid')
.post(userController.insertByIdRole);
router.route('/users/:lid')
.post(userController.insertByIdLot);


router.route('/tickets/')
.get(ticketController.index)
.post(ticketController.new)
router.route('/tickets/:id')
.delete(ticketController.delete);

router.route('/tickets/:tid')
.post(ticketController.insertTicketByIdlot);

router.route('/roles/')
.get(roleController.index)
.post(roleController.new)
router.route('/roles/:id')
.delete(roleController.delete);

router.route('/roles/:rid')
.post(roleController.insertByIdUser);


router.route('/lots/')
.get(lotController.index)
.post(lotController.new)
router.route('/lots/:id')
.delete(lotController.delete);

router.route('/lots/:lid')
.post(lotController.insertLotByIdUser);
router.route('/lots/:tid')
.post(lotController.insertLotByIdTicket);


module.exports = router;