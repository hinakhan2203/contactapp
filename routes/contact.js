const express = require('express');
var objId = require('mongoose').Types.ObjectId;
var userModel = require('../model/user');

const router = express.Router();

router.get('/user',(req,res)=>{
    userModel.find((err,doc)=>{
      if(!err) res.send(doc);
      else res.send({"msg":"error 1 getting all the data"});

  });

});
router.get('/user/:id',(req,res)=>{
    if(objId.isValid(req.param.id))
    return res.status(400).send({"msg":"error 3 invalid user id "});
    userModel.findById(req.param.id,(err,doc)=>{
      if(!err) res.send(doc);
      else res.send({"msg":"error 4 no user found"});

  });

});

router.post('/user',(req,res)=>{
      var user = new userModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone
    });

    user.save((err,doc)=>{
        if(!err) res.send(doc);
    else res.send({"msg":"error 2 cannot add data to database"});
    });
    /* userModel.create(req.body,(err,doc)=>{
        if(!err) res.send(doc);
    else res.send({"msg":"error 2 cannot add data to database"});

    });*/
});
router.delete()




module.exports = router;