/*
This is a Node.js application using the Express framework to create a RESTful API to handle CRUD operations for a list of batches.

*/

//The express module is imported and assigned to a variable named express.
const express=require('express');

//An instance of the express module is created and assigned to a variable named eobj.
eobj = express();

//The json middleware is added to eobj using the use method, which allows the application to parse incoming JSON data.
eobj.use(express.json());

//A variable named port is assigned the value 5100.
port=5100;

//eobj listens on the specified port using the listen method. 
//A callback function is passed to the listen method to print a message to the console indicating that the server is running.
eobj.listen(port,function()
{
    console.log("Marvellous server is listening on port number 5100");
});

/*
A route is defined for the root URL ('/') using the get method.
When a request is made to this URL, a response is sent with the message "Marvellous Server is started successfully and this is Root".
*/
eobj.get('/',function(req,res)
{
 res.send("Marvellous Server is started successfully and this is Root");
});

/*
An array named batches is defined containing four objects representing batches of courses, each with an id, name, and duration.
*/
batches =
 [
    {id:1,name:"PPA",duration:"4 months"},

    {id:2,name:"LB",duration:"3.5 months"},

    {id:3,name:"PYTHON",duration:"3 months"},

    {id:4,name:"LSP",duration:"4.5 months"}
 ]


/*
A route is defined for the URL '/getbatches' using the get method. 
When a request is made to this URL, the ReadData function is called, which sends the batches array as the response.
*/
 //Read the data from database (GET)

 eobj.get('/getbatches',ReadData);


/*
The ReadData function is defined to accept the req and res parameters, which represent the request and response objects, respectively.
The function iterates over the batches array to find the batch with the specified id parameter.
If the batch is found, it is sent as the response. If not, a 400 status code and an error message are sent.
*/
 function ReadData(req,res)
 {
    res.send(batches);
 }

/*
A route is defined for the URL '/getBatches/:id' using the get method.
When a request is made to this URL, the ReadDataID function is called, which searches for the batch with the specified id parameter and sends it as the response.
*/
 eobj.get('/getBatches/:id',ReadDataID);

/*
The ReadDataID function is defined to accept the req and res parameters, which represent the request and response objects, respectively.
The function iterates over the batches array to find the batch with the specified id parameter. 
If the batch is found, it is sent as the response. If not, a 400 status code and an error message are sent.
*/

 function ReadDataID(req,res)
 {
    var iCnt=0;

    for(iCnt=0;iCnt<batches.length;iCnt++)
    {
          if(batches[iCnt].id==req.params.id)
          {
            break;
          }
    }

    if(iCnt == batches.length)
    {
       res.status(400).send("There is no such batch");
    }
    else
    {
        res.send(batches[iCnt]);
    }
 }

/*
A route is defined for the URL '/getBatches/:id' using the delete method. 
When a request is made to this URL, the delete function is called, which searches for the batch with the specified id parameter and removes it from the batches array.
*/
//Delete the data from database (GET)

eobj.delete('/getBatches/:id',(req,res)=>
{
    var iCnt=0;

    for(iCnt=0;iCnt<batches.length;iCnt++)
    {
           if(batches[iCnt].id==req.params.id)
           {
                break;
           }
    }

    if(iCnt == batches.length)
    {
       res.status(404).send("There is no such batch for delete");
    }
    else
    {
        batches.splice(iCnt,1);
        res.send(batches);
    }

})

//Create the data into database (post)
/*
The delete function is defined as an arrow function that accepts the req and res parameters, which represent the request and response objects, respectively.
 The function iterates over the batches array to find the batch with the specified id parameter. 
If the batch is found, it is removed from the batches array and the updated array is sent as the response. If not, a 404 status code and an error message are sent.
*/
eobj.post('/batches',function(req,res)
{
     const newdata =
     {
        id: batches.length+1,
        name: req.body.name,
        duration: req.body.duration
     };


batches.push(newdata);
res.send(batches);

});

/*
A route is defined for the URL '/getBatches/:id' using the put method. 
When a request is made to this URL, the put function is called, which searches for the batch with the specified id parameter and updates its properties with the data sent in the request body.
*/
//Update the data from database (put)

eobj.put('/getBatches/:id',function(req,res)
{
   var iCnt=0;
   
   for(iCnt=0;iCnt<batches.length;iCnt++)
    {
           if(batches[iCnt].id==req.params.id)
           {
                break;
           }
    }


  if(iCnt == batches.length)
  {
         res.status(404).send("There is no record for update");
  }
  else
  {
    batches[iCnt].name=req.body.name;
    batches[iCnt].duration=req.body.duration;

    res.send(batches[iCnt]);
  }

});