var express = require("Express");
var app = express();

app.get("/", function(request, response) {
    response.send("Hello World!");
});
app.listen(300, function() {
    console.log('Server running at http://localhost:300');
});
