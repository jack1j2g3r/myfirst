<template>
    <div class="home-container">
        <!-- HomeContainer -->
        <!-- 轮播图 -->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in imgs" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-gear"></span>
                    <div class="mui-media-body">Setting</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-info"></span>
                    <div class="mui-media-body">about</div></a></li>
        </ul> 
    </div>
</template>

<script>
export default {
    data(){
        return {
            imgs: []
        };
    },
    created(){
        this.getlunbo();
    },
    methods:{
        getlunbo(){
            // console.log(123);
            //发送ajax请求,获取轮播图数据
            this.$http.get('http://localhost:3000/api/getlunbo').then(response => {
                // get body data
                this.imgs = response.body.message;
                // console.log(response.body.message);
            }, response => {
                // error callback
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    //样式嵌套
    .home-container{
        // background-color: #ccc;
        // 轮播图样式
        .mint-swipe{
            height: 200px;
            .mint-swipe-item{
                // &:nth-child(1){
                //     background-color:red;
                // }
                // &:nth-child(2){
                //     background-color:green;
                // }
                // &:nth-child(3){
                //     background-color:blue;
                // }
                img{
                    width: 100%;
                }
            }
            
            
            
        }
    }
</style>

