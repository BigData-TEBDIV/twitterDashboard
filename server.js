var express = require("express"),
	app     = express();

var readTextFile = require('read-text-file');
var writeFile = require('write');

app.use(express.static(__dirname + '/public/'));


app.get("/",function(req, res){
	var options = {
		root: __dirname + '/public/',
	};
	res.sendFile('dashboard.html',options);
});

app.get("/writeData",function(req, res){

console.log(req.query.hash);

writeFile('filter.txt', '#'+req.query.hash, function(err) {
  if (err) console.log(err);
});


var json = [
		"foii"
	];

	res.send(json);

});



app.get("/data",function(req, res){

	//var contents = readTextFile.read('D:/Mestrado/Mestrado - coppe/BigData/newworkspace/twitterspark/data/streaming/countSentiment/part-00001');

	//console.log(contents)
	//console.log("*********************")
/*	var linha = contents.split("\n");

	var cat = new Array();
	var se = new Array();
	for(var i in linha){
		var arraylinha = linha[i].split(",")
		cat.push(arraylinha[0].replace("(",""));
		se.push(parseInt(arraylinha[1].replace(")","").replace("\r", "").replace(" ", "")));
	}
	*/
            
	var json = [{
		categories : ['Positivo', 'Negativo', 'Neutro'],
         series: [20, 85, 30]
	}]

	res.send(json);

});


////////////////////////////////////////////////////////////

var ipaddress = process.env.SERVER_HOST || "127.0.0.1";
var port = process.env.SERVER_PORT || "5000";

app.listen(port, ipaddress, function() {
  console.log('Dashboard rodando na porta '+ port);
});
