<template>
    <div class="loading"></div>
</template>

<script>
export default {
    name:"loading",
    data(){
        return{
            
        }
    },
}
</script>

<style>
    .loading{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        background: url('@~assets/images/loading.gif') center center;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
    }
</style>