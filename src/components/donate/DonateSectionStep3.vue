<template>
  <div class="pageWrap">
    <donatesection-stepcommon>
      <slot>
        이제 마지막 단계입니다! <br/>
        작성하신 정보가 맞는지 확인해주세요.
      </slot>
    </donatesection-stepcommon>
    <div class="boxWrap" v-show="this.$store.getters.getDonateStep === 3">
      <div class="resultWrap">
        <div class="inner">
          <div class="detail">
            <p class="subject">성함</p>
            <p class="info">{{ this.$store.getters.getParams.name }}</p>
          </div>
          <div class="detail">
            <p class="subject">보내는 주소</p>
            <p class="info"> {{ this.$store.getters.getParams.myAddress }}</p>
          </div>
          <div class="detail">
            <p class="subject">보내는 분 메일주소</p>
            <p class="info"> {{ this.$store.getters.getParams.email }}</p>
          </div>
          <div class="detail">
            <p class="subject">보내시는 물품</p>
            <p class="info"> {{ this.$store.getters.getGoods[this.$store.getters.getParams.goodId-1].name }} {{ this.$store.getters.getParams.sCount }} 개, {{ this.$store.getters.getParams.sWeight }} </p>
          </div>
          <div class="detail">
            <p class="subject">보내실 보호소</p>
            <p class="info"> {{ this.$store.getters.getParams.item.name }}</p>
            <p class="info small"> {{ this.$store.getters.getParams.item.address }} | 보호동물 {{ this.$store.getters.getParams.item.num_cats }} 마리</p>
          </div>
        </div>
      </div>
    </div>
    <div class="btnWrap">
      <div class="btn">
        <a class="white" href="#" @click="prevStep">이전</a>
      </div>
      <div class="btn">
        <a href="#" @click="nextStep">다음</a>
      </div>
    </div>
  </div>
</template>

<script>
import DonateSectionStepCommon from '@/components/donate/DonateSectionStepCommon'
import { DONATE_NEXT_STEP, DONATE_PREV_STEP } from '@/store/actions'

export default {
  components: {
    'donatesection-stepcommon': DonateSectionStepCommon
  },
  methods: {
    prevStep () {
      this.$store.commit(DONATE_PREV_STEP)
    },
    nextStep () {
      this.$store.commit(DONATE_NEXT_STEP)
    }
  }
}
</script>

<style>

</style>
