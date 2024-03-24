<template>
  <h3 class="customheader">Questions</h3>
  <br>
  <table class="table--hide-side-lines table--hide-inner-vertical-lines">
    <tbody>
    <tr>
      <td colspan="3">{{ theme }}</td>
    </tr>
    <tr v-for="quest in questions" :key="quest.ref">
      <td>
        {{ quest.ref }}
      </td>
      <td>{{ quest.question }}</td>
      <td>
        <RadioButtonGroup :sect=sect :q_num="quest.ref" v-model="store.scores[sect][quest.ref]" :showPartial="disablePartialQ2 && quest.ref === '2' ? false: true"/>
      </td>
    </tr>
  </tbody>
  </table>
</template>

<script>
import { store } from '../store.js'
import RadioButtonGroup from './RadioButtonGroup.vue';

export default {
    name: 'QuestionSection',
    props: {
      sect: String,
      theme: String,
      questions: Array,
      sectionChoices: Object,
      disablePartialQ2: Boolean,
    },
    data() {
    return {
        store,
    }
  },
    components: { RadioButtonGroup }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    margin: 10px 0;
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

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
}

.question {
    width: 75%;
}

.question-container {
    display: flex;
    align-items: left;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 10px;
    /* Add some space between question containers */
}

.radio-buttons {
    /* width: 25%; */
    display: flex;
    flex-direction: column;
    /* Set the direction to column to stack items vertically */
    align-items: flex-start;
    /* Align items to the right within the column */
    white-space: nowrap;
    /* Prevent label from wrapping to the next line */
}

input[type="radio"] {
    margin-right: 10px;
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