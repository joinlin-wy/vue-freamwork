<template>
  <div id="app">
    <img id="vue-ico" :src="img">
    <router-link to="/" replace>首页</router-link>
    <router-link to="/todo-list" replace>待办事项</router-link>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import cat from './assets/cat.jpeg'
  import logo from './assets/logo.png'

  export default {
    name: 'app',
    data () {
      return {
        img: logo
      }
    },
    watch: {
      '$route' () {
        console.log(this.$route)
        this.img = this.$route.name === 'list' ? cat : logo
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #vue-ico {
    position: absolute;
    left: 0;
    top: 0;
    width: 60px;
    height: 60px;
  }

  a {
    color: inherit;
  }

  /*设置过渡动画*/
  .fade-enter-active, .fade-leave-active {
    transition: all .3s linear;
  }

  /*过渡进入前和离开后的状态*/
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  /*过渡离开前和进入后的状态*/
  .fade-leave, .fade-enter-to {
    opacity: 1;
  }

  /*链接激活时使用的 CSS 类名*/
  .router-link-active {

  }

  /*当链接被精确匹配的时候应该激活的 class*/
  .router-link-exact-active {
    color: #ff2749;
  }
</style>
