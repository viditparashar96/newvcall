var express = require('express');
var router = express.Router();
const {v4:uuidv4}=require('uuid')
var ExpressPeerServer = require('peer').ExpressPeerServer;

var options = {
    debug: true
}
var server = require('http').createServer(router);

router.get('/', function(req, res, next) {
  res.redirect(`/${uuidv4()}`)
});
router.get('/:room',(req,res,next)=>{
  res.render('index',{roomId:req.params.room})
})
router.use('/peerjs', ExpressPeerServer(server, options));


module.exports = router;
