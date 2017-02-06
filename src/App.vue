<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <!--导航部分-->
    <ul class="nav  border-1px">
      <li class="nav-item">
        <router-link to="/goods">商品</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/ratings">评论</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/seller">商家</router-link>
      </li>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  const ERR_OK = 0;
  import header from './components/header/header.vue'
  export default {
    name: 'app',
    data(){
      return {
        seller: {}
      }
    },
    created(){
      this.$http.get('/api/seller').then((res) => {
        res = res.body;
        if (res.errno === ERR_OK) {
          //判断有语义的风格
          this.seller = res.data;
        }
      })
    },
    components: {
      'v-header': header
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/styls/minxi.styl"
  .nav
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.2))
    .nav-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)


</style>
