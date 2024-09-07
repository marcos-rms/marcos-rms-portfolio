<template>
  <a href="#">
    <span>
      <div id="first_border"></div>
      <div id="second_border"></div>
    </span>
  </a>
</template>

<style scoped>
span {
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 38px;
  height: 25.5px;
  border: none;
}
div {
  flex-grow: 1;
  border-top: 2px solid black;
}
#second_border {
  width: 75%;
  margin-left: 25%;
}
</style>