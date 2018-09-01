<template>
  <div class="pageWrap">
    <donatesection-stepcommon>
      <slot>
        후원을 결정해주셔서 감사합니다.<br>어떤 물품을 후원해주시겠어요?
      </slot>
    </donatesection-stepcommon>
    <div class="boxWrap" v-show="this.$store.getters.getDonateStep === 1">
      <div class="box">
        <div class="info"><img src="../../assets/img/1.jpg" alt="물품사진1"></div>
        <div class="position">담요 및 이불</div>
      </div>
      <div class="box">
        <div class="info"><img src="../../assets/img/2.jpg" alt="물품사진2"></div>
        <div class="position">사료 및 간식</div>
      </div>
      <div class="box">
        <div class="info"><img src="../../assets/img/3.jpg" alt="물품사진3"></div>
        <div class="position">기타물품</div>
      </div>
    </div>
    <donatesection-stepbuttons></donatesection-stepbuttons>
  </div>
</template>

<script>
import DonateSectionStepCommon from '@/components/donate/DonateSectionStepCommon'
import DonateSectionStepButtons from '@/components/donate/DonateSectionStepButtons'

export default {
  components: {
    'donatesection-stepcommon': DonateSectionStepCommon,
    'donatesection-stepbuttons': DonateSectionStepButtons
  }
}
</script>

<style>

</style>
