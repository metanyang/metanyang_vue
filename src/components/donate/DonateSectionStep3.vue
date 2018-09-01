<template>
  <div class="pageWrap">
    <donatesection-stepcommon :props-step=3>
      <slot>
        이제 마지막 단계입니다! <br/>
        작성하신 정보가 맞는지 확인해주세요.
      </slot>
    </donatesection-stepcommon>
    <div class="boxWrap">
      <div class="resultWrap">
        <div class="inner">
          <div class="detail">
            <p class="subject">성함</p>
            <p class="info">메타냥</p>
          </div>
          <div class="detail">
            <p class="subject">보내는 주소</p>
            <p class="info">서울시 강남구 강남강남강남</p>
          </div>
          <div class="detail">
            <p class="subject">보내는 분 메일주소</p>
            <p class="info">test@test.com</p>
          </div>
          <div class="detail">
            <p class="subject">보내시는 물품</p>
            <p class="info">담요 및 이불 2개, 5kg ~ 8kg</p>
          </div>
          <div class="detail">
            <p class="subject">보내실 보호소</p>
            <p class="info">청주 유기동물 보호소</p>
            <p class="info small">경기도 고양시 | 보호동물 211마리</p>
          </div>
        </div>
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
