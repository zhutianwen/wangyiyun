<template>
    <transition name="slide">
        <div class="coverContent" v-show="leftCover">
            <div class="top-part" v-if="!isLogin">
                <div>登录网易云音乐</div>
                <div>手机电脑多端同步，尽享海量高品质音乐</div>
                <div class="cover-login" @click="goLogin">立即登录</div>
            </div>
            <div class="top-part2" v-else>
                <div>
                    <img src="" alt="">
                </div>
                <div class="qain-dao">签到</div>
            </div>
            <div class="middle-part">
                <div>
                    <i class="iconfont icon-wodexiaoxi"></i>
                    <div class="cover-title">我的消息</div>
                </div>
                <div>
                    <i class="iconfont icon-icon-myFriend"></i>
                    <div class="cover-title">我的好友</div>
                </div>
                <div>
                    <i class="iconfont icon-gexingzhuangban"></i>
                    <div class="cover-title">个性皮肤</div>
                </div>
                <div>
                    <i class="iconfont icon-tinggeshiqu"></i>
                    <div class="cover-title">听歌识曲</div>
                </div>
            </div>
            <div class="bottom-part1">
                <div class="icon-item" v-for="item in iconList">
                    <div class="iconfont icon" v-html="item.icon"></div>
                    <div class="item-title">{{item.title}}</div>
                </div>
            </div>
            <div class="bottom-part2">
                <div class="icon-item part2-item" v-for="item in iconList2">
                    <div class="iconfont icon" v-html="item.icon"></div>
                    <div class="item-title">{{item.title}}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    name:'coverContent',
    computed:{
        ...mapGetters([
            'leftCover',
            'isLogin'
        ])
    },
    data(){
        return{
            iconList:[
                {
                    icon:'&#xe61a;',
                    title:'演出'
                },
                {
                    icon:'&#xe602;',
                    title:'商城'
                },
                {
                    icon:'&#xe694;',
                    title:'附近的人'
                },
                {
                    icon:'&#xe61d;',
                    title:'口袋铃声'
                },
                {
                    icon:'&#xe603;',
                    title:'我的订单'
                },
            ],
            iconList2:[
                {
                    icon:'&#xe66b;',
                    title:'定时停止播放'
                },
                {
                    icon:'&#xe617;',
                    title:'扫一扫'
                },
                {
                    icon:'&#xe657;',
                    title:'音乐闹钟'
                },
                {
                    icon:'&#xe658;',
                    title:'在线听歌免流量'
                },
                {
                    icon:'&#xe645;',
                    title:'游戏推荐'
                },
                {
                    icon:'&#xe625;',
                    title:'优惠券'
                },
            ],
        } 
    },
    methods:{
        goLogin(){
            this.$router.push({
                path:'/login'
            })
        }
    },
}
</script>

<style>
    .coverContent{
        height: 100vh;
        width: 80%;
        background: #fff;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        overflow: hidden;
        overflow-y: auto;
        z-index: 9999;
    }
 
    .cover-right-part{
        width: 20%;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .top-part{
        color: #909090;
        font-size: 0.4rem;
        text-align: center;
        background:#cccccc4d;
        padding: 0.8rem 0.4rem 0.9rem 0.4rem;
    }
    .top-part2{
        color: #909090;
        font-size: 0.4rem;
        text-align: center;
        background:#fff;
        padding: 0.8rem 0.4rem 0.9rem 0.4rem;
    }
    .qain-dao{
        border: 1px solid;
        width: 1.5rem;
        border-radius: 15px;
    }
    .cover-login{
        height: 0.8rem;
        width: 2.8rem;
        line-height: 0.8rem;
        margin: 0 auto;
        border-radius: 20px;
        border: 1px solid;
        font-size: 0.4rem;
        margin-top: 0.5rem;
    }

    .middle-part{
        text-align: center;
        display: flex;
        justify-content: space-around;
        padding: 0.5rem 0rem 0.9rem 0rem;
        border-bottom: 1px solid #ccc;
    }
    .cover-title{
        font-size: 0.4rem;
        margin-top: 0.2rem;
    }
    .icon-wodexiaoxi,
    .icon-icon-myFriend,
    .icon-tinggeshiqu,
    .icon-gexingzhuangban{
        color: #ee0a24;
        font-size: 0.6rem;
    }
    .bottom-part1{
        margin-top: 0.6rem;
    }
    .icon-item{
        display: flex;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.45rem;
    }
    .icon{
        margin-left:0.4rem;
        margin-right:0.3rem;
        font-size: 0.5rem;
    }
    .icon-item:last-child{
        border-bottom: 1px solid #ccc;
    }
    .part2-item:last-child{
        margin-bottom: 1rem;
    }
    /* 左侧菜单栏到动画 */
    .slide-enter,
    .slide-leave-to {
        transform: translateX(-80%);
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: transform linear 0.3s;
    }
    
     
    
</style>