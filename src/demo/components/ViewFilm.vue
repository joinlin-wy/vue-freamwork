<template>
    <img :src="imgSrc" alt="">
</template>

<script>
    export default {
        name: "view-film",
        props: ['imgSrc'],
        data () {
            return {

            }
        },
        created () {

        }
    }
</script>

<style scoped>
    img{
        height: 460px;
        margin-top: 20px;
    }
</style>