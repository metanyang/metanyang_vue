<template>
  <div class="pageWrap">
    <donatesection-stepcommon>
      <slot>
        후원을 결정해주셔서 감사합니다.<br>어떤 물품을 후원해주시겠어요?
      </slot>
    </donatesection-stepcommon>
    <div class="boxWrap" v-show="this.$store.getters.getDonateStep === 1">
      <div class="box" v-for="(item, index) in this.$store.getters.getGoods" :key="index">
        <div class="info" @click="selectGood(item.id)"><img ref="goods"  :src="'static/img/' + (images.activeIndex === index ? images.active[index] : images.inActive[index])" alt="물품사진1"></div>
        <div class="position">{{ item.name }}</div>
      </div>
    </div>
    <div class="btnWrap">
      <div class="btn">
        <a href="#" @click="nextStep">다음</a>
      </div>
    </div>
  </div>
</template>

<script>
import DonateSectionStepCommon from '@/components/donate/DonateSectionStepCommon'
import DonateSectionStepButtons from '@/components/donate/DonateSectionStepButtons'
import { GET_GOODS_REQUEST, SET_PARAM, GET_CENTERS_REQUEST, DONATE_NEXT_STEP } from '@/store/actions'
export default {
  data () {
    return {
      images: {
        activeIndex: '',
        inActive: [
          'blanket_inactive.svg',
          'dog_food_inactive.svg',
          'etc_inactive.svg'
        ],
        active: [
          'blanket_active.svg',
          'dog_food_active.svg',
          'etc_active.svg'
        ]
      }
    }
  },
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
      this.$refs.goods.map((el, index) => {
        if (index === goodId - 1) {
          el.src = 'static/img/' + this.images.active[index]
        } else {
          el.src = 'static/img/' + this.images.inActive[index]
        }
      })
      this.activeIndex = goodId - 1
      this.$store.commit(SET_PARAM, {key: 'goodId', data: goodId})
      this.$store.dispatch(GET_CENTERS_REQUEST, {goodId: this.$store.getters.getParams.goodId})
        .then(() => {
          console.log('success')
        })
    },
    nextStep () {
      this.$store.dispatch(GET_CENTERS_REQUEST, {goodId: this.$store.getters.getParams.goodId})
        .then(() => {
          console.log('success')
          this.$store.commit(DONATE_NEXT_STEP)
        })
    }
  }
}
</script>

<style>

</style>
