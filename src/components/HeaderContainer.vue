<script setup>
import HamburguerMenuShow from './HamburguerMenuShow.vue';
import HamburguerMenuHidden from './HamburguerMenuHidden.vue';

import { ref } from 'vue';

const menuShown = ref(false);

</script>

<template>
  <div id="header_container">
    <div id="content">
      <h1>Marcos Ramos</h1>
      <span id="menu_container">
        <span v-if="!menuShown" v-on:click="menuShown =! menuShown" id="menu_hamburguer">
          <HamburguerMenuHidden />
        </span>
        <span v-show="menuShown" id="menu_shown">
          <HamburguerMenuShow  @menuShown="()=> menuShown =! menuShown" />
        </span>
      </span>
    </div>
  </div>
</template>

<style scoped>
  #header_container {
    width: 100%;
    height: 152px;
    padding: 56px 82px;
    position: fixed;
    z-index: 1;
  }
  #content {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  #menu_shown {
    animation-name: anime;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
  @keyframes anime {
    from {opacity:0; transform:scale(0.3, 0.3);}
    to {opacity:1; transform:scale(1, 1);}
  }
</style>