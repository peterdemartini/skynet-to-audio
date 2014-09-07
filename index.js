'use strict';
var skynet = require('skynet'),
	Player = require('player');

var conn = skynet.createConnection({
	uuid : '631ae911-36c6-11e4-bfb4-f391de636541',
	token : 'g9yilyx5wtz3q5mi977bxq46wpdxtj4i'
});

conn.on('ready', function(){
	conn.on('message', function(channel, message){
		var file = message.payload || 'siren';
		var player = new Player('./sounds/' + file + '.mp3');

		player.play();
	});
	conn.on('disconnect', function(){
		console.log('Disconnected from Skynet');
	});
});