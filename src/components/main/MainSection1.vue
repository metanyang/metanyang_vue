<template>
  <div class="section section1">
    <div class="wrap">
      <div class="info">
        <div class="subIMainSection1nfo">함께, 따뜻하게</div>
        <div class="mainInfo">
          여러분의 도움으로 <br>
          <span class="bold"><span id="num_saved" class="point1">1920</span>마리의 유기동물</span>이<br>
          겨울을 따뜻하게 보냈습니다
        </div>
        <div class="btn">
            <router-link to="donate">기부하기</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountUp from 'countup.js'

export default {
  mounted () {
    const demo = new CountUp('num_saved', 0, 1920, 0, 1.5, { useEasing: true, useGrouping: true, separator: '' })
    if (!demo.error) {
      demo.start()
    }
  }
}
</script>

<style>

</style>
