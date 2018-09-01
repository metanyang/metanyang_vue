<template>
  <div class="pageWrap">
    <sheltersection-stepcommon>
      <slot><span class="point2">고양시 유기동물 보호소</span> 님, 안녕하세요.<br>새로 들어온 후원이 <span class="point1">3</span>건 있습니다.</slot>
    </sheltersection-stepcommon>
    <div class="boxWrap" v-show="this.$store.getters.getShelterStep === 1">
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
