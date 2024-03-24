<template>
    <div class="SiteContainer">
        <div class="standard-grid">
            <QuestionSection sect="3" theme="3 - Strategic leadership & accountability"
                :questions="store.questions.section3" disablePartialQ2='true' />
        </div>
        <div class="float-parent-element">
            <div class="grid-filter__buttons float-child-element">
                <router-link to="/domain2" style="outline: 0;"><button class="btn-primary">Domain 2</button></router-link>
            </div>
            <div class="grid-filter__buttons float-child-element-right">
                <router-link to="/domain4" style="outline: 0;"><button class="btn-primary">Domain 4</button></router-link>
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
