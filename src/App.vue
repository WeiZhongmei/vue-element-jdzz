<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: "微软雅黑", -apple-system, BlinkMacSystemFont, Helvetica Neue,PingFang SC, Microsoft YaHei, 
            Source Han Sans SC, Noto Sans CJK SC,WenQuanYi Micro Hei, sans-serif;;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0;
        color: #2c3e50;
        font-size: 16px;
        font-weight: 400;
    }
</style>
