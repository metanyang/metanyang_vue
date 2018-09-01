<template>
  <div class="btnWrap">
    <div class="btn" v-show="this.$store.getters.getDonateStep > 1">
      <a class="white" href="#" @click="prevStep">이전</a>
    </div>
    <div class="btn">
      <a href="#" @click="nextStep">다음</a>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { DONATE_PREV_STEP, DONATE_NEXT_STEP } from '@/store/actions'
export default {
  methods: {
    ...mapMutations(
      {
        prevStep: DONATE_PREV_STEP,
        nextStep: DONATE_NEXT_STEP
      }
    )
  }
}
</script>

<style>

</style>
