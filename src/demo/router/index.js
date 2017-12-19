import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import TodoList from '../components/TodoList'
import Film from '../components/Film'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/todo-list',
            name: 'list',
            component: TodoList
        },
        {
            path: '/film',
            name: 'film',
            component: Film
        }
    ]
})
