import { createRouter, createWebHistory } from 'vue-router';

import ChartPage from './pages/ChartPage.vue';
import instructionsPage from './pages/instructionsPage.vue'
import Section1Page from './pages/Section1Page.vue'
import Section2Page from './pages/Section2Page.vue'
import Section3Page from './pages/Section3Page.vue'
import Section4Page from './pages/Section4Page.vue'
import ScoresPage from './pages/ScoresPage.vue'
import ReportPage from './pages/ReportPage.vue'
import ListQuestionsAndObjectives from './pages/ListQuestionsAndObjectives.vue'
import PdfPage from './pages/PdfPage.vue'
import ReportPage2 from './pages/ReportPage2.vue'
import CodedScoresPage from './pages/CodedScoresPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
  {
    path: '/',
    redirect: '/instructions',
  },
  {
    path: '/chart',
    components: {default: ChartPage},
  },
  {
    path: '/instructions',
    components: {default: instructionsPage},
  },
  {
    path: '/domain1',
    components: {default: Section1Page},
  },
  {
    path: '/domain2',
    components: {default: Section2Page},
  },
  {
    path: '/domain3',
    components: {default: Section3Page},
  },
  {
    path: '/domain4',
    components: {default: Section4Page},
  },
  {
    path: '/scores',
    components: {default: ScoresPage},
  },
  {
    path: '/report',
    components: {default: ReportPage},
  },
  {
    path: '/list',
    components: {default: ListQuestionsAndObjectives},
  },
  {
    path: '/pdf',
    components: {default: PdfPage},
  },
  {
    path: '/report2',
    components: {default: ReportPage2},
  },
  {
    path: '/codes',
    components: {default: CodedScoresPage},
  },
  ],
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;