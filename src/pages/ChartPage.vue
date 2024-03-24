<template>
    <BarChart :data="chartData"/>
  </template>
  
  <script>
  import BarChart from '../components/BarChart'
  
  export default {
    name: 'ChartPage',
    components: { BarChart },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March'],
                datasets: [{ data: [40, 20, 12] }]
            },
        }

    }
  }
  </script>