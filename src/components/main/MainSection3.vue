<template>
  <div class="section3">
    <carousel :perPage=1 :autoplay=true>
      <slide>
        <img src="../../assets/img/1.jpg" title="Funky roots">
      </slide>
      <slide>
        <img src="../../assets/img/2.jpg" title="Funky roots">
      </slide>
      <slide>
        <img src="../../assets/img/3.jpg" title="Funky roots">
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style>

</style>
