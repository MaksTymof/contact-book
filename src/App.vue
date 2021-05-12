<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
padding: 0;
background: rgb(146,151,175);
background: linear-gradient(148deg, rgba(146,151,175,1) 1%, rgba(0,0,0,1) 90%);
background-repeat: no-repeat;
background-size: contain;
min-height: 100vh;
height: auto;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ccc;
  font-family: 'Roboto', sans-serif;
  padding: 35px 150px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ccc;

    &.router-link-exact-active {
      color: #59583b
    }
  }
}
</style>
