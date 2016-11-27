// app.vue
<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <div>
    <h1 class="red">{{msg}}</h1>
    <md-button v-on:click="reverseMessage" class="md-warn md-raised">Primary</md-button>
  </div>
</template>

<script>

var Vue = require('vue');
var VueMaterial = require('vue-material');
require('./app.css');

Vue.use(VueMaterial);

Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'pink'
});

module.exports = {
  name:"Hello",
  data () {
    return {
      msg: 'Hello world with hot reload'
    }    
  },
  methods: {
    reverseMessage: function () {
      console.log("event working");
      this.msg = this.msg.split('').reverse().join('')
    }
  }
}
</script>

