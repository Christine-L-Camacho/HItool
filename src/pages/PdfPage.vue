<template>
  <template>
    <table class="table--hide-side-lines" id="scores">
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
    <table id="dom1title">
      <tr>
        <td>1 - Building public health capacity & capability</td>
        <td style="text-align: right;">{{getMaturity(1)}}</td>
      </tr>
    </table>
    <table class="table--hide-side-lines table--no-heading" id="dom1">
      <tbody>
        <tr v-for="objectiveRef of getSuggestedObjectives('1')" :key="objectiveRef">
          <td>{{ objectiveRef }}</td>
          <td><b style="color: #273591;">{{ objectiveOwners(objectiveRef) }}:</b> {{
            getObjective(objectiveRef).objective }}</td>
        </tr>
      </tbody>
    </table>

    <table id="dom2title">
      <tr>
        <td>2 - Data, insight, evidence and evaluation</td>
        <td style="text-align: right;">{{getMaturity(2)}}</td>
      </tr>
    </table>
    <table class="table--hide-side-lines table--no-heading" id="dom2">
      <tbody>
        <tr v-for="objectiveRef of getSuggestedObjectives('2')" :key="objectiveRef">
          <td>{{ objectiveRef }}</td>
          <td><b style="color: #273591;">{{ objectiveOwners(objectiveRef) }}:</b> {{
            getObjective(objectiveRef).objective }}</td>
        </tr>
      </tbody>
    </table>

    <table id="dom3title">
      <tr>
        <td>3 - Strategic leadership & accountability</td>
        <td style="text-align: right;">{{getMaturity(3)}}</td>
      </tr>
    </table>
    <table class="table--hide-side-lines table--no-heading" id="dom3">
      <tbody>
        <tr v-for="objectiveRef of getSuggestedObjectives('3')" :key="objectiveRef">
          <td>{{ objectiveRef }}</td>
          <td><b style="color: #273591;">{{ objectiveOwners(objectiveRef) }}:</b> {{
            getObjective(objectiveRef).objective }}</td>
        </tr>
      </tbody>
    </table>

    <table id="dom4title">
      <tr>
        <td>4 - System partnerships</td>
        <td style="text-align: right;">{{getMaturity(4)}}</td>
      </tr>
    </table>
    <table class="table--hide-side-lines table--no-heading" id="dom4">
      <tbody>
        <tr v-for="objectiveRef of getSuggestedObjectives('4')" :key="objectiveRef">
          <td>{{ objectiveRef }}</td>
          <td><b style="color: #273591;">{{ objectiveOwners(objectiveRef) }}:</b> {{
            getObjective(objectiveRef).objective }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table--hide-side-lines table--hide-inner-vertical-lines" id="answers1">
      <tbody>
        <tr>
          <td colspan="3">1 - Building public health capacity & capability</td>
        </tr>
        <tr v-for="quest in store.questions.section1" :key="quest.ref">
          <td>
            {{ quest.ref }}
          </td>
          <td>{{ quest.question }}</td>
          <td>
            {{ getAnswer(store.scores['1'][quest.ref]) }}
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table--hide-side-lines table--hide-inner-vertical-lines" id="answers2">
      <tbody>
        <tr>
          <td colspan="3">2 - Data, insight, evidence and evaluation</td>
        </tr>
        <tr v-for="quest in store.questions.section2" :key="quest.ref">
          <td>
            {{ quest.ref }}
          </td>
          <td>{{ quest.question }}</td>
          <td>
            {{ getAnswer(store.scores['2'][quest.ref]) }}
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table--hide-side-lines table--hide-inner-vertical-lines" id="answers3">
      <tbody>
        <tr>
          <td colspan="3">3 - Strategic leadership & accountability</td>
        </tr>
        <tr v-for="quest in store.questions.section3" :key="quest.ref">
          <td>
            {{ quest.ref }}
          </td>
          <td>{{ quest.question }}</td>
          <td>
            {{ getAnswer(store.scores['3'][quest.ref]) }}
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table--hide-side-lines table--hide-inner-vertical-lines" id="answers4">
      <tbody>
        <tr>
          <td colspan="3">4 - System partnerships</td>
        </tr>
        <tr v-for="quest in store.questions.section4" :key="quest.ref">
          <td>
            {{ quest.ref }}
          </td>
          <td>{{ quest.question }}</td>
          <td>
            {{ getAnswer(store.scores['4'][quest.ref]) }}
          </td>
        </tr>
      </tbody>
    </table>
  </template>

  <div class="SiteContainer">
    <div class="standard-grid">

      <div class="float-parent-element">
        <div class="grid-filter__buttons float-child-element-right">
          <a style="outline: 0;"><button class="btn-primary" @click="pdfDocObject.save('report.pdf')">Save PDF File</button></a>
        </div>
      </div>

      <PdfObject :url="pdfData" class="pdfobject-container" />

    </div>
  </div>


</template>
  
  <script>
  import jsPDF from 'jspdf'
  import 'jspdf-autotable'
  import { store } from '../store.js'
  import objectivesdata from '../objectives.js'
  export default {
    name: 'pdfPage',
    components: {  },
    data() {
      return {
        pdfDocObject: new jsPDF(),
        header: new jsPDF(),
        pdfData: null,
        trustName: "",
        typedTrustName: "",
        store,
        mapping: objectivesdata.linkedObjectives,
        objectives: objectivesdata.objectives,
        obj_owners: objectivesdata.objective_owners,
        minimum_objectives: objectivesdata.minimum_objectives,
        removeIfYes: objectivesdata.removeIfYes,
      }
    },
    mounted() {
    this.addTrust();
  },
    methods: {   
      addTitle() {
        this.pdfDocObject.setFontSize(16)
        this.pdfDocObject.text("Hello!", 45, 50)
        this.pdfData = this.pdfDocObject.output('datauristring');
      },
      addText() {
        this.pdfDocObject.setFontSize(12)
        this.pdfDocObject.text("Donkeys", 45, 60)
        this.pdfData = this.pdfDocObject.output('datauristring');
      },
      addTrust() {
        var sectionSpacing = 20;
        this.pdfDocObject.setFontSize(18)
        this.pdfDocObject.text(this.typedTrustName, 45, 20)
        // this.pdfDocObject.setFontSize(13)
        // this.pdfDocObject.setFont('Helvetica', 'bold')
        // this.pdfDocObject.setTextColor(39,53,145)
        // this.pdfDocObject.text(this.getMaturity(1), 170, 56, )
        this.pdfDocObject.setFontSize(18)
        this.pdfDocObject.setFont('Helvetica', 'bold')
        this.pdfDocObject.text("Health Inequalities Self Assessment Tool", 45, 20)
        this.pdfDocObject.setFontSize(15)
        this.pdfDocObject.setTextColor(100)

        this.pdfDocObject.text("Scoring", 16, 37)
        this.pdfDocObject.autoTable({ html: '#scores', useCss: true, startY: 45 });

        this.pdfDocObject.text("Recommended Objectives", 16, this.pdfDocObject.lastAutoTable.finalY + sectionSpacing + 10)
        this.pdfDocObject.autoTable({ html: '#dom1title', useCss: true, startY: this.pdfDocObject.lastAutoTable.finalY + sectionSpacing + 18 });
        this.pdfDocObject.autoTable({ html: '#dom1', useCss: true, startY: this.pdfDocObject.lastAutoTable.finalY + 3 });

        // this.pdfDocObject.text(this.getMaturity(2), 170, this.pdfDocObject.lastAutoTable.finalY + sectionSpacing + 6, )
        this.pdfDocObject.autoTable({ html: '#dom2title', useCss: true, startY: this.pdfDocObject.lastAutoTable.finalY + sectionSpacing });
        this.pdfDocObject.autoTable({ html: '#dom2', useCss: true, startY: this.pdfDocObject.lastAutoTable.finalY + 3 });

        // this.pdfDocObject.text(this.getMaturity(3), 170, this.pdfDocObject.lastAutoTable.finalY + sectionSpacing + 6, )
        this.pdfDocObject.autoTable({ html: '#dom3title', useCss: true, startY: this.pdfDocObject.lastAutoTable.finalY + sectionSpacing });
        this.pdfDocObject.autoTable({ html: '#dom3', useCss: true, startY: this.pdfDocObject.lastAutoTable.finalY + 3 });

        // this.pdfDocObject.text(this.getMaturity(4), 170, this.pdfDocObject.lastAutoTable.finalY + sectionSpacing + 6, )
        this.pdfDocObject.autoTable({ html: '#dom4title', useCss: true, startY: this.pdfDocObject.lastAutoTable.finalY + sectionSpacing });
        this.pdfDocObject.autoTable({ html: '#dom4', useCss: true, startY: this.pdfDocObject.lastAutoTable.finalY + 3 });

        this.pdfDocObject.autoTableAddPage()
        this.pdfDocObject.text("Your Answers", 16, 20)
        this.pdfDocObject.autoTable({ html: '#answers1', useCss: true, startY: 28 });
        this.pdfDocObject.autoTable({ html: '#answers2', useCss: true, startY: this.pdfDocObject.lastAutoTable.finalY + sectionSpacing });
        this.pdfDocObject.autoTable({ html: '#answers3', useCss: true, startY: this.pdfDocObject.lastAutoTable.finalY + sectionSpacing });
        this.pdfDocObject.autoTable({ html: '#answers4', useCss: true, startY: this.pdfDocObject.lastAutoTable.finalY + sectionSpacing });

        this.addFooters(this.pdfDocObject)

        this.pdfData = this.pdfDocObject.output('datauristring');
      },
      generatePdf() {
        var doc = new jsPDF();
        var text = "Health Inequalities Self Assessment Tool"
        doc.setFontSize(16)
        doc.text(text, 45, 20)
        doc.setFontSize(14)
        doc.setTextColor(100)
        doc.text("Recommended Objectives", 17, 37)

        // doc.autoTable({ html: '#dom1', useCss: true, startY: 50 });
        // doc.autoTable({ html: '#dom2', useCss: true, startY: doc.lastAutoTable.finalY + 10, });
        // doc.autoTable({ html: '#dom3', useCss: true, startY: doc.lastAutoTable.finalY + 10, });
        // doc.autoTable({ html: '#dom4', useCss: true, startY: doc.lastAutoTable.finalY + 10, });
        // doc.save('Report.pdf')
        this.pdfData = doc.output('datauristring');
      },
      addFooters(doc) {
        const pageCount = doc.internal.getNumberOfPages();
        var d = new Date();
        var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
        for (var i = 1; i <= pageCount; i++) {
          doc.setPage(i)
          doc.setFontSize(10);
          var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
          doc.text('Page ' + String(i) + ' of ' + pageCount, 15, pageHeight - 8);
          doc.text(datestring, 180, pageHeight - 8);
        }
      },
      getAnswer(score) {
        if (score === '2') {
          return 'Yes'
        } else if (score === '1') {
            return 'Partial'
        } else if (score === '0') {
          return 'No'
        } else {
          return 'Unanswered'
        }

      },
      downloadPdf() {
        this.pdfDocObject.save('pleb.pdf');
      },
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
    },
  }
  </script>

<style scoped>
.pdfobject-container {
  height: 75vh;
  width: 50vw;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}
.tim {
    th, tr:first-child {
        border-bottom: 2px solid;
        border-color: #5f2fb9;
        font-weight: bold;
    }
 }

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