<template>
  <div class="pageWrap">
    <sheltersection-stepcommon>
      <slot>후원자님께 메세지를 전송하였습니다.</slot>
    </sheltersection-stepcommon>
    <sheltersection-stepbuttons></sheltersection-stepbuttons>
  </div>
</template>
<script>
import ShelterSectionStepCommon from '@/components/shelter/ShelterSectionStepCommon'
import ShelterSectionStepButtons from '@/components/shelter/ShelterSectionStepButtons'
export default {
  components: {
    'sheltersection-stepcommon': ShelterSectionStepCommon,
    'sheltersection-stepbuttons': ShelterSectionStepButtons
  }
}
</script>
