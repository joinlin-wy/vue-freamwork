<template>
    <div class="list-window">
        <div class="list" :style="'width:'+list.length*122+'px'">
            <a v-for="(film, index) in list" @click="setIndex(index)" href="javascript:">
                <img :src="film.posters.big[0]">
                <article>
                    {{film.title}}
                </article>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "load-film",
        props: ['setIndex','list'],
        data() {
            return {

            }
        },
        created() {
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
    .list-window {
        width: 1270px;
        height: 200px;
        margin-top: 5px;
        overflow: hidden;
    }

    .list{
        height: 120px;
        a {
            text-decoration: none;
            display: inline-block;
            margin: 0 5px;
            padding: 5px;
            border:1px solid transparent;
            img {
                width: 100px;
                height: 150px;
            }
            article{
                width: 100px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
        a:focus{
            border:1px solid #56ff4f;
            color: #fffdda;
        }
    }

</style>