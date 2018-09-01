<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="sub"><slot></slot> </div>
    <div class="container">
      <ul class="progressbar">
          <li :class="{ active: this.$store.getters.getDonateStep > 0 }">물품 선택</li>
          <li :class="{ active: this.$store.getters.getDonateStep > 1 }">정보 입력</li>
          <li :class="{ active: this.$store.getters.getDonateStep > 2 }">정보 확인</li>
          <li :class="{ active: this.$store.getters.getDonateStep > 3 }">완료</li>
      </ul>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '후원하기'
    }
  }
}
</script>

<style>

</style>
