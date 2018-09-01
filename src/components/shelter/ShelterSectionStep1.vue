<template>
  <div class="pageWrap">
    <sheltersection-stepcommon>
      <slot>후원을 결정해주셔서 감사합니다.</slot>
    </sheltersection-stepcommon>
    <div class="boxWrap" v-show="this.$store.getters.getDonateStep === 1">
    </div>
    <sheltersection-stepbuttons></sheltersection-stepbuttons>
  </div>
</template>

<script>
import ShelterSectionStepCommon from '@/components/shelter/ShelterSectionStepCommon'
import ShelterSectionStepButtons from '@/components/shelter/ShelterSectionStepButtons'
import { GET_GOODS_REQUEST } from '@/store/actions'
export default {
  components: {
    'sheltersection-stepcommon': ShelterSectionStepCommon,
    'sheltersection-stepbuttons': ShelterSectionStepButtons
  },
  created () {
    this.$store.dispatch(GET_GOODS_REQUEST)
      .then(() => {
        console.log('success')
      })
  }
}
</script>

<style>

</style>
