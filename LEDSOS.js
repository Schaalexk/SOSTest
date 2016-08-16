var Cylon = require('cylon');
var morse = require('morse');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
  },

  devices: {
    led: { driver: 'led', pin: 13 }
  },

  work: function(my) {

  var encoded = morse.encode('this is morse code'),
      count = 0,
      lastDot = false;

  console.log(encoded);

  for (var i = 0; i < encoded.length; i++){
    console.log(encoded[i]);
    if(encoded[i] === '.'){
      dot();
    } else if (encoded[i] === '-'){
      dash();
    } else {
      space();
    }
  }

  function dot() {
    count += 0.75;
    setTimeout(function() { after((0.0).second(), my.led.toggle); }, (count * 750));
    setTimeout(function() { after((0.25).second(), my.led.toggle); }, (count * 750));
    lastDot = true;
  }

  function dash() {
    count += 0.75;
    setTimeout(function() { after((0.0).second(), my.led.toggle); }, (count * 750));
    setTimeout(function() { after((0.75).second(), my.led.toggle); }, (count * 750));
    count += 0.75;
    lastDot = false;
  }

  function space() {
    count += 0.75;
  }

  }

}).start();
