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
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/newslist" tag="a"><img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/photolist"><img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/goodslist"><img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/newslist"><img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/newslist"><img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/newslist"><img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></router-link></li>
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
            this.$http.get('api/getlunbo').then(response => {
                // get body data
                this.imgs = response.body.message;
                // console.log(response.body.message);
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

        //九宫格 样式
        .mui-grid-9{
            background-color: #fff;
            //设置单元格边框样式
            .mui-table-view-cell{
                border: none;
            }
            
            //设置图标样式
            img{
                width: 50%;
            }
        } 
         
    }
</style>

