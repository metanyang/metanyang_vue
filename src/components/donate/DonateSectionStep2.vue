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
          <input type="text" name="name" value="" placeholder="성함을 입력해주세요">
        </div>
        <div class="inputSub">
          <p class="info">내주소</p>
          <input type="text" name="addr" value="" placeholder="보내시는 분의 주소를 입력해주세요">
        </div>
      </div>
      <div class="inputWrap">
        <div class="inputSub">
          <p class="info">메일주소</p>
          <input type="text" name="name" value="" placeholder="메일 주소를 입력해주세요">
        </div>
        <div class="inputSub">
          <p class="info">보내시는 물품</p>
          <input type="text" name="count" value="" placeholder="물품 갯수를 써주세요" class="half">
          <input type="text" name="weight" value="" placeholder="물품 무게를 입력해주세요. ex)약 45kg" class="half">
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
              <li>
                <a>
                  <div class="shelterName">고양 유기동물 보호소</div>
                  <div class="shelterState">경기도 고양시 | 보호동물 211마리</div>
                </a>
              </li>
              <li>
                <a>
                  <div class="shelterName">고양 유기동물 보호소</div>
                  <div class="shelterState">경기도 고양시 | 보호동물 211마리</div>
                </a>
              </li>
              <li>
                <a>
                  <div class="shelterName">고양 유기동물 보호소</div>
                  <div class="shelterState">경기도 고양시 | 보호동물 211마리</div>
                </a>
              </li>
              <li>
                <a>
                  <div class="shelterName">고양 유기동물 보호소</div>
                  <div class="shelterState">경기도 고양시 | 보호동물 211마리</div>
                </a>
              </li>
              <li>
                <a>
                  <div class="shelterName">고양 유기동물 보호소</div>
                  <div class="shelterState">경기도 고양시 | 보호동물 211마리</div>
                </a>
              </li>
              <li>
                <a>
                  <div class="shelterName">고양 유기동물 보호소</div>
                  <div class="shelterState">경기도 고양시 | 보호동물 211마리</div>
                </a>
              </li>
              <li>
                <a>
                  <div class="shelterName">고양 유기동물 보호소</div>
                  <div class="shelterState">경기도 고양시 | 보호동물 211마리</div>
                </a>
              </li>
              <li>
                <a>
                  <div class="shelterName">고양 유기동물 보호소</div>
                  <div class="shelterState">경기도 고양시 | 보호동물 211마리</div>
                </a>
              </li>
              <li>
                <a>
                  <div class="shelterName">고양 유기동물 보호소</div>
                  <div class="shelterState">경기도 고양시 | 보호동물 211마리</div>
                </a>
              </li>
              <li>
                <a>
                  <div class="shelterName">고양 유기동물 보호소</div>
                  <div class="shelterState">경기도 고양시 | 보호동물 211마리</div>
                </a>
              </li>
              <li>
                <a>
                  <div class="shelterName">고양 유기동물 보호소</div>
                  <div class="shelterState">경기도 고양시 | 보호동물 211마리</div>
                </a>
              </li>
              <li>
                <a>
                  <div class="shelterName">고양 유기동물 보호소</div>
                  <div class="shelterState">경기도 고양시 | 보호동물 211마리</div>
                </a>
              </li>
            </ul>
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
