<template>
  <nav class="BreadcrumbNav">
    <div class="BreadcrumbNav-container">
      <ul>
        <li class="BreadcrumbNav-item"><a href="https://nhsproviders.org">Home</a></li>
        <li class="BreadcrumbNav-item"><router-link to="/" style="outline: 0;">Health Inequalities
            Self-Assessment Tool</router-link>
        </li>
        <li class="BreadcrumbNav-item"><router-link :to="pageUrl" style="outline: 0;">{{ pageName }}</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    pageUrl: String,
    pageName: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
