const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
//const parserUrlencoded = bodyParser.urlencoded({extended:false});
//const request = require('request');
const Question = require('../models/Questions')


router.get('/get/questions',  function(req, res) {
    Question.find({},function(err, results, count){
      if(err) {
        res.json({success:false})
      }
     res.json({success:true, data:results});
     });
   }); // get all questions


router.get('/get/questions/:searchText',  function(req, res) {
    Question.find({$or:[{'title': {'$regex': req.params.searchText,'$options':'i'}},
      {'desc':{'$regex': req.params.searchText,'$options':'i'}}]},function(err, results, count){
        if(err) {
          res.json({success:false})
        }
        res.json({success:true, data:results});
        });
   }); // get  questions based on searchText



   // delete question form db
router.delete('/delete/:id',function(req,res,next){
  Question.remove({'_id': req.params.id},function(err,question){
      if(err) {
        res.json({deleteStatus:'Deleted Question:' +  err });
      } else {
          res.json({deleteStatus:'Deleted Question'});
      }
  })
});


router.post('/edit',function(req,res){
  Question.update({ _id: req.body.id }, { $set: { 
  title: req.body.title,
  desc: req.body.desc,
  tag: req.body.tag
  }},function(err,question,count){
    if(err){
      res.json({success:false});;
    } else {
      res.json({success:true});
    }
  })
})

module.exports = router;