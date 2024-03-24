<template>

  <div class="SiteContainer">
    <div class="standard-grid">
      <div>{{ store.scores }}</div>
      <button @click="codeDomain('1')">Code Domain 1</button>
      <div>{{ domain1Code }}</div>
    </div>
  </div>
</template>
  
  <script>
  import { store } from '../store.js'
  export default {
    name: 'CodedScoresPage',
    components: {  },
    data() {
      return {
        store,
        domain1Code: "",
        combinations: {
          uuu: "a",
          uun: "b",
          unu: "c",
          unn: "d",
          nnn: "e",

        }
      }
    },
    methods: {
      codeDomain(domain) {
        var domainScores = this.store.scores[domain]
        var scoresList = []
        for (var question of this.store.questions['section'+domain]) {
          var qref = question.ref
          console.log('out', domainScores[qref])
          console.log('question', qref)
          if (typeof(domainScores[qref]) === 'undefined') {
            console.log("None")
            scoresList.push("u")
          } else if (domainScores[qref] === '0') {
            console.log(domainScores[qref])
            scoresList.push("n")
          } else if (domainScores[qref] === '1') {
            scoresList.push("p")
          } else if (domainScores[qref] === '2') { 
            scoresList.push("y")
          } else {
            scoresList.push("error")
          }
        }
        this.domain1Code = scoresList
    }
  }
  }
      
</script>

<style scoped>

</style>