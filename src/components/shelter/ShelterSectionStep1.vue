<template>
  <div class="pageWrap">
    <sheltersection-stepcommon>
      <slot><span class="point2">고양시 유기동물 보호소</span> 님, 안녕하세요.<br>새로 들어온 후원이 <span class="point1">3</span>건 있습니다.</slot>
    </sheltersection-stepcommon>
    <div v-show="this.$store.getters.getShelterStep === 1">
      <div class="shelterViewWrap">
        <ul>
          <li>
            <div class="donateName">
              이** 님
            </div>
            <div class="donateProduct">
              서울시 마포구 노고산동 | 담요 및 이불 3개, 7kg 이상
            </div>
            <div class="btnWrap">
              <div class="stateBtn">
                <a href="#">수령대기</a>
              </div>
            </div>
          </li>
          <li>
            <div class="donateName">
              이** 님
            </div>
            <div class="donateProduct">
              서울시 마포구 노고산동 | 담요 및 이불 3개, 7kg 이상
            </div>
            <div class="btnWrap">
              <div class="stateBtn">
                <a href="#" class="active">수령완료</a>
              </div>
            </div>
          </li>
          <li>
            <div class="donateName">
              이** 님
            </div>
            <div class="donateProduct">
              서울시 마포구 노고산동 | 담요 및 이불 3개, 7kg 이상
            </div>
            <div class="btnWrap">
              <div class="stateBtn">
                <a href="#" class="">수령대기</a>
              </div>
            </div>
          </li>
          <li>
            <div class="donateName">
              이** 님
            </div>
            <div class="donateProduct">
              서울시 마포구 노고산동 | 담요 및 이불 3개, 7kg 이상
            </div>
            <div class="btnWrap">
              <div class="stateBtn">
                <a href="#" class="active">수령완료</a>
              </div>
            </div>
          </li>
          <li>
            <div class="donateName">
              이** 님
            </div>
            <div class="donateProduct">
              서울시 마포구 노고산동 | 담요 및 이불 3개, 7kg 이상
            </div>
            <div class="btnWrap">
              <div class="stateBtn">
                <a href="#" class="active">수령완료</a>
              </div>
            </div>
          </li>
          <li>
            <a class="showMore" onclick="showList();">받은 후원 리스트 펼쳐보기</a>
          </li>
        </ul>
      </div>
    </div>
    <sheltersection-stepbuttons></sheltersection-stepbuttons>
  </div>
</template>

<script>
import ShelterSectionStepCommon from '@/components/shelter/ShelterSectionStepCommon'
import ShelterSectionStepButtons from '@/components/shelter/ShelterSectionStepButtons'
import { GET_GOODS_REQUEST } from '@/store/actions'
export default {
  components: {
    'sheltersection-stepcommon': ShelterSectionStepCommon,
    'sheltersection-stepbuttons': ShelterSectionStepButtons
  },
  created () {
    this.$store.dispatch(GET_GOODS_REQUEST)
      .then(() => {
        console.log('success')
      })
  }
}
</script>

<style>

</style>
