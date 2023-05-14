express = require('express');

eobj=express();

eobj.listen(5100,function()
{
    console.log("Server started successfully...");
});


//http://localhost:5100/

eobj.get('/',function(req,res)
{
   res.send("Server is live at root / ");
});

//http://localhost:5100/PPA

eobj.get('/PPA',function(req,res)
{
   res.send("This is the information of PPA batch");
});

//http://localhost:5100/Angular

eobj.get('/Angular',function(req,res)
{
   res.send("This is the information of Angular batch");
});
