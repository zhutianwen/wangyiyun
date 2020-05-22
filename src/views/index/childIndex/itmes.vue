<template>
    <div class="itemes">
        <div>
            <i class="iconfont icon-meirituijian"></i>
            <div class="itemes-title">每日推荐</div>
        </div>
        <div @click="goGedan">
            <i class="iconfont icon-gedan"></i>
            <div class="itemes-title">歌单</div>
        </div>
        <div>
            <i class="iconfont icon-paihangbang"></i>
            <div class="itemes-title">排行榜</div>
        </div>
        <div>
            <i class="iconfont icon-diantai"></i>
            <div class="itemes-title">电台</div>
        </div>   
    </div>
</template>

<script>
export default {
    methods:{
        goGedan(){
            this.$router.push({
                path:'/geDanGuangChang'
            })
        },
    },
}
</script>

<style scoped>
    .itemes{
        display: flex;
        justify-content: space-between;
        text-align: center;
        width: 95%;
        margin: 0 auto;
        margin-top:0.8rem;
        border-bottom:1px solid  #eccf9d;
        padding-bottom:0.6rem;
    }
    .icon-meirituijian,
    .icon-gedan,
    .icon-paihangbang,
    .icon-diantai{
        border: 1px solid;
        width: 1.5rem;
        height: 1.5rem;
        display: block;
        border-radius: 50%;
        background: #e14235;
        color: #fff;
        line-height: 1.5rem;
        font-size: 0.7rem;
    }
    .itemes-title{
        font-size: 0.38rem;
        color: black;
        margin-top: 0.2rem;
    }
</style>

    