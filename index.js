const express=require("express");
const fs=require("fs");
const path=require("path");
const nodemailer=require("nodemailer");
const ejs = require('ejs');
const site=new express();
site.use(express.static(path.join(__dirname + '/static')));
site.use('/favicon.ico', express.static('favicon.png'));
function sendEmail(to,subj,cont){
	nodemailer.createTransport({
		host:'smtp.zoho.com',
		port:465,
		secure:true,
		auth:{
			user: "notifications@kestron.software",
			pass: process.env["emailPass"]
		}
	}).sendMail({
		from:"notifications@kestron.software",
		to:to,
		subject:subj,
		html:cont
	});
}
site.listen(8000,()=>{
	console.log("Website online");
});
site.get("/send",(req,res)=>{
	sendEmail(req.query.email,"Contact Receipt - Savoria","Hi "+req.query.name+"! Thanks for reaching out to the Savoria restaurant. This is actually non-existent and is only for a school project. Also, this email is not associated with the class, but one of the students. Here's what you sent to us:<br><br>"+req.query.what);
	res.send(`
 <!DOCTYPE html>
<html>
	<head>
		<title>Thanks! - Savoria</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		Thanks for reaching out to us! You should be receiving a contact receipt in your inbox very soon. Note that when it gets delivered will vary, some clients get it in a few seconds, while others (such as Gmail) can take up to ten minutes.
		<h1>${req.query.name}</h1>
		<h3>${req.query.email}</h3>
		<p>
			${req.query.what}
		</p>
		<script src="headAndFoot.js"></script>
		<script src="script.js"></script>
	</body>
</html>`);
});

//I am doing it this dumb way because the API key is NOT going to be public
site.get('/contact',(req,res)=>{
	ejs.renderFile('./contact.ejs', {"API_KEY":process.env["key"]}, {}, function(err, str) {
			if (err) {
				res.send(err);
				return;
			}
			res.send(str)
		})
});