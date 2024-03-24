<template>
    <div class="SiteContainer">
        <div class="standard-grid">
            <QuestionSection sect="4" theme="4 - System Partnerships"
                :questions="store.questions.section4" />
        </div>
        <div class="float-parent-element">
            <div class="grid-filter__buttons float-child-element">
                <router-link to="/domain3" style="outline: 0;"><button class="btn-primary">Domain 3</button></router-link>
            </div>
            <div class="grid-filter__buttons float-child-element-right">
                <router-link to="/scores" style="outline: 0;"><button class="btn-primary">Scoring</button></router-link>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import { store } from '../store.js'
  import QuestionSection from '../components/QuestionSection.vue';
  
  export default {
    name: 'Section3Page',
    components: {
      QuestionSection,
    },
    data() {
      return {
        store,
      };
    },
  };
  </script>

<style scoped>
.float-parent-element { 
    width: 100%; 
} 
.float-child-element { 
    float: left; 
    width: 20%; 
}
.float-child-element-right { 
    float: right; 
    width: 20%; 
} 
</style>
