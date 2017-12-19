<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="javascript:" @click="add()">点我让下面那个家伙变大</a>
    <p>{{counter}}</p>
    <input type="number" v-model="counter" title="请输入数字">
  </div>
</template>

<script>
  let temp = null
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Hello World',
        counter: 0
      }
    },
    created () {
      temp = this.counter
    },
    methods: {
      add () {
        this.counter++
        return false
      }
    },
    watch: {
//      要是counter改变，这个函数就运行
      counter () {
        this.msg = this.counter > temp ? '这个数变大了' : '这个数变小了'
        temp = this.counter
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
