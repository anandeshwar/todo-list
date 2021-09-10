const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT;

const app = express();


const listItems = ["Wakeup Alarm", "Breakfast", "Weekly Report"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res){
	var today = new Date();

	var options = {
		weekday: "long",
		day: "numeric",
		month: "long"	
	};

	day = today.toLocaleDateString("en-US", options);

	res.render("index",{kindOfDay: day, newListItem: listItems});
});

app.post("/", function(req, res){

	listItems.push(req.body.itemName);
	

	res.redirect("/");
	
});


app.listen( port || 80, function(req, res){
	console.log("Server is Listening at port 80");
});

