<template>
  <div class="btnWrap">
    <div class="btn" v-show="this.$store.getters.getShelterStep > 1 && this.$store.getters.getShelterStep !== 4">
      <a class="white" href="#" @click="prevStep">이전</a>
    </div>
    <div class="btn">
      <a href="#" @click="nextStep" v-show="this.$store.getters.getShelterStep < 2">다음</a>
    </div>
    <div class="btn" v-show="this.$store.getters.getShelterStep === 3">
      <router-link to="main" :class="{ white: true }" @click="initStep">메인으로</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { SHELTER_PREV_STEP, SHELTER_NEXT_STEP, SHELTER_INIT_STEP } from '@/store/actions'
export default {
  methods: {
    ...mapMutations(
      {
        initStep: SHELTER_INIT_STEP,
        prevStep: SHELTER_PREV_STEP,
        nextStep: SHELTER_NEXT_STEP
      }
    )
  }
}
</script>

<style>

</style>
