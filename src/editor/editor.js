import editorHtml from './editor.html'
import {markdown} from 'markdown'
import axios from 'axios'
import './editor.less'

export default () => {
    document.body.innerHTML = editorHtml;
    let editor = document.getElementById('editor')
    let result =  document.getElementById('result')
    axios.get('../public/example.md').then(function (data) {
        editor.value = data.data
        result.innerHTML = markdown.toHTML(editor.value)
    })
    editor.oninput = (ev) => {
       result.innerHTML = markdown.toHTML(editor.value)
    }
    editor.onclick = (ev) => {
        console.log(ev.clientY)
    }
}