var alexa = require('alexa-app');
var app = new alexa.app('alexa-morse-code-to-cylon');
var getUrl = require('request');

/**
 * LaunchRequest.
 */

app.launch(function(request,response) {
	response.say('Speak and I will translate to morse code');
	response.card("Speak and I will translate to morse code","Morse Card");
});

/**
 * IntentRequest.
 */

app.intent('OnIntent',
  {
    'utterances':[ 'turn the light on' ]
  },
  function(request,response) {
	  console.log('On intent');
	getUrl('https://e1c0e79f.ngrok.io/api/robots/omnius/commands/on', function(err, Response, body){
		console.log(Response);
		if(!err){
			console.log(body, Response);
			response.say('turning the light on, by your command');
			response.shouldEndSession(true);
			response.send();
		}else{
			console.log(body, Response);
			response.say('I encountered a problem');
			response.shouldEndSession(true);
			response.send();
		}
	});
	  return false;
  }
);

/**
 * Error handler for any thrown errors.
 */
app.error = function(exception, request, response) {
    response.say('Sorry, something bad happened');
};

// Connect to lambda
exports.handler = app.lambda();
