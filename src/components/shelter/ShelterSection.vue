<template>
  <section>
    <div class="mainWrap">
      <sheltersection-step1 v-show="this.$store.getters.getShelterStep === 1"></sheltersection-step1>
    </div>
  </section>
</template>

<script>
import ShelterSectionStep1 from '@/components/shelter/ShelterSectionStep1'
import ShelterSectionStep2 from '@/components/shelter/ShelterSectionStep2'
import ShelterSectionStep3 from '@/components/shelter/ShelterSectionStep3'
import { SHELTER_INIT_STEP } from '@/store/actions'

export default {
  components: {
    'sheltersection-step1': ShelterSectionStep1,
    'sheltersection-step2': ShelterSectionStep2,
    'sheltersection-step3': ShelterSectionStep3
  },
  created () {
    if (this.$store.getters.getShelterStep > 1) {
      this.$store.commit(SHELTER_INIT_STEP)
    }
  }
}
</script>

<style>

</style>
