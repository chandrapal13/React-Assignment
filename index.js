const express = require('express');
const path = require("path");
const app = express();
const port = 9000;

// built in middleware....

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname,"../templates");

app.set('view engine', "hbs");
app.set('views',templatePath);

app.get("/",(req,res)=>{

  res.render("index");

}) 

app.use(express.static(staticPath));
app.get("/", (req, res) => {
  res.send("SUBDAR LAL");
});

app.listen(port, () => {
  console.log(`Server started on port${port}`);
});