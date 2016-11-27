
// main.js
var Vue = require('vue');
var App = require('./app.vue');

// the view-model
new Vue({
  el: '#mountpoint',
  render: function (createElement) {
    return createElement(App);
  }
});