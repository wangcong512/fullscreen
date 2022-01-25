<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <RootPanel>
      <div id="container">
        <router-view></router-view>
      </div>
    </RootPanel>
  </div>
</template>

<script>
  import RootPanel from "@/components/RootPanel";
  export default {
    name: 'App',
    mounted(){

    },
    components: {
      RootPanel
    },
    methods:{



    }
  }
</script>

<style>

  body {
    margin: 0px;
    height:100%;
    width:100%;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #0c1e2d;
    /*background-image: linear-gradient(to left, #0e296c 50%, #40af7b);!* 自右向左 *!*/
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  #appContainer{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #container{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
