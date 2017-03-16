var express = require('express');

var app = express();
var server = app.listen(8080);
app.use(express.static('client'));

console.log ("i am running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket)
{	
	console.log('new connection: ' + socket.id);
	
	socket.on('logged_in', sendId);
	socket.on('new_hero_created', sendNewHero);
	socket.on('give_heroes', giveHimHeroes);
	socket.on('take_mine', sendIt);
	socket.on('hero_moved', moveHero);

	function sendId()
	{
		socket.emit('new_player', socket.id);
	}
	
	function sendNewHero(data)

	{
		socket.broadcast.emit('new_hero_created', data);
	}

	function giveHimHeroes(id)
	{
		socket.broadcast.emit('give_heroes', id);
	}

	function sendIt(data, id)
	{
		io.to(id).emit('myHero', data);
	}

	function moveHero(data)
	{
		socket.broadcast.emit('hero_moved', data);
	}





}

