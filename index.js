const express = require('express')
const path=require("path");
const app = express()

console.log(__dirname);

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

// app.get('/', function (req, res) {
//   console.log(req);
//   res.send('<h1>TOPページ</h1>')
// })

app.post("/api/v1/quiz", function (req, res) {
  const answer= req.body.answer;
 if(answer==="2"){
  //  res.send("<h1>正解!</h1>");
    res.redirect("/correct.html"); 
}else{
    //  res.send("不正解");
    res.redirect("/wrong.html"); 
  
  
  }

});

app.get("/api/v1/users", function (req, res) {
  res.send({
    name:"MIke",
    age:30
  });
})


app.get('/about', function (req, res) {
  res.send('Aboutページ')
})

app.listen(3000,function(){
  console.log("I am runnnig!")
})
