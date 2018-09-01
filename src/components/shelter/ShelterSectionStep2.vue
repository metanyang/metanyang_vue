<template>
  <div class="pageWrap">
    <sheltersection-stepcommon></sheltersection-stepcommon>
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
