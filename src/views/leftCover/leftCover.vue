<template>
    <div class="leftCover" >
        <transition name="mask">
           <div v-show="leftCover" class="mask" @click="HIDE_COVER"></div>
        </transition>
        <cover-content></cover-content>
        <transition name="bottm">
            <div class="bottom-part3" v-show="leftCover">
                <div>
                    <i class="iconfont icon-light"></i>
                    <span>夜间模式</span>
                </div>
                <div>
                    <i class="iconfont icon-shezhi"></i>
                    <span>设置</span>
                </div>
                <div>
                    <i class="iconfont icon-tuichu"></i>
                    <span>退出</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

import {mapGetters,mapMutations} from 'vuex'

import CoverContent from './children/coverContent'

export default {
    name:'leftCover',
    computed:{
        ...mapGetters([
            'leftCover'
        ])
    },
    methods:{
       ...mapMutations([
           'HIDE_COVER'
       ])
    },
    components:{
        CoverContent,
    },
}
</script>

<style>
    .mask{
        z-index: 999;
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
    }  
    .bottom-part3{
        z-index: 99999;
        position: fixed;
        bottom: 0;
        background: #fff;
        display: flex;
        justify-content: space-around;
        width: 80%;
        font-size: 0.45rem;
        border-top: 1px solid #ccc;
        height: 1rem;
        line-height: 1rem;
    }
    /* 遮罩层动画 */

    .mask-enter-active,
    .mask-leave-active {/* 进入*/
        transition: opacity 0.3s
    }
    .mask-enter,
    .mask-leave-to{ /*离开*/
        opacity: 0
    }

    /* 左侧菜单栏到动画 */
    .bottm-enter,
    .bottm-leave-to {
        transform: translateX(-80%);
    }

    .bottm-enter-active,
    .bottm-leave-active {
        transition: transform linear 0.3s;
    }
   
    
</style>