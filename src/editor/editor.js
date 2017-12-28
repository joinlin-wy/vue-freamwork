import editorHtml from './editor.html'
import marked from 'marked'
import axios from 'axios'
import './editor.less'
import 'highlight.js/styles/monokai.css'
import highlight from '../../public/highlight.pack.js'
export default () => {
    document.body.innerHTML = editorHtml;
    let editor = document.getElementById('editor')
    let result =  document.getElementById('result')
    marked.setOptions({
        highlight: function (code) {
            let str = highlight.highlightAuto(code)
            return str.value;
        }
    });
    axios.get('../public/example.md').then(function (data) {
        editor.value = data.data
        result.innerHTML = marked(editor.value)
        result.querySelectorAll('pre code').forEach(function (value) {
            value.className = 'hljs'
        })
    })
    editor.oninput = (ev) => {
       result.innerHTML = marked(editor.value)
        result.querySelectorAll('pre code').forEach(function (value) {
            value.className = 'hljs'
        })
    }
    editor.onclick = (ev) => {
        console.log(ev.offsetY)
        let percent = (ev.offsetY + editor.scrollTop) / editor.scrollHeight
        result.scrollTop = result.scrollHeight * percent - result.clientHeight
    }
}