<template>
  <section>
    <div class="mainWrap">
      <donatesection-step1 v-show="this.$store.getters.getDonateStep === 1"></donatesection-step1>
      <donatesection-step2 v-show="this.$store.getters.getDonateStep === 2"></donatesection-step2>
      <donatesection-step3 v-show="this.$store.getters.getDonateStep === 3"></donatesection-step3>
    </div>
  </section>
</template>

<script>
import DonateSectionStep1 from '@/components/donate/DonateSectionStep1'
import DonateSectionStep2 from '@/components/donate/DonateSectionStep2'
import DonateSectionStep3 from '@/components/donate/DonateSectionStep3'
import { DONATE_INIT_STEP } from '@/store/actions'

export default {
  components: {
    'donatesection-step1': DonateSectionStep1,
    'donatesection-step2': DonateSectionStep2,
    'donatesection-step3': DonateSectionStep3
  },
  created () {
    if (this.$store.getters.getDonateStep === 4) {
      this.$store.commit(DONATE_INIT_STEP)
    }
  }
}
</script>

<style>

</style>
