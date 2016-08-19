var alexa = require('alexa-app');
var app = new alexa.app('alexa-morse-code-to-cylon');
var getUrl = require('request');
var morseTranslate = require('./LEDSOS.js');
var code = 'a';

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

app.intent('onIntent',
  {
		'slots': { 'spokenWord':'WORDS' },
    'utterances':[ '{spokenWord}' ]
  },
  function(request,response) {
		code = request.slot('spokenWord');
		morseTranslate.getMorse(code);
		response.shouldEndSession(true);
		response.send();
	});


/**
 * Error handler for any thrown errors.
 */
app.error = function(exception, request, response) {
    response.say('Sorry, something bad happened');
};

// Connect to lambda
exports.handler = app.lambda();
