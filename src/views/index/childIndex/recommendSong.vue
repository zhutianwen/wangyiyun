<template>
    <div class="recomSonglist">
        <div class="recomSonglist-title">
            <div class="gedan">推荐歌单</div>
            <div class="guangchang">歌单广场</div>
        </div>
        <div class="recommend-list">
            <div class="recommend-item" v-for="(item,index) in recommedList" :key="index">
                <span class="playCount">
                    {{transNumber(item.playCount,1)}}
                    <span>
                        <i class="iconfont icon-erji"></i>
                    </span>
                </span>
                <img :src="item.picUrl" alt="">
                <div class="item-name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
 import {transNumber} from 'components/utils/utils.js'

export default {
    data(){
        return{
            playCount:''
        }
    },
    props:{
        recommedList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    created(){
    },

    methods:{
        transNumber,
    },
}
</script>

<style scoped>
    .recomSonglist{
        width: 95%;
        margin: 0 auto;
        margin-top: 0.6rem;
    }
    .recomSonglist-title{
        display: flex;
        justify-content: space-between;
    }
    .gedan{
        font-size: 0.45rem;
    }
    .guangchang{
        font-size: 0.4rem;
        border: 1px solid #ada290;
        width: 2rem;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        border-radius: 15px;
    }
    .recommend-list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 0.5rem;
    }
    .recommend-item{
        width: 30%;
        margin-bottom: 0.25rem; 
        position: relative;  
    }
    .recommend-item img{
        border-radius:8px;
    }
    .item-name{
        font-size: 0.35rem;
        color: black;
        text-align: left;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .playCount{
        font-size: 0.35rem;
        position: absolute;
        top: 0;
        color: #fff;
        background: rgba(0,0,0,0.1);
        border-top-left-radius: 8px;
    }
</style>