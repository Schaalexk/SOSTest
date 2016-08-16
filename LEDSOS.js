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


/* setTimeout(function() { letterS(); }, 1000);
setTimeout(function() { letterO(); }, 4000);
setTimeout(function() { letterS(); }, 8500);

    function letterS () {
      after((.5).second(), my.led.toggle);
      after((1.0).second(), my.led.toggle);
      after((1.5).second(), my.led.toggle);
      after((2.0).second(), my.led.toggle);
      after((2.5).second(), my.led.toggle);
      after((3.0).second(), my.led.toggle);
    };

    function letterO () {
      after((.5).second(), my.led.toggle);
      after((1.5).second(), my.led.toggle);
      after((2).second(), my.led.toggle);
      after((3).second(), my.led.toggle);
      after((3.5).second(), my.led.toggle);
      after((4.5).second(), my.led.toggle);
    }
*/
  }

}).start();
