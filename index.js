var express = require('express');
   var app = express();

   app.use(express.static('public'));
   app.use("/", function(req, res) {
       res.send('You have successfully created a second app!');
   })

   var server = app.listen(8081, function() {
       var host = server.address().address
       var port = server.address().port

       console.log("Example app listening at http://%s:%s", host, port)
   })
