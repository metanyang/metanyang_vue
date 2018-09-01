<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="sub"><slot></slot> </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '받은후원'
    }
  }
}
</script>

<style>

</style>
