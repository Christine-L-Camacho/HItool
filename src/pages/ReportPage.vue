<template>
  <BreadCrumb pageName="Report" pageUrl="/report"></BreadCrumb>

  <div class="SiteContainer">
    <div class="standard-grid">
      <div class="float-parent-element">
        <div class="grid-filter__buttons float-child-element-right">
          <button @click="generatePdf()">Download PDF</button>
        </div>
      </div>
      <h3 class="h3c">Health Inequalities Self-Assessment Tool</h3>
      
      <br>
      <h2>Report</h2>
      <h3>Recommended Objectives</h3>
      <table class="table--hide-side-lines" id="dom1">
        <tbody>
          <tr>
            <td colspan="2">1 - Building public health capacity & capability <MaturityBadge :maturityText="getMaturity(1)"/></td>
          </tr>
          <tr v-for="object of getSuggestedObjectives('1')" :key="object">
            <td>{{ object.ref }}</td>
            <td><b style="color: #273591;">{{ objectiveOwners(object.ref) }}:</b> {{ object.objective }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <table class="table--hide-side-lines" id="dom2">
        <tbody>
          <tr>
            <td colspan="2">2 - Data, insight, evidence and evaluation <MaturityBadge :maturityText="getMaturity(2)"/></td>
          </tr>
          <tr v-for="object of getSuggestedObjectives('2')" :key="object">
            <td>{{ object.ref }}</td>
            <td><b style="color: #273591;">{{ objectiveOwners(object.ref) }}:</b> {{ object.objective }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <table class="table--hide-side-lines" id="dom3">
        <tbody>
          <tr>
            <td colspan="2">3 - Strategic leadership & accountability <MaturityBadge :maturityText="getMaturity(3)"/></td>
          </tr>
          <tr v-for="object of getSuggestedObjectives('3')" :key="object">
            <td>{{ object.ref }}</td>
            <td><b style="color: #273591;">{{ objectiveOwners(object.ref) }}:</b> {{ object.objective }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <table class="table--hide-side-lines" id="dom4">
        <tbody>
          <tr>
            <td colspan="2">4 - System partnerships <MaturityBadge :maturityText="getMaturity(4)"/></td>
          </tr>
          <tr v-for="object of getSuggestedObjectives('4')" :key="object">
            <td>{{ object.ref }}</td>
            <td><b style="color: #273591;">{{ objectiveOwners(object.ref) }}:</b> {{ object.objective }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <div class="float-parent-element">
        <div class="grid-filter__buttons float-child-element">
          <router-link to="/scores" style="outline: 0;"><button>Scoring</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { store } from '../store.js'
  import BreadCrumb from '../components/BreadCrumb.vue';
  import MaturityBadge from '../components/MaturityBadge.vue';
  import objectivesdata from '../objectives.js'
  import jsPDF from 'jspdf'
  import 'jspdf-autotable'
  export default {
    name: 'ReportPage',
    components: { BreadCrumb, MaturityBadge },
    data() {
      return {
        store,
        mapping: objectivesdata.linkedObjectives,
        objectives: objectivesdata.objectives,
        obj_owners: objectivesdata.objective_owners,
        minimum_objectives: {"1": ["3.5", "4.7"], "2": ["3.9", "9.3"], "3": ["3.4", "6.1", ], "4": ["9.8"]},
      }
    },
    methods: {
      mappedObjectives: function (section, question) {
        var ref = section + "." + question.ref;
        return this.mapping[ref];
      },
      getSuggestedObjectives: function (section) {
        var matched = this.linkedObjectives(section)
        if (matched.length === 0) {
          for (var o of this.minimum_objectives[section]) {
            matched.push(this.objectives.find(({ ref }) => ref === o));
          }
        }
        // // Now look at individual questions
        // if (section === '3') {
        //   if (this.store.scores['3']['2'] != '2') {
        //     matched.push(this.objectives.find(({ ref }) => ref === '3.4'));
        //   }
        // }
        // matched.pop(this.objectives.find(({ ref }) => ref === '3.4'));



        var matchedSorted = this.customSort(matched)
        return matchedSorted
      },
      linkedObjectives: function (section) {
        var domainObjectivesRefs = [];
        var domainObjectives = []
        for (var objref of Object.keys(this.mapping)) {
          if (objref.split(".")[0] === section) {
            for (var obj of this.mapping[objref]) {
              domainObjectivesRefs.push(obj);
              domainObjectives.push(this.objectives.find(({ ref }) => ref === obj));
            }
          }
        }
        var sectionMaturity = this.getMaturity(section)
        var maturityFilter = "0";
        if (sectionMaturity === "Not Started") {
          maturityFilter = "0";
        } else if (sectionMaturity === "Emerging") {
          maturityFilter = "1";
        } else if (sectionMaturity === "Developing") {
          maturityFilter = "2";
        } else if (sectionMaturity === "Maturing") {
          maturityFilter = "3";
        } else if (sectionMaturity === "Thriving") {
          maturityFilter = "3";
        }
        var filteredObjectives = []
        if (maturityFilter != "0") {
          for (var object of domainObjectives) {
            if (object.maturity === maturityFilter) {
              filteredObjectives.push(object)
            }
          }
        }
        return filteredObjectives
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
        // Custom sorting function
        function compareRefs(a, b) {
          const [aDomain, aIndex] = a.ref.split('.').map(Number);
          const [bDomain, bIndex] = b.ref.split('.').map(Number);

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
</style>