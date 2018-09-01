<template>
  <div class="btnWrap">
    <div class="btn" v-show="this.$store.getters.getDonateStep > 1 && this.$store.getters.getDonateStep !== 4">
      <a class="white" href="#" @click="prevStep">이전</a>
    </div>
    <div class="btn">
      <a href="#" @click="nextStep" v-show="this.$store.getters.getDonateStep < 3">다음</a>
    </div>
    <div class="btn">
      <a href="#" @click="nextStep" v-show="this.$store.getters.getDonateStep === 3">후원하기</a>
    </div>
    <div class="btn" v-show="this.$store.getters.getDonateStep === 4">
      <router-link to="main" :class="{ white: true }" @click="initStep">메인으로</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { DONATE_PREV_STEP, DONATE_NEXT_STEP, DONATE_INIT_STEP } from '@/store/actions'
export default {
  methods: {
    ...mapMutations(
      {
        initStep: DONATE_INIT_STEP,
        prevStep: DONATE_PREV_STEP,
        nextStep: DONATE_NEXT_STEP
      }
    )
  }
}
</script>

<style>

</style>
