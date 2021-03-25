const express = require("express");
const app = express();
const port = 9090;

app.get('/', (req, res) => {
  
  res.send("welcome");

});
app.get('/about', (req, res) => {
  res.send("<h1>ABOUT</h1>");
}); 
app.get('/contact', (req, res) => {
  res.json ([{ 
id:1, 
name: "vinod",



  }]);
  res.send([{
id:1, 
name: "vinod",



  },
  {
    id:1, 
    name: "vinod",
    
    
    
      },
      {
        id:1, 
        name: "vinod",
        
        
        
          }

]);

}); 
app.get('/contact', (req, res) => {
  res.send("<h1>CONTACT - HELLO</h1>");
}); 
app.listen(port, () => {
  console.log(`Server started on port${port}`);
} );











// var express = require('express');  
// var app = express();  
// app.get('/', function (req, res) {  
//   res.send('Welcome to JavaTpoint!');  
// });  
// var server = app.listen(8000, function () {  
//   var host = server.address().address;  
//   var port = server.address().port;  
//   console.log('Example app listening at http://%s:%s', host, port);  
// });  