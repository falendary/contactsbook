"use strict";
var	express		= require('express'),
	app			= express();

app
	.use(express.static('./public'))
	.get('*', function(req, res)
	{
		res.sendFile('public/index.html');
	})
	.listen(3000);