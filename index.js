'use strict';
var skynet = require('skynet'),
	Player = require('player');

var conn = skynet.createConnection({
	uuid : '631ae911-36c6-11e4-bfb4-f391de636541',
	token : 'g9yilyx5wtz3q5mi977bxq46wpdxtj4i'
});

conn.on('ready', function(){
	console.log('Connected to Skynet');
	conn.on('message', function(message){
		console.log('On Message', message);
		var file = message.payload || 'siren';
		var player = new Player('./sounds/' + file + '.mp3');

		player.play();
	});
});

conn.on('notReady', function(){
	console.log('Not Ready');
});