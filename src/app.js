/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'AuckTide',
  icon: 'images/menu_icon.png',
//  subtitle: '',
  body: 'Hi! This app only handles putting tides on your timeline, all the tides will be in your timeline!'
});

Pebble.timelineSubscribe('auckland', 
  function () { 
    console.log('Subscribed to auckland');
  }, 
  function (errorString) { 
    console.log('Error subscribing to topic: ' + errorString);
  }
);

main.show();