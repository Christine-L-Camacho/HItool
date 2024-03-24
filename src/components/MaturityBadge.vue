<template>
  <span :class="getDesign" >{{ maturityText }}</span>
</template>

<script>
export default {
  name: 'MaturityBadge',
  props: ['maturityText'],
  data() {
    return {
    }
  },
  computed: {
    getDesign() {
      if (this.maturityText === 'Not Started') {
        return 'badge'
      }
      return 'badge ' + this.maturityText 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.badge {
  padding: 2px 8px;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  float: right;
}
.Emerging {
  background-color: #ffffff;
  color: #212529;
  border: 1px solid #212529;
}
.Developing {
  background-color: #cd7f32;
  color: #212529;
  text-shadow: 1px 1px 0 #cca783be;
  border: 1px solid #aa6a2a;
}
.Maturing {
  background-color: #c0c0c0;
  color: #212529;
  text-shadow: 1px 1px 0 #ffffffbe;
  border: 1px solid #a7a7a7;
}
.Thriving {
  background-color: #ffc107;
  color: #212529;
  text-shadow: 1px 1px 0 #ffffffbe;
  border: 1px solid #c49405;
}
</style>
