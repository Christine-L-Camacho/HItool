<template>
  <div class="SiteContainer">
    <div class="standard-grid">
      <h2 class="customheader">Scores</h2>
      <table class="table--hide-side-lines">
        <tbody>
          <tr>
            <td>Theme</td>
            <td>Score</td>
            <td>Percentage Complete</td>
            <td>Maturity Level</td>
          </tr>
          <tr>
            <td>1 - Building public health capacity & capability</td>
            <td>{{ sectionScore('1') }}</td>
            <td>{{ sectionPercent('1') }}%</td>
            <td>{{ getMaturity('1') }}</td>
          </tr>
          <tr>
            <td>2 - Data, insight, evidence and evaluation</td>
            <td>{{ sectionScore('2') }}</td>
            <td>{{ sectionPercent('2') }}%</td>
            <td>{{ getMaturity('2') }}</td>
          </tr>
          <tr>
            <td>3 - Strategic leadership & accountability</td>
            <td>{{ sectionScore('3') }}</td>
            <td>{{ sectionPercent('3') }}%</td>
            <td>{{ getMaturity('3') }}</td>
          </tr>
          <tr>
            <td>4 - System partnerships</td>
            <td>{{ sectionScore('4') }}</td>
            <td>{{ sectionPercent('4') }}%</td>
            <td>{{ getMaturity('4') }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <div class="float-parent-element">
        <div class="grid-filter__buttons float-child-element">
          <router-link to="/section4" style="outline: 0;"><button class="btn-primary">Section 4</button></router-link>
        </div>
        <div class="grid-filter__buttons float-child-element-right">
          <router-link to="/report2" style="outline: 0;"><button class="btn-primary">Report</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { store } from '../store.js'
  export default {
    name: 'ScoresPage',
    data() {
      return {
        store,
      }
    },
    methods: {
      sectionScore: function(section) {
        var total = 0;
        for (var question in this.store.scores[section]) {
          var score = this.store.scores[section][question]
          if (score != '') {
            total += parseInt(score);
          }
        }
        return total
      },
      sectionPercent: function(section) {
        var score = this.sectionScore(section);
        var numquestions = this.store.questions['section'+section].length
        var maxScore = numquestions * 2;
        var percentage = (score/maxScore) * 100
        console.log( numquestions, maxScore, percentage)
        return Math.round(percentage)
      },
      getMaturity: function(section) {
        var percent = this.sectionPercent(section);
        if (percent === 0) {
          return "Not Started";
        } else if (percent < 25) {
          return "Emerging";
        } else if (percent < 50) {
          return "Developing";
        } else if (percent < 75) {
          return "Maturing";
        } else {
          return "Thriving";
        }
      }
  },
  }
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

table {
    margin: 10px;
    margin-bottom: 40px;
    border-spacing: 0;
    width: 90%;
    font-size: 1.3125rem;
}

table td,table th {
    padding: .5em;
    border: 1px solid #ced8dd
}

table th,table tr:first-child {
    border-bottom: 2px solid;
    border-color: #005EB8;
    font-weight: 700
}

table th>td,table tr:first-child>td {
    border: none
}

table h2 {
    margin: 0
}

table tbody {
    border-bottom: 2px solid;
    border-color: #005EB8
}

.table--hide-top-line.table--no-heading tbody tr:first-child {
    border-top: 1px solid #ced8dd
}

.table--hide-top-line tbody tr:first-child {
    border-bottom: 0;
    border-top: 0
}

.table--hide-side-lines tbody tr td:first-child {
    border-left: 0
}

.table--hide-side-lines tbody tr td:last-child {
    border-right: 0
}

.table--hide-inner-vertical-lines tbody tr td {
    border-left-width: 0;
    border-right-width: 0
}

.table--hide-inner-vertical-lines tbody tr td:first-child {
    border-left-width: 1px
}

.table--hide-inner-vertical-lines tbody tr td:last-child {
    border-right-width: 1px
}

.table--hide-bottom-line tbody {
    border-bottom: 0
}

.table--no-heading tr:first-child {
    border-top: 2px solid;
    border-color: inherit;
    border-bottom: 1px solid #ced8dd
}

.table--no-heading tr:first-child td {
    border: 1px solid #ced8dd;
    font-weight: 400
}
.customheader {
    font-family: "Frutiger LT W01_65 Bold1475746", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #005eb8;
    display: inline-block;
    text-decoration: none;
    margin-bottom: 15px;
}
</style>