<template>
    <!-- <div class="SiteBanner" style="background-image:url(https://nhsproviders.org/media/689135/web-hero-transformation-4.png);">
      <a class="">
        <div class="SiteContainer">
          <div class="SiteBanner-inner">
              <h1>Health Inequalities Self-Assessment Tool</h1>
          </div>
        </div>
      </a>
    </div> -->

   <!-- <BreadCrumb pageName="Instructions" pageUrl="/instructions"></BreadCrumb> -->

    <div class="SiteContainer">
      <div class="standard-grid">
        <h2 class="instructions">Instructions</h2>
        <br>
        <p>
          This self-assessment tool is designed to be used alongside the Health Inequalities Objectives for NHS board members guide. The tool contains 25 questions across 4 domains:
        </p>
  
        <ul>
          <li>Building public health capacity and capability</li>
          <li>Data insight, evidence and evaluation</li>
          <li>Strategic leadership and accountability</li>
          <li>Systems partnerships</li>
        </ul>
        <p>
          When you are ready to start, click the 'Start Assessment' button below and answer each question as either 'yes', 'no' or 'partial'. You may choose 'partial' instead of 'yes' if you have begun this work, e.g. with one staff group or as a one-off event, but it is not yet embedded in the Trust.
        </p>
        <p>
          The tool will provide a score and maturity rating for your Trust's position in each of these domains.
        </p>
        <br>
        <table class="table--hide-side-lines">
          <tbody>
            <tr>
              <td>Percentage</td>
              <td>Maturity Rating</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Not started</td>
            </tr>
            <tr>
              <td>1-24</td>
              <td>Emerging</td>
            </tr>
            <tr>
              <td>25-49</td>
              <td>Developing</td>
            </tr>
            <tr>
              <td>50-74</td>
              <td>Maturing</td>
            </tr>
            <tr>
              <td>75-100</td>
              <td>Thriving</td>
            </tr>
          </tbody>
        </table>
        <br>
        <p>
          When you have completed your answers, click on the 'Scores' button. The 'Reports' section gives bespoke suggestions for which health inequalities objectives your trust may wish to choose based on your responses.
        </p>
        
        <br>
        <div>
              <router-link to="/domain1" style="outline: 0;"><button class="btn-primary">Start Assessment</button></router-link>
        </div>
      </div>
    </div>
</template>
  
  <script>
  // import BreadCrumb from '../components/BreadCrumb.vue';
  export default {
      name: 'instructionsPage',
      // components: { BreadCrumb }
  }
  </script>

<style scoped>
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

.instructions {
    font-family: "Frutiger LT W01_65 Bold1475746", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #005eb8;
    display: inline-block;
    text-decoration: none;
    margin-bottom: 15px;
}
</style>