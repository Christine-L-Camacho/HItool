<template>

  <div class="SiteContainer">
    <div class="standard-grid">

      <div class="float-parent-element">
        <div class="grid-filter__buttons float-child-element-right">
          <router-link to="/pdf" style="outline: 0;"><button class="btn-primary">Download PDF</button></router-link>
        </div>
      </div>

      <h2 class="customheader">Report</h2>
      <br>
      <h3 class="customheader">Recommended Objectives</h3>
      <table class="table--hide-side-lines" id="dom1">
        <tbody>
          <tr>
            <td colspan="2">1 - Building public health capacity & capability
              <MaturityBadge :maturityText="getMaturity(1)" />
            </td>
          </tr>
          <tr v-for="objectiveRef of getSuggestedObjectives('1')" :key="objectiveRef">
            <td>{{ objectiveRef }}</td>
            <td><b style="color: #273591;">{{ objectiveOwners(objectiveRef) }}:</b> {{
              getObjective(objectiveRef).objective }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <table class="table--hide-side-lines" id="dom2">
        <tbody>
          <tr>
            <td colspan="2">2 - Data, insight, evidence and evaluation
              <MaturityBadge :maturityText="getMaturity(2)" />
            </td>
          </tr>
          <tr v-for="objectiveRef of getSuggestedObjectives('2')" :key="objectiveRef">
            <td>{{ objectiveRef }}</td>
            <td><b style="color: #273591;">{{ objectiveOwners(objectiveRef) }}:</b> {{
              getObjective(objectiveRef).objective }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <table class="table--hide-side-lines" id="dom3">
        <tbody>
          <tr>
            <td colspan="2">3 - Strategic leadership & accountability
              <MaturityBadge :maturityText="getMaturity(3)" />
            </td>
          </tr>
          <tr v-for="objectiveRef of getSuggestedObjectives('3')" :key="objectiveRef">
            <td>{{ objectiveRef }}</td>
            <td><b style="color: #273591;">{{ objectiveOwners(objectiveRef) }}:</b> {{
              getObjective(objectiveRef).objective }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <table class="table--hide-side-lines" id="dom4">
        <tbody>
          <tr>
            <td colspan="2">4 - System partnerships
              <MaturityBadge :maturityText="getMaturity(4)" />
            </td>
          </tr>
          <tr v-for="objectiveRef of getSuggestedObjectives('4')" :key="objectiveRef">
            <td>{{ objectiveRef }}</td>
            <td><b style="color: #273591;">{{ objectiveOwners(objectiveRef) }}:</b> {{
              getObjective(objectiveRef).objective }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <div class="float-parent-element">
        <div class="grid-filter__buttons float-child-element">
          <router-link to="/scores" style="outline: 0;"><button class="btn-primary">Scoring</button></router-link>
        </div>
        <div class="grid-filter__buttons float-child-element-right">
          <router-link to="/pdf" style="outline: 0;"><button class="btn-primary">Download PDF</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { store } from '../store.js'
  import MaturityBadge from '../components/MaturityBadge.vue';
  import objectivesdata from '../objectives.js'
  import jsPDF from 'jspdf'
  import 'jspdf-autotable'
  export default {
    name: 'ReportPage2',
    components: { MaturityBadge },
    data() {
      return {
        store,
        mapping: objectivesdata.linkedObjectives,
        objectives: objectivesdata.objectives,
        obj_owners: objectivesdata.objective_owners,
        minimum_objectives: objectivesdata.minimum_objectives,
        removeIfYes: objectivesdata.removeIfYes,
      }
    },
    methods: {
      getSuggestedObjectives: function(domain) {
        var objectivesList = []
        if (this.getMaturity(domain) === 'Not Started') {
          objectivesList = this.getMinimumObjectives(domain)
        } else {
          var linkedObjectives = this.getLinkedObjectives(domain)
          console.log('linked objectives', linkedObjectives)
          var maturityFilter = this.getMaturityFilter(domain)
          console.log('maturityFilter', maturityFilter)
          var filteredObjectives = this.filterByDomainMaturity(linkedObjectives , maturityFilter)
          objectivesList = filteredObjectives
          console.log('filtered', filteredObjectives)
        }
        var withAddedObjectives = this.addObjectivesBasedOnQuestionsAnswered(objectivesList, domain)
        var withRemovedObjectives = this.removeObjectivesBasedOnQuestionsAnswered(withAddedObjectives, domain)
        console.log(withRemovedObjectives)
        var sorted = this.customSort(withRemovedObjectives)
        console.log('sorted', sorted)
        return sorted
      },
      getLinkedObjectives: function(domain) {
        var linkedObjectives = [];
        for (var domainRef of Object.keys(this.mapping)) {
          if (domainRef.split(".")[0] === domain) {
            for (var objectiveRef of this.mapping[domainRef]) {
              linkedObjectives.push(objectiveRef);
            }
          }
        }
        return linkedObjectives
      },
      getMinimumObjectives: function(domain) {
        var minObjectives = []
        for (var item of this.minimum_objectives[domain]) {
          minObjectives.push(item)
          }
          return minObjectives
      },
      getMaturityFilter: function(domain) {
        var domainMaturity = this.getMaturity(domain)
        var maturityFilter = "0";
        if (domainMaturity === "Not Started") {
          maturityFilter = "0";
        } else if (domainMaturity === "Emerging") {
          maturityFilter = "1";
        } else if (domainMaturity === "Developing") {
          maturityFilter = "2";
        } else if (domainMaturity === "Maturing") {
          maturityFilter = "3";
        } else if (domainMaturity === "Thriving") {
          maturityFilter = "3";
        }
        return maturityFilter
      },
      filterByDomainMaturity: function(domainObjectives, maturityFilter) {
        var filteredObjectives = []
        if (maturityFilter != "0") {
          for (var objective of domainObjectives) {
            if (this.getObjective(objective).maturity === maturityFilter) {
              filteredObjectives.push(objective)
            }
          }
        }
        return filteredObjectives
      },
      addObjectivesBasedOnQuestionsAnswered: function(domainObjectives, domain) {
        // Now look at individual questions for objectives to add
        var addedObjectives = []
        if (domain === '3') {
          if (this.store.scores['3']['2'] != '2') {
            addedObjectives.push('3.4');
          }
        }
        return domainObjectives.concat(addedObjectives)
      },
      removeObjectivesBasedOnQuestionsAnswered: function(domainObjectives, domain) {
        // Now look at individual questions for objectives to remove
        var objectivesSet = new Set(domainObjectives) // by converting to a Set we also remove duplicates

        for (var questNum in this.store.scores[domain]) {
          if (this.store.scores[domain][questNum] === '2') {
            for (var objective of this.removeIfYes[domain][questNum]) {
              console.log('based on answer, remove', questNum, objective)
              objectivesSet.delete(objective)
            }
          }
        }
        var asArray = Array.from(objectivesSet);
        console.log('objectivesSet at the end', asArray)
        return asArray
      },      
      objectiveOwners: function (obj_ref3) {
        return this.obj_owners[obj_ref3.split(".")[0]];
      },
      getObjective: function (obj_ref1) {
        return this.objectives.find(({ ref }) => ref === obj_ref1);
      },
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
      },
      customSort: function(array) {
        // Custom sorting function (for arrays of strings ["2.2", "3.5", etc])
        function compareRefs(a, b) {
          const [aDomain, aIndex] = a.split('.').map(Number);
          const [bDomain, bIndex] = b.split('.').map(Number);

          // Compare domains first
          if (aDomain !== bDomain) {
            return aDomain - bDomain;
          }

          // If domains are equal, compare index numbers
          return aIndex - bIndex;
        }

        // Sort the array using the custom sorting function
        array.sort(compareRefs);

        return array;
      },
      generatePdf() {
        var doc = new jsPDF();
        var text = "Health Inequalities Self Assessment Tool"
        doc.setFontSize(16)
        doc.text(text, 45, 20)
        doc.setFontSize(14)
        doc.setTextColor(100)
        doc.text("Recommended Objectives", 17, 37)

        doc.autoTable({ html: '#dom1', useCss: true, startY: 50 });
        doc.autoTable({ html: '#dom2', useCss: true, startY: doc.lastAutoTable.finalY + 10, });
        doc.autoTable({ html: '#dom3', useCss: true, startY: doc.lastAutoTable.finalY + 10, });
        doc.autoTable({ html: '#dom4', useCss: true, startY: doc.lastAutoTable.finalY + 10, });
        doc.save('Report.pdf')
      },
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
  border-top: 2px solid #005EB8;
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

ul {
list-style: none;
    padding: 0;
    margin: 0
}
li {
  position: relative;
  padding-left: 30px;
  margin: 8px 0;
  line-height: 26px;
  font-size: 1.3125rem;
}
 ul li:before {
    content: "";
    position: absolute;
    left: 0;
    width: 10px;
    height: 10px;
    margin-top: 10px;
    margin-right: 20px;
    background: #005EB8;
    border-radius: 100%
}
ul li:last-child {
    margin-bottom: 30px
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