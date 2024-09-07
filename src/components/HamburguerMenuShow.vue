<template>
  <div id="hamburguer_menu">
    <div id="btn_container">
      <button v-on:click="$emit('menuShown')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" id="Flat">
          <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z"/>
        </svg>
      </button>
    </div>
    <div id="about_me">
      <a href="#">My work</a>
      <a href="#">My shelf</a>
      <a href="#">My résumé</a>
    </div>
    <div id="say_hello">
      <p>SAY HELLO</p>
      <a href="#">email@marcos.dev</a>
      <a href="#">t.me/marcosramos</a>
    </div>
    <div id="social_media">
      <a href="#">TW</a>
      <a href="#">GH</a>
      <a href="#">LN</a>
      <a href="#">YT</a>
    </div>
  </div>
</template>

<style scoped>
  #hamburguer_menu {
    display: block;
    position: absolute;
    top: 21px;
    right: 50px;
    width: 334px;
    height: 475px;
    background-color: #ffffff;
    font-size: 1.08rem;
    line-height: 2.7rem;
    padding: 52px;
  }
  #btn_container {
    display: flex;
    justify-content: end;
    margin-top: -28px;
    margin-right: -32px;
  }
  button {
    border: none;
    background-color: transparent;
  }
  svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  a {
    display: block;
    font-size: 1.08rem;
    line-height: 2.7rem;
  }
  a:link, a:visited {
    text-decoration: none;
    color: #000000;
  }
  a:hover, a:active {
    text-decoration: none;
  }
  #say_hello {
    font-size: 0.939rem;
    line-height: 2.348rem;
    margin-top: 33px;
  }
  #social_media {
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
  }
</style>