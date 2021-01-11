<template>
  <div class="outer-wrapper">
    <Header />
    <div class="inner-wrapper">
      <div class="sidenav">
        <div></div>
        <div class="sidebar-element">
          <router-link :to="{name: 'Companies'}">
            <Companies />
          </router-link>
        </div>
        <div class="sidebar-element">
          <router-link :to="{name: 'Leads'}">
            <Leads />
          </router-link>
        </div>
        <!-- <div class="sidebar-element">
          <router-link :to="{name: 'Videos'}">
            <Videos />
          </router-link>
        </div> -->
        <!-- <div class="sidebar-element">
          <router-link :to="{name: 'Support'}">
            <Support />
          </router-link>
        </div> -->
      </div>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Companies from './components/sidenav/Companies'
import Leads from './components/sidenav/Leads'
// import Videos from './components/sidenav/Videos'
import Header from './components/site/Header'
  
  export default {
    name: 'App',
    components: {
      Companies,
      Leads,
      // Videos,
      Header
    },

    provide: {
      __randomId: function(length) {
        let result           = ''
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      },
    }
  }
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Open Sans', sans-serif;
/* font-family: 'Mukta', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

a:link, a:visited, a:hover, a:active {
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

h1 {
  font-weight: 600;
}

.outer-wrapper {
  display: grid;
  grid-template-rows: 70px auto;
  min-height: 100vh;
}

.inner-wrapper {
  display: grid;
  grid-template-columns: 180px auto;
  /* min-height: 100vh; */
}

.header {
  border-bottom: 1px solid silver;
}

.sidenav {
  display: grid;
  grid-template-rows: repeat(6, 50px);
  background-color:rgb(0,138,230);
  min-height: 100%;
}

html, body {
  min-height: 100vh !important;
}
</style>
