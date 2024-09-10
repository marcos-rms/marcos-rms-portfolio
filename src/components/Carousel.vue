<script setup>
function changeItem(x) {  
  for (let i = 1; i < 6; i++) {
    document.getElementById("item" + i).setAttribute("class", "diamond");
  }
  document.getElementById("item" + x).setAttribute("class", "square");
}
</script>

<template>
  <nav>
    <ul>
      <li>
        <button id="item1" @click="changeItem(1)" class="square"></button>
      </li>
      <li>
        <button id="item2" @click="changeItem(2)" class="diamond"></button>
      </li>
      <li>
        <button id="item3" @click="changeItem(3)" class="diamond"></button>
      </li>
      <li>
        <button id="item4" @click="changeItem(4)" class="diamond"></button>
      </li>
      <li>
        <button id="item5" @click="changeItem(5)" class="diamond"></button>
      </li>
      </ul>
  </nav>
</template>

<style scoped>
  ul {
    list-style-type: none;
  }
  #item1 {
    position: fixed;
    bottom: 158px;
  }
  #item2 {
    position: fixed;
    bottom: 131px;
  }
  #item3 {
    position: fixed;
    bottom: 104px;
  }
  #item4 {
    position: fixed;
    bottom: 77px;
  }
  #item5{
    position: fixed;
    bottom: 50px;
  }
  .diamond {
    width: 8px;
    height: 8px;
    right: 95.6px;
    background-color: black;
    transform: rotate(45deg);
    border: none;
  }
  .square {
    position: fixed;
    width: 14px;
    height: 14px;
    right: 92.7px;
    border: 2px solid black;
    background-color: transparent;
    transform: translatey(3px);
  }
  button {
    cursor: pointer;
  }
  button:focus {
    transition: transform .35s ease;
  }
</style>