<template>
  <div id="todo-list">
    <div class="first" v-for="(todo, index) in list">
      <a href="javascript:" @click="toggle(index)">{{todo.time}} {{isShowList[index]?'▼':'▶'}}</a>

        <transition name="fade">
          <ol v-show="isShowList[index]">
            <li v-for="list in todo.list">{{list}}</li>
          </ol>
        </transition>

    </div>
    <button @click="toggle('content')">{{show ? "收起内容" : "显示内容"}}</button>
    <div></div>
    <div>{{content | limited(show ? '': 20, '...')}}</div>
  </div>
</template>
<style scoped>
  #todo-list{
    text-align: left;
    padding-top: 150px;
  }
  ol {
    font-size: 20px;
  }
  .first>a{
    text-decoration: none;
    outline: none;
    color: #3174ff;
    cursor: pointer;
  }
  .first>a:hover{
    color: #51c148;
   }
  li {
    font-size: 14px;
  }
</style>
<script>
  import listData from '../assets/list.json'
  export default {
    name: 'TodoList',
    data () {
      return {
        list: listData,
        isShowList: [],
        show: true,
        content: 'filterA 被定义为接收三个参数的过滤器函数。其中 message 的值作为第一个参数，普通字符串 \'arg1\' 作为第二个参数，表达式 arg2 的值作为第三个参数。'
      }
    },
    created () {

    },
    methods: {
      toggle (index) {
        if (index === 'content') {
          this.show = !this.show
        } else {
          // 使用vue.$set或Vue.set(全局)设置数组的改变
          this.$set(this.isShowList, index, !this.isShowList[index])
        }
      }
    },
    watch: {

    },
    filters: {
      limited (val, max, tail) {
        if (!val || !max) return val
        let value = ''
        let length = 0
        for (let i = 0; i < val.length; i++) {
          length += val[i].match(/[^\x00-\xff]/ig) ? 2 : 1
          if (length > max) {
            value += tail || ''
            break
          }
          value += val[i]
        }
        return value
      }
    }
  }
</script>
