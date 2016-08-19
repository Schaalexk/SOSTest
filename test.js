var alexa = require('alexa-app');
var app = new alexa.app('alexa-morse-code-to-cylon');
var getUrl = require('request');

var morseTranslate = require('./LEDSOS.js');

morseTranslate.getMorse("sos");
