let path = require("path");
let express = require("express");


//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();

//request is info sending to server from client.
//response is info sending to client from server.

router.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
});
//////////////////////////////////////////////////////////////
let index = 0;
//new code good
router.post('/create', function(req, res){
   let identifier = Number(req.body.identifier.trim());
   let content = String(req.body.content.trim());
   let newcont = '';
    if (identifier == "") {
        res.json({error:true});
        return;
    }
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    if (content == "") {
        res.json({error:true});
        return;
    }
    newcont = content.replace('hi','h e                ll           o');
    newcont = content.replaceAll('2','(((8/4)40)/160 + 1.5)')
//keep above
    console.log("create id = " + identifier);
    console.log("create content = " + newcont);
    res.json({error:false, content:newcont});
});
//new code good
router.get('/read', function(req, res){

    let identifier = Number(req.query.identifier.trim());

    if (req.query.identifier == "") { //empty id
        res.json({error:true});
        return;
    }
    if (Number.isNaN(identifier)) { //if id is not a #
        res.json({error:true});
        return;
    }
    console.log("read id = " + identifier);
    console.log('read');
    res.json({error:false});


});
module.exports = router;
