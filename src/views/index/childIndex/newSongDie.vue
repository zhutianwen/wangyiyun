<template>
    <div class="newSongDie">
        <div class="newSongDie-title">
            <div class="newSongDie-content">
                <span :class="{active:shows==1}" @click="newdish">新碟</span> |
                <span :class="{active:shows==2}" @click="newsong">新歌</span>
            </div>
            <div class="more-die">更多新碟</div>   
        </div>
        <div class="song-list" v-show="show">
            <div class="song-item" v-for="(item,index) in newslist" :key="index">
                <img :src="item.blurPicUrl" alt="">
                <div class="name">{{item.name}}</div>
            </div>
        </div>
        <div class="die-list" v-show="hide">
            <div class="die-item" v-for="(item,index) in newDie" :key="index" v-if="index<3">
                <img :src="item.album.blurPicUrl" alt="">
                <div class="name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentIndex:0,
            show:true,
            hide:false,
            shows:1,
        }
    },
    props:{
        newslist:{
            type:Array,
            default(){
                return []
            }
        },
        newDie:{
            type:Array,
            default(){
                return []
            }
        },
    },
    methods:{
        newdish(){
            this.shows=1
            this.show = true
            this.hide = false
            
        },
        newsong(){
            this.shows=2
            this.show = false
            this.hide = true
        },
    },
}
</script>

<style scoped>
    .newSongDie{
        margin-top:0.8rem ;
    }
    .newSongDie-title,.song-list,.die-list{
        display: flex;
        justify-content: space-between;
        width: 95%;
        margin: 0 auto;
    }
    .newSongDie-content{
        font-size: 0.45rem;
        color: #c5baba;
    }
    .more-die{
        font-size: 0.4rem;
        border: 1px solid #ada290;
        width: 2rem;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        border-radius: 15px;
    }
    .song-list,.die-item{
        margin-top: 0.4rem;
    }
    .song-item,.die-item{
        width: 30%;
    }
     .song-item img,.die-item img{
        border-radius: 5px;
    }
    .name{
        font-size: 0.35rem;
        color: black;
        text-align: left;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .active{
        color: #000;
        font-size: 0.45rem   
    }
</style>