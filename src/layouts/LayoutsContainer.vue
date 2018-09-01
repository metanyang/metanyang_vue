<template>
  <div>
    <layouts-header></layouts-header>
    <router-view></router-view>
    <layouts-footer></layouts-footer>
  </div>
</template>

<script>
import LayoutsHeader from '@/layouts/LayoutsHeader'
import LayoutsFooter from '@/layouts/LayoutsFooter'

export default {
  components: {
    'layouts-header': LayoutsHeader,
    'layouts-footer': LayoutsFooter
  }
}
</script>

<style>

</style>
