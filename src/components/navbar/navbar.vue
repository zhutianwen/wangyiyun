<template>
    <div class="navbar">
        <div class="nav_title">
            <div @click="SHOW_COVER">
                <i class="iconfont icon-caidan"></i>
            </div>
            <div @click="goMine">我的</div>
            <div @click="goFound">发现</div>
            <div @click="goYuncun">云村</div>
            <div @click="goVideo">视频</div>
            <div>
                <i class="iconfont icon-sousuo"></i>
            </div>
        </div>
    </div>
</template>

<script>

import {mapMutations} from 'vuex'

export default {
    name:"navbar",
    methods:{
        ...mapMutations([
            'SHOW_COVER'
        ]),
        goMine(){
            this.$router.push({
                path:'/mine'
            })
        },
        goFound(){
            this.$router.push({
                path:'/index'
            })
        },
        goYuncun(){
            this.$router.push({
                path:'/yuncun'
            })
        },
        goVideo(){
            this.$router.push({
                path:'/shipin'
            })
        },
    },
}
</script>

<style>
    .nav_title{
        width: 100%;
        height: 1.2rem;
        line-height: 1.2rem;
        display: flex;
        justify-content: space-between;
        background: #fff;
        position: fixed;
        top:0;
        z-index: 99;
        font-size: 0.45rem;
        font-weight: bold;
        box-shadow: 0 2px 0 #e2d7ce;  
    }
    .nav_title div{
        width: 25%;
        text-align: center;
    }
    
</style>