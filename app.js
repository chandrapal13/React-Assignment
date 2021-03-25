const express = require("express");
 
const app = express();

  app.get("/", (req,res) => {
 
      res.send("<h1>hello<h1>");


  });

app.get('/about', (req , res) => {
 
  res.send("<h1>WORLD</h1>");

})
  app.listen(9000, () =>{
    
    console,console.log("listining at 7000");

 
  })