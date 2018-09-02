<template>
  <div class="pageWrap">
    <sheltersection-stepcommon>
      <slot>후원 물품을 무사히 수령하셨나요? <br>후원자님께 감사의 인사를 전해주세요.</slot>
    </sheltersection-stepcommon>
    <div v-show="this.$store.getters.getShelterStep === 2">
      <div class="donatorInfo">
        <span>{{this.$store.getters.getParams.name}} 님</span> | {{this.$store.getters.getParams.myAddress}} | {{this.$store.getters.getParams.goodName}} {{this.$store.getters.getParams.sCount}}개, {{this.$store.getters.getParams.sWeight}}kg 이상
      </div>
      <div class="memoWrap">
        <p>메모</p>
        <textarea name="meno" rows="8" cols="80" placeholder="메모를 입력해주세요"></textarea>

        <p>사진첨부</p>
        <div class="attachFile">
          <div class="wrap">
            <div class="txt" onclick="attach_file(); return false;">
              <img src="../../assets/img/attach.png"><span>파일을 업로드 해주세요.</span>
              <input type="text" id="file_name" value="" style="border:none;font-size:15px;display:none;"></div>
            <input type="file" id="attach_file" name="attach_file" value="" style="display:none;">
          </div>
        </div>
      </div>
    </div>
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
