<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  position:relative;
  width:100%;
  height:100%;
  font-family:'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2a2b33;

  
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

*{
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  padding:0;
  margin:0;
}

body{
  background:cornsilk;
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap');
}
</style>
