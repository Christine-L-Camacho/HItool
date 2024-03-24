<template>
  <!-- <BreadCrumb pageName="Section 1" pageUrl="/section1"></BreadCrumb> -->
  <div class="SiteContainer">
    <div class="standard-grid">
      <QuestionSection sect="1" theme="1 - Building public health capacity & capability"
        :questions="store.questions.section1" />
    </div>
    <div class="float-parent-element">
      <div class="grid-filter__buttons float-child-element-right">
        <router-link to="/domain2" style="outline: 0;"><button class="btn-primary">Domain 2</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js'
import QuestionSection from '../components/QuestionSection.vue';
// import BreadCrumb from '../components/BreadCrumb.vue';

export default {
  name: 'Section1Page',
  components: {
    QuestionSection,
    // BreadCrumb,
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