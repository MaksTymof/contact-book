<template>
  <div class="contactinfo-container">
    <h1>This is Contact Info Page</h1>
    <h3>{{ $route.params.name }}</h3>
    <p>{{ $route.params.phoneNum }}</p>
    <p>{{ $route.params.email}}</p>
  </div>
</template>
<script>
</script>
<style lang='sass'>
.contactinfo-container
  color: #cbc715
</style>
