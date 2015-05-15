var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(express.static('public'));

app.use(session({
  secret: 'cod3X is sometimes fun always informative',
  resave: false,
  saveUninitialized: true
}));


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

function checkAuth(req, res, next){
	if (!req.session.user){
		//res.send("need's login!")
		res.redirect("/");
	}
	else{
		next();
	}
}

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/start', checkAuth, function(req, res){

});


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});