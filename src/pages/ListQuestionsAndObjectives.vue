<template>
    <div class="SiteContainer">
      <div class="standard-grid">
        <h3 class="h3c">List of Questions and Linked Objectives</h3>       
        <br>
        <h3>Section 1</h3>
        <template v-for="q in questions.section1" :key="q.ref">
        <table>
          <tbody>
            <tr>
              <td>1.{{ q.ref }}</td>
              <td>{{ q.question }}</td>
              <td>Maturity</td>
              <td>Theme</td>
            </tr>
            <tr v-for="objref in mappedObjectives('1', q)" :key="objref">
              <td>{{ objref }}</td>
              <td><span style="color: blueviolet;">{{ objectiveOwners(objref) }}</span> {{ getObjective(objref)['objective'] }}</td>
              <td>{{ getObjective(objref)['maturity'] }}</td>
              <td>{{ getObjective(objref)['theme'] }}</td>
            </tr>
          </tbody>
        </table>
        <br>
      </template>
      <h3>Section 2</h3>
      <template v-for="q in questions.section2" :key="q.ref">
        <table>
          <tbody>
            <tr>
              <td>2.{{ q.ref }}</td>
              <td>{{ q.question }}</td>
              <td>Maturity</td>
              <td>Theme</td>
            </tr>
            <tr v-for="objref in mappedObjectives('2', q)" :key="objref">
              <td>{{ objref }}</td>
              <td><span style="color: blueviolet;">{{ objectiveOwners(objref) }}</span> {{ getObjective(objref)['objective'] }}</td>
              <td>{{ getObjective(objref)['maturity'] }}</td>
              <td>{{ getObjective(objref)['theme'] }}</td>
            </tr>
          </tbody>
        </table>
        <br>
      </template>
      <h3>Section 3</h3>
      <template v-for="q in questions.section3" :key="q.ref">
        <table>
          <tbody>
            <tr>
              <td>3.{{ q.ref }}</td>
              <td>{{ q.question }}</td>
              <td>Maturity</td>
              <td>Theme</td>
            </tr>
            <tr v-for="objref in mappedObjectives('3', q)" :key="objref">
              <td>{{ objref }}</td>
              <td><span style="color: blueviolet;">{{ objectiveOwners(objref) }}</span> {{ getObjective(objref)['objective'] }}</td>
              <td>{{ getObjective(objref)['maturity'] }}</td>
              <td>{{ getObjective(objref)['theme'] }}</td>
            </tr>
          </tbody>
        </table>
        <br>
      </template>
      <h3>Section 4</h3>
      <template v-for="q in questions.section4" :key="q.ref">
        <table>
          <tbody>
            <tr>
              <td>4.{{ q.ref }}</td>
              <td>{{ q.question }}</td>
              <td>Maturity</td>
              <td>Theme</td>
            </tr>
            <tr v-for="objref in mappedObjectives('4', q)" :key="objref">
              <td>{{ objref }}</td>
              <td><span style="color: blueviolet;">{{ objectiveOwners(objref) }}</span> {{ getObjective(objref)['objective'] }}</td>
              <td>{{ getObjective(objref)['maturity'] }}</td>
              <td>{{ getObjective(objref)['theme'] }}</td>
            </tr>
          </tbody>
        </table>
        <br>
      </template>

      </div>
    </div>
  </template>
  
  <script>
  import questionsections from '../questions.js'
  import objectivesdata from '../objectives.js'
  export default {
    name: 'ListQuestionsAndObjectives',
    components: {},
    data() {
      return {
        questions: questionsections,
        obj_owners: objectivesdata.objective_owners,
        objectives: objectivesdata.objectives,
        mapping: objectivesdata.linkedObjectives,
        section1Scores: {},
        section2: questionsections.section2,
        section2TotalScore: 0,
        section2Scores: {},
      };
    },
    methods: {
      mappedObjectives: function (section, question) {
        var ref = section + "." + question.ref;
        return this.mapping[ref];
      },
      objectiveOwners: function (obj_ref) {
        return this.obj_owners[obj_ref.split(".")[0]];
      },
      getObjective: function (obj_ref) {
        return this.objectives.find(({ ref }) => ref === obj_ref);
      },
    },
  }
  </script>