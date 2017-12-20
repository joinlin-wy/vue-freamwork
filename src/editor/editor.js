import editorHtml from './editor.html'
import {markdown} from 'markdown'
import axios from 'axios'
import './editor.less'

export default () => {
    document.body.innerHTML = editorHtml;
    let editor = document.getElementById('editor');
    axios.get('public/md-example.txt').then(function (data) {
        console.log(data)
        editor.value = data.data
    })
    editor.oninput = (ev) => {
        document.getElementById('result').innerHTML = markdown.toHTML(editor.value)
    }
}