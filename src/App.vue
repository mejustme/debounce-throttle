<template>
  <div id="app">
    <div id="sidebar">
      <div id="sidebar-free">
        <p class="tips">移动鼠标</p>
      </div>
    </div>

    <div id="content">
      <h2>Mousemove事件：</h2>
      <div id="allEvents"></div>
      <h2>Debounce: 默认-lodash.debounce(fn, 200, {leading: false, trailing: true})</h2>
      <div id="debounce_false_true"></div>

      <h2>Debounce: lodash.debounce(fn, 200, {leading: true, trailing: false})</h2>
      <div id="debounce_true_false"></div>

      <h2>Debounce: lodash.debounce(fn, 200, {leading: true, trailing: true})</h2>
      <div id="debounce_true_true"></div>

      <!--<h2>Debounce: lodash.debounce(fn, 200, {leading: false, trailing: false})</h2>-->
      <!--<div id="debounce_false_false"></div>-->

      <h2>Throttle: 默认-lodash.throttle(fn, 200, { leading: true, trailing: true});</h2>
      <div id="throttle_true_true"></div>

      <!--<h2>Throttle: lodash.throttle(fn, 200, { leading: false, trailing: false});</h2>-->
      <!--<div id="throttle_false_false"></div>-->

      <h2>Throttle: lodash.throttle(fn, 200, { leading: true, trailing: false});</h2>
      <div id="throttle_true_false"></div>

      <h2>Throttle: lodash.throttle(fn, 200, { leading: false, trailing: true});</h2>
      <div id="throttle_false_true"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    }
  }
</script>

<style>
  body {
    background: #444444;
    color: white;
    font: 15px/1.51 Helvetica, sans-serif;
    overflow: hidden;
  }

  #switcher {
    text-align: center;
  }

  button {
    cursor: pointer;
    color: black;
    border: 1px solid #999;
    background: #DADADA;
    padding: 2px 8px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background-image: -moz-linear-gradient(top, #EBEBEB, #B8B8B8);
    background-image: -o-linear-gradient(top, #EBEBEB, #B8B8B8);
    background-image: -webkit-gradient(linear, left top, left bottom, from(#EBEBEB), to(#B8B8B8));
    background-image: -webkit-linear-gradient(top, #EBEBEB, #B8B8B8);
    background-image: linear-gradient(top, #EBEBEB, #B8B8B8);
  }

  #use-lodash {
    margin-right: 30px;
  }

  #content {
    margin-left: 145px;
    position: relative;
  }

  #content span {
    height: 18px;
    width: 9px;
    line-height: 18px;
    text-align: center;
    vertical-align: top;
    display: inline-block;
    border-left: 1px solid #999;
    font-size: 12px;
  }

  #content div {
    margin: 0;
    font-family: monospace;
    color: black;
    height: 23px;
  }

  h2 {
    margin: 10px 0 5px 0;
    height: 15px;
    clear: both;
    font-weight: normal;
    width: 100%;
    font-size: 11px;
  }

  #sidebar {
    height: 100%;
    width: 120px;
    position: absolute;
  }

  #sidebar-free {
    height: 95%;
    width: 100%;
    border: 1px solid #ccc;
    position: relative;
    text-align: center;
    background-color: #444444;
    border-radius: 10px;
  }

  .tips {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }

  .color0 {
    background-color: #9BFFBB
  }

  .color1 {
    background-color: #E3FF7E
  }

  .color2 {
    background-color: #B9C6FF
  }

  .color3 {
    background-color: #99FF7E
  }

  .color4 {
    background-color: #FFB38A
  }

  .color5 {
    background-color: #A5FCFF
  }

  .color6 {
    background-color: #FF8E9B
  }

  .color7 {
    background-color: #FFE589
  }

  .color8 {
    background-color: #FFA3D8
  }

  .color9 {
    background-color: #5ca6ff
  }
</style>
