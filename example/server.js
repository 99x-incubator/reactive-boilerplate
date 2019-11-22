const express = require('express');
const server = express();
const body_parser = require('body-parser');

let jwt = require('jsonwebtoken');
let config = require('./config');
let middleware = require('./middleware');
let users = require('./users');

const port = 4000;
server.use(body_parser.json());

server.get("/", (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

server.post("/login", (req, res) => {
	var data = req.body;
        console.log(data);
	var user = users.find(item => item.username === data.username);
	if (user && user.password === data.password) {
		let token = jwt.sign({ username: data.username },
			config.secret,
			{
				expiresIn: '24h'
			}
		);
		res.json({ success: true, message: 'Successfully logged in.', token: token, username: username });
	}
	else {
		res.json({ success: false, message: `Login failed for user ${data.username}.` });
	}
});

server.get("/validate-token", middleware.checkToken, (req, res) => {
	res.json({ success: true, message: 'Token is valid.' });
});

server.listen(port, () => {
	console.log(`Server listening at ${port}.`);
});