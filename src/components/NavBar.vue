<template>
  
  <div class="col bps-col-12 bpm-col-9--split-sml">
    <Vue3StickySidebar class="sidebar" containerSelector=".container1" innerWrapperSelector='.sidebar__inner' topSpacing="20px">

<nav class="page-nav" >

  <h3 class="heading-tertiary makebold">Workflow</h3>

  <ol class="split-list">
    <li class="introduction">
      <router-link to="/instructions" style="outline: 0;" active-class="current-menu-item">Instructions</router-link>
    </li>
    <li><router-link to="/domain1" style="outline: 0;" active-class="current-menu-item">Questions - Domain 1</router-link></li>
    <li><router-link to="/domain2" style="outline: 0;" active-class="current-menu-item">Questions - Domain 2</router-link></li>
    <li><router-link to="/domain3" style="outline: 0;" active-class="current-menu-item">Questions - Domain 3</router-link></li>
    <li><router-link to="/domain4" style="outline: 0;" active-class="current-menu-item">Questions - Domain 4</router-link></li>
    <li><router-link to="/scores" style="outline: 0;" active-class="current-menu-item">Scoring</router-link></li>
    <li><router-link to="/report2" style="outline: 0;" active-class="current-menu-item">Report</router-link></li>
    <li><router-link to="/pdf" style="outline: 0;" active-class="current-menu-item">Download PDF</router-link></li>
  </ol>
</nav>

</Vue3StickySidebar>
</div>

</template>

<script>
import Vue3StickySidebar from "vue3-sticky-sidebar";

export default {
  name: 'NavBar',
  components: {
    Vue3StickySidebar
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    isActive() {
      if (this.isOpen === true) {
        return 'is-open'
      }
    }

  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.current-menu-item {
    color: #005eb8;
    font-weight: 600;
    text-decoration: none
}
/* a.router-link-active {
    font-weight: 600;
	color:#005EB8;
    border-color: #ecf0f2;
} */
</style>
