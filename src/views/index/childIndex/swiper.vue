<template>
    <div class="swiper">
        <van-swipe :autoplay="3000" indicator-color="red">
            <van-swipe-item v-for="(item,index) in bannersList" :key="index">
                <img :src="item.imageUrl" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    props:{
        bannersList:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>

</style>