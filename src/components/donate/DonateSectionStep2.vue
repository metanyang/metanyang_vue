<template>
  <div class="pageWrap">
    <donatesection-stepcommon>
      <slot>
        물품 추적을 위해 개인정보를 작성해주세요. <br/>
        어떤 보호소에 물품을 보내시겠어요?
      </slot>
    </donatesection-stepcommon>
    <div class="boxWrap" v-show="this.$store.getters.getDonateStep === 2">
      <div class="inputWrap">
        <div class="inputSub">
          <p class="info">성함</p>
          <input type="text" name="name" v-model="params.name" placeholder="성함을 입력해주세요">
        </div>
        <div class="inputSub">
          <p class="info">내주소</p>
          <input type="text" name="addr" v-model="params.myAddress" placeholder="보내시는 분의 주소를 입력해주세요">
        </div>
      </div>
      <div class="inputWrap">
        <div class="inputSub">
          <p class="info">메일주소</p>
          <input type="text" name="name" v-model="params.email" placeholder="메일 주소를 입력해주세요">
        </div>
        <div class="inputSub">
          <p class="info">보내시는 물품</p>
          <input type="text" name="count" v-model="params.sCount" placeholder="물품 갯수를 써주세요" class="half">
          <input type="text" name="weight" v-model="params.sWeigth" placeholder="물품 무게를 입력해주세요. ex)약 45kg" class="half">
        </div>
      </div>
      <div class="shelterWrap">
        <p class="info">보호소 리스트</p>
        <div class="searchWrap">
          <input type="text" name="searchKeyword" value="">
          <a class="search"><img src="../../assets/img/search.png"></a>
        </div>
        <div class="listWrap">
          <div class="list">
            <ul>
              <li v-for="(item, index) in this.$store.getters.getCenters" :key="index">
                <a @click="viewDetail(index)">
                  <div class="shelterName">{{ item.name }}</div>
                  <div class="shelterState">{{ item.address }}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <donatesection-stepbuttons></donatesection-stepbuttons>
    <common-modal v-if="showModal" @close="showModal = false">
      <h2 slot="header">{{ this.selectedItem.name }} </h2>
      <div slot="body" style="maring-top:40px;">{{ this.selectedItem.address }} 에 위치해 약 {{ this.selectedItem.num_cats }} 마리의 동물과 함께 하고 있는 보호소에요. <b style="color:#ffaf2f">{{ this.selectedItem.good_names.join(',') }} </b> 이 부족해요.  </div>
      <div slot="footer">
        <div class="btnWrap">
          <div class="btn">
            <a href="#" @click="sendSponserships">후원하기</a>
          </div>
        </div>
      </div>
    </common-modal>
  </div>
</template>

<script>
import DonateSectionStepCommon from '@/components/donate/DonateSectionStepCommon'
import DonateSectionStepButtons from '@/components/donate/DonateSectionStepButtons'
import commonModal from '@/components/common/commonModal'
import { SET_PARAM, GET_CENTERS_REQUEST, POST_SPONSERSHIPS_REQUEST } from '@/store/actions'

export default {
  data () {
    return {
      params: {
        name: '',
        email: '',
        goodId: '',
        centerId: '',
        sCount: '',
        sWeigth: '',
        myAddress: ''
      },
      showModal: false,
      selectedItem: {}
    }
  },
  components: {
    'common-modal': commonModal,
    'donatesection-stepcommon': DonateSectionStepCommon,
    'donatesection-stepbuttons': DonateSectionStepButtons
  },
  mounted () {
    this.$store.dispatch(GET_CENTERS_REQUEST, {goodId: this.$store.getters.getParams.goodId})
      .then(() => {
        console.log('success')
      })
  },
  methods: {
    viewDetail (selectedCentersIndex) {
      this.showModal = !this.showModal
      this.selectedItem = this.$store.getters.getCenters[selectedCentersIndex]
    },
    setAllParams () {
      this.$store.commit(SET_PARAM, {key: 'name', data: this.params.name})
      this.$store.commit(SET_PARAM, {key: 'email', data: this.params.email})
      this.$store.commit(SET_PARAM, {key: 'goodId', data: this.params.goodId})
      this.$store.commit(SET_PARAM, {key: 'centerId', data: this.params.centerId})
      this.$store.commit(SET_PARAM, {key: 'sCount', data: this.params.sCount})
      this.$store.commit(SET_PARAM, {key: 'sWeigth', data: this.params.sWeigth})
      this.$store.commit(SET_PARAM, {key: 'myAddress', data: this.params.myAddress})
    },
    sendSponserships () {
      // this.setAllParams()
      let params = {
        name: this.$store.getters.getParams.name,
        email: this.$store.getters.getParams.email,
        good_id: this.$store.getters.getParams.goodId,
        center_id: this.$store.getters.getParams.centerId,
        s_count: this.$store.getters.getParams.sCount,
        s_width: this.$store.getters.getParams.sWeigth
      }
      this.$store.dispatch(POST_SPONSERSHIPS_REQUEST, {params: params})
        .then(() => {
          console.log('success')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
