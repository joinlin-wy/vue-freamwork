<template>
    <div id="film">
        <view-film :img-src="imgSrc"></view-film>
        <list-film :set-index="setIndex" :list="data"></list-film>
    </div>
</template>

<script>
    import ListFilm from "./ListFilm"
    import ViewFilm from "./ViewFilm"
    import axios from 'axios'

    export default {
        components: {
            ViewFilm,
            ListFilm
        },
        name: "film",
        data () {
            return {
                data: [],
                index: 0,
                imgSrc: ''
            }
        },
        created() {
            axios.get('http://123.56.220.103:8080/VODService/getSuggestProgramOrder').then((response) => {
                this.data = response.data.programs
                this.imgSrc = this.data[this.index].posters.big[0]
            }).catch((error) => {console.log(error)})
        },
        methods: {
            setIndex (index) {
                this.index = index
                this.imgSrc = this.data[this.index].posters.big[0]
            }
        }
    }
</script>

<style scoped>
    #film{
    }
</style>