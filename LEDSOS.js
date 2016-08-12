var Cylon = require('cylon');
var LEDController = require('ledctl');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: 'COM3' }
  },

  devices: {
    led: { driver: 'led', pin: 13 }
  },

  work: function(my) {
setTimeout(function() { letterS(); }, 1000);
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

  }

}).start();
