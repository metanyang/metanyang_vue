<template>
  <header>
    <div class="headerWrap">
      <div class="logoWrap">
        <div class="imageWrap">
          <router-link to="main">BlanCat</router-link>
        </div>
      </div>
      <div class="menuWrap">
        <ul id="example-1">
          <li v-for="(item, index) in menus" :key="index">
            <router-link :to="item.link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          name: 'ABOUT',
          link: 'news'
        },
        {
          name: 'STORY',
          link: 'story'
        },
        {
          name: 'CONTACT',
          link: 'contact'
        },
        {
          name: 'DONATE',
          link: 'donate'
        },
        {
          name: 'SHELTER',
          link: 'shelter'
        }
      ]
    }
  }
}
</script>

<style>
</style>
