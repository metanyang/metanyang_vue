<template>
  <section>
    <div class="mainWrap">
      <main-section1></main-section1>
      <main-section2></main-section2>
      <main-section3></main-section3>
      <main-section4></main-section4>
    </div>
  </section>
</template>

<script>
import MainSection1 from '@/components/main/MainSection1'
import MainSection2 from '@/components/main/MainSection2'
import MainSection3 from '@/components/main/MainSection3'
import MainSection4 from '@/components/main/MainSection4'

export default {
  components: {
    'main-section1': MainSection1,
    'main-section2': MainSection2,
    'main-section3': MainSection3,
    'main-section4': MainSection4
  }
}
</script>

<style>

</style>
