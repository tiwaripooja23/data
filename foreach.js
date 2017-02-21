var express = require('express')
var app = express()

app.get('/', function (req,res) {
    var a=[1,2,3];
    var element;
    a.forEach(function(element) {
    console.log(element);
    })
res.sendStatus(element)
});
app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
