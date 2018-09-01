<template>
  <div class="pageWrap">
    <donatesection-stepcommon>
      <slot>
        후원이 완료되었습니다! <br/>
        유기 동물을 위해 행동해주셔서 감사합니다.
      </slot>
    </donatesection-stepcommon>
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
