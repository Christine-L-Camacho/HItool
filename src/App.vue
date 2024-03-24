<template>
  <!-- <div class="flex-wrapper"> -->

  <header class="site-header" role="banner">
    <div class="container1 relative">
      <div class="row">
        <div class="col no-bp-col-6 bpxs-col-3 bps-col-2">
          <div class="site-logo">
          </div>
        </div>
      

        <ul class="site-nav__menu mb-0">
          <li><span class="title" >Health Inequalities Self-Assessment Tool</span></li>
        </ul>

      </div><!-- /row -->

    </div>
  </header>

  <main class="main-content group container1 clearfix">
    <NavBar></NavBar>


  <div class="col bpm-col-9--split-lrg right">
    <div class="rich-text">

      <div class="page-intro" id="page-intro">
        <router-view></router-view>
        
      </div>
      
    </div>
    
  </div>


</main>


  

  <footer class="site-footer">
      <div class="container">

      </div>
    </footer>
</template>

<script>
import { store } from './store.js'
import questionsections from './questions.js'
import NavBar from './components/NavBar.vue'
import "./styles.css"

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      store,
      section1: questionsections.section1,
      section1TotalScore: 0,
      section1Scores: {},
      section2: questionsections.section2,
      section2TotalScore: 0,
      section2Scores: {},
    };
  },
  mounted() {
    store.questions = questionsections;
  },
  methods: {
  },
}
</script>

<style>

@media only screen and (min-width: 60em) {

.col,
.sub-menu__item,
.site-nav__sub-menu {
    padding-left: 30px;
    padding-right: 80px
}
}

.title {
  font-size: 2.25rem;
  line-height: 1.125em;
  margin-right: 30px;
  padding-left: 40px;
  padding-top: 20px;
  font-family: "Frutiger LT W01_65 Bold1475746", Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}
.makebold {
  font-family: "Frutiger LT W01_65 Bold1475746", Arial Black, Helvetica, sans-serif;
}
/* Styles added to push footer to the base of the screen */
.flex-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
}
.footer {
  margin-top: auto;
}

.site-logo {
margin-left: 30px;
    background-image: url('../public/images/favicon.png');
    background-size: auto 41px;
    background-position: top left;
    background-repeat: no-repeat;
    background-color: transparent
}
</style>
