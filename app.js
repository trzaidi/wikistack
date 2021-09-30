const express = require("express");
const morgan = require("morgan");

const app = express();

// middleware; background listener using morgan to log errs
app.use(morgan("dev"));

// built in middleware route to folder named public where we store static files
app.use(express.static(__dirname+"/public"));

app.use(express.urlencoded({extended:"false"}));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3001, () => {
  console.log(`app listening on port 3001`)
});


