<template>
    <div class="SiteContainer">
        <div class="standard-grid">
            <QuestionSection sect="2" theme="2 - Data, insight, evidence and evaluation"
                :questions="store.questions.section2" />
        </div>
        <div class="float-parent-element">
            <div class="grid-filter__buttons float-child-element">
                <router-link to="/domain1" style="outline: 0;"><button class="btn-primary">Domain 1</button></router-link>
            </div>
            <div class="grid-filter__buttons float-child-element-right">
                <router-link to="/domain3" style="outline: 0;"><button class="btn-primary">Domain 3</button></router-link>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import { store } from '../store.js'
  import QuestionSection from '../components/QuestionSection.vue';
  
  export default {
    name: 'Section2Page',
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
