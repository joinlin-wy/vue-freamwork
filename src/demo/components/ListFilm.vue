<template>
    <div class="list">
        <ul>
            <li v-for="(film, index) in list" @click="setIndex(index)">
                <img :src="film.posters.big[0]">
                <article>
                    {{film.title}}
                </article>
            </li>
        </ul>
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
    .list {
        width: 1000px;
        height: 120px;
        overflow-x: auto;
        overflow-y: hidden;
    }

    ul {
        height: 120px;
        li {
            list-style: none;
            display: inline-block;
            img {
                width: 100px;
                height: 80px;
            }
            article{
                width: 100px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }

</style>