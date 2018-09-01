<template>
  <div class="pageWrap">
    <donatesection-stepcommon>
      <slot>
        후원을 결정해주셔서 감사합니다.<br>어떤 물품을 후원해주시겠어요?
      </slot>
    </donatesection-stepcommon>
    <div class="boxWrap" v-show="this.$store.getters.getDonateStep === 1">
      <div class="box" v-for="(item, index) in this.$store.getters.getGoods" :key="index">
        <div class="info" @click="selectGood(item.id)"><img :src="item.image_url" alt="물품사진1"></div>
        <div class="position">{{ item.name }}</div>
      </div>
    </div>
    <donatesection-stepbuttons></donatesection-stepbuttons>
  </div>
</template>

<script>
import DonateSectionStepCommon from '@/components/donate/DonateSectionStepCommon'
import DonateSectionStepButtons from '@/components/donate/DonateSectionStepButtons'
import { GET_GOODS_REQUEST, SET_PARAM, GET_CENTERS_REQUEST } from '@/store/actions'
export default {
  components: {
    'donatesection-stepcommon': DonateSectionStepCommon,
    'donatesection-stepbuttons': DonateSectionStepButtons
  },
  created () {
    this.$store.dispatch(GET_GOODS_REQUEST)
      .then(() => {
        console.log('success')
      })
  },
  methods: {
    selectGood (goodId) {
      this.$store.commit(SET_PARAM, {key: 'goodId', data: goodId})
      this.$store.dispatch(GET_CENTERS_REQUEST, {goodId: this.$store.getters.getParams.goodId})
        .then(() => {
          console.log('success')
        })
    }
  }
}
</script>

<style>

</style>
