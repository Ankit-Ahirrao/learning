//example from https://github.com/nelsonic/learn-hapi
// Start this app from your command line with: node hellovalidate.js
// then visit: http://localhost:3000/YOURNAME

var Hapi = require('hapi'),
    Joi  = require('joi');

var server = new Hapi.Server('0.0.0.0', 3000);

server.route({
    method: 'GET',
    path: '/{yourname*}',
    config: {  // validate will ensure YOURNAME is valid before replying to your request
        validate: { params: { yourname: Joi.string().max(40).min(2).alphanum() } },
        handler: function (req,reply) {
            reply('Hello '+ req.params.yourname + '!');
        }
    }
});

server.start(function() {
    console.log('Now Visit: http://localhost:3000/YOURNAME')
});

//good example to start to understand what is happening, but in practice for larger examples you
//would use the two-step schema and validate process (here we have schema and validation in 1 step)
