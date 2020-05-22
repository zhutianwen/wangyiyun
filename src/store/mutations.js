import * as types from './mutation-types'


const mutations = {
    // 显示左侧侧边栏页面
    [types.SHOW_COVER] (state) {
        state.leftCover = true
    },
    //隐藏左侧侧边栏页面
    [types.HIDE_COVER] (state) {
        state.leftCover = false 
    },
}
export default mutations
  

  