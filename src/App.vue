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
  --dark01: #2a2b33;
  color: var(--dark01);
  
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
}

h1{
  font-weight:900;
  font-size:9vw;
  text-transform: uppercase;
  text-align:left;
  color:var(--dark01)
}

.meriem{ background-color:darksalmon }
.elliot{ background-color:black }
.raphaël{ background-color:rgb(211, 30, 74) }

.info{
  width:24px;
  height:24px;
  background-image:url('./assets/info.svg');

  position:fixed;
  top:20px;
  right:20px;

}

@font-face {
  font-family:'Rubik';
  font-weight:400;
  src: url('./assets/fonts/Rubik-Regular.ttf');
}
@font-face {
  font-family:'Rubik';
  font-weight:700;
  src: url('./assets/fonts/Rubik-Bold.ttf');
}
@font-face {
  font-family:'Rubik';
  font-weight:900;
  src: url('./assets/fonts/Rubik-Black.ttf');
}
@font-face {
  font-family:'Rubik';
  font-weight:300;
  src: url('./assets/fonts/Rubik-Light.ttf');
}
@font-face {
  font-family:'Rubik';
  font-weight:500;
  src: url('./assets/fonts/Rubik-Medium.ttf');
}
</style>
