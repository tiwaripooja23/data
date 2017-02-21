var express = require('express')
var app = express()

app.get('/me', function (req, res) {
  var ele = [1,2,5,4];
  var sum = " ";
  for (var x in ele)
  {
    sum += x;
  }
  res.sendStatus(sum);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
