var express   = require('express'),
    app       = express();

var port, staticDirs;

port = 2500;
staticDirs = ['/../public'];

/**
 * Static files
 */
for (var i=0; i<staticDirs.length; i++) app.use(express.static(__dirname + staticDirs[i]));

app.listen(port);
console.log('Server running on port ' + port);
