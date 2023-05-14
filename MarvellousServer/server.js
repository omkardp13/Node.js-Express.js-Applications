/*
The code is a simple Node.js server that uses the Express.js framework to create an HTTP server that listens on port 5100. 
When a client sends an HTTP GET request to the server's root endpoint (i.e., "/"),
 the server responds with the message "Marvellous Server is live...".
*/

//Imports the Express.js framework, which is used to create the HTTP server.
express = require('express');

//creates an instance of the Express application.
eobj=express();

//sets the port number that the server will listen on
port = 5100;

//The StartServer() function is defined to log a message to the console when the server starts.
function StartServer()
{
    console.log("Marvellous Server Started Successfully...");
}

//The eobj.listen() method starts the server and listens for incoming requests on the specified port.
//It also calls the StartServer() function to log a message to the console when the server starts.
eobj.listen(port,StartServer());

//The GetMethod() function is defined to handle GET requests to the root endpoint (i.e., "/") and sends the response "Marvellous Server is live...".

function GetMethod(request,respose)
{
    respose.send("Marvellous Server is live...")
}

//The eobj.get() method sets up a route for GET requests to the root endpoint (i.e., "/") and specifies the GetMethod() function to handle those requests.
eobj.get('/',GetMethod);