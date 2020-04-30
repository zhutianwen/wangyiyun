<template>
    <div class="index"> 
        <!-- 轮播图 -->
        <swiper :bannersList='bannersList'></swiper>
        <!-- 分类 -->
        <itemes></itemes>
        <!-- 推荐歌单 -->
        <recommendSong :recommedList="recommedList"></recommendSong>
        <!-- 新歌 新碟 -->
        <newsongdie :newslist="newslist" :newDie="newDie"></newsongdie>
    </div> 
</template>

<script>

import swiper from './childIndex/swiper'
import itemes from './childIndex/itmes'
import recommendSong from './childIndex/recommendSong'
import newsongdie from './childIndex/newSongDie'

import {
    getBannerData,
    getrecomSonglist,
    getNewsSonglist,
    getNewsDielist
    } from 'api/api'

export default {
    name:"index",
    data(){
        return{
            bannersList:[],
            recommedList:[],
            newslist:[],
            newDie:[],
        }
    },
    created(){
        this.getBannerData();
        this.getrecomSonglist();
        this.getNewsSonglist();
        this.getNewsDielist();
    },
    methods:{
        getBannerData(){
            getBannerData().then(res=>{
                this.bannersList = res.banners
                // console.log(this.bannersList)
            })
        },
        getrecomSonglist(){
            getrecomSonglist().then(res=>{
                this.recommedList = res.result
                console.log(this.recommedList)
            })
        },
        getNewsSonglist(){//包装一层方法
            getNewsSonglist().then(res=>{
                this.newslist = res.albums
            });
        },
        getNewsDielist(){//包装一层方法
            getNewsDielist().then(res=>{
                this.newDie = res.data
            });
        },
    },
    components:{
        swiper,
        itemes,
        recommendSong,
        newsongdie,
    },
}
</script>

<style>
    .index{
        margin-top: 1.2rem;
    }
</style>