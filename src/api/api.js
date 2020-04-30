import {request} from './request'

export function getBannerData(){
    return request({
        url:'/banner?type=2/'
    })
}
export function getrecomSonglist(){
    return request({
        url:'/personalized?limit=6'
    })
}
export function getNewsSonglist(){
    return request({
        url:'/top/album?offset=0&limit=3'
    })
}
export function getNewsDielist(){
    return request({
        url:'/top/song?type=0'
    })
}