<template>
  <div class="pageWrap">
    <sheltersection-stepcommon>
      <slot><span class="point2">{{this.$store.getters.getParams.item.name}}</span> 님, 안녕하세요.<br>새로 들어온 후원이 <span class="point1">{{this.$store.getters.getCenterSponserships.length}}</span>건 있습니다.</slot>
    </sheltersection-stepcommon>
    <div v-show="this.$store.getters.getShelterStep === 1">
      <div class="shelterViewWrap">
        <ul>
          <li v-for="(item, index) in this.$store.getters.getCenterSponserships" :key="index">
            <div class="donateName">
              {{item.name}}
            </div>
            <div class="donateProduct">
              {{item.address}} | {{item.good_name}} {{item.s_count}}개, {{item.s_weight}}kg
            </div>
            <div class="btnWrap">
              <div class="stateBtn">
                <a href="#" v-if="item.received_at !== null">수령완료</a>
                <a href="#" v-else class="active" @click="nextStep(item)">수령하기</a>
              </div>
            </div>
          </li>
          <li>
            <a class="showMore" onclick="showList();">받은 후원 리스트 펼쳐보기</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ShelterSectionStepCommon from '@/components/shelter/ShelterSectionStepCommon'
import { GET_CENTER_SPONSERSHIPS_REQUEST, SHELTER_NEXT_STEP, SET_PARAM } from '@/store/actions'
export default {
  components: {
    'sheltersection-stepcommon': ShelterSectionStepCommon
  },
  created () {
    this.$store.dispatch(GET_CENTER_SPONSERSHIPS_REQUEST, {centerId: 25})
      .then(() => {
        console.log('success')
      })
  },
  methods: {
    nextStep (item) {
      console.log(item)
      this.$store.commit(SET_PARAM, {key: 'name', data: item.name})
      this.$store.commit(SET_PARAM, {key: 'email', data: item.email})
      this.$store.commit(SET_PARAM, {key: 'sCount', data: item.s_count})
      this.$store.commit(SET_PARAM, {key: 'sWeight', data: item.s_weight})
      this.$store.commit(SET_PARAM, {key: 'goodName', data: item.good_name})
      this.$store.commit(SET_PARAM, {key: 'myAddress', data: item.address})
      this.$store.commit(SET_PARAM, {key: 'sponsershipId', data: item.id})
      this.$store.commit(SHELTER_NEXT_STEP)
    }
  }
}
</script>

<style>

</style>
