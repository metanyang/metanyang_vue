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
          <input type="text" name="weight" v-model="params.sWeight" placeholder="물품 무게를 입력해주세요. ex)약 45kg" class="half">
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
                  <div class="shelterName active">{{ item.name }}</div>
                  <div class="shelterState">{{ item.address }}</div>
                </a>
              </li>
            </ul>
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
import { POST_SPONSERSHIPS_REQUEST, SET_PARAM, DONATE_NEXT_STEP, DONATE_PREV_STEP } from '@/store/actions'

export default {
  data () {
    return {
      params: {
        name: '',
        email: '',
        sCount: '',
        sWeight: '',
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
  methods: {
    viewDetail (selectedCentersIndex) {
      this.showModal = !this.showModal
      this.selectedItem = this.$store.getters.getCenters[selectedCentersIndex]
      this.$store.commit(SET_PARAM, {key: 'centerId', data: this.selectedItem.id})
    },
    sendSponserships () {
      this.$store.commit(SET_PARAM, {key: 'name', data: this.params.name})
      this.$store.commit(SET_PARAM, {key: 'email', data: this.params.email})
      this.$store.commit(SET_PARAM, {key: 'sCount', data: this.params.sCount})
      this.$store.commit(SET_PARAM, {key: 'sWeight', data: this.params.sWeight})
      this.$store.commit(SET_PARAM, {key: 'myAddress', data: this.params.myAddress})
      this.showModal = false
    },
    nextStep () {
      let params = {
        name: this.$store.getters.getParams.name,
        email: this.$store.getters.getParams.email,
        good_id: this.$store.getters.getParams.goodId,
        center_id: this.$store.getters.getParams.centerId,
        s_count: this.$store.getters.getParams.sCount,
        s_width: this.$store.getters.getParams.sWeight
      }
      this.$store.dispatch(POST_SPONSERSHIPS_REQUEST, {params: params})
        .then(() => {
          console.log('success')
          this.$store.commit(DONATE_NEXT_STEP)
        })
        .catch(err => {
          console.log(err)
        })
    },
    prevStep () {
      this.$store.commit(DONATE_PREV_STEP)
    }
  }
}
</script>

<style>

</style>
