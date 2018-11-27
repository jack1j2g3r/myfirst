<template>
    <!-- 图片详情区 -->
    <div>
        <div class="photodetail-container">
            <h1 class="title">{{photoInfo.title}}</h1>
            <p class="subtitle">
                <span class="pubtime">发表时间:{{photoInfo.add_time | timeFormat}}</span>
                <span class="click">点击:{{photoInfo.click}}次</span>
            </p>
            <hr>
            <!-- 缩率图区 -->
            <!-- <div class="thumb" v-for="item in thumbs" :key="item.src">
                <img :src="item.src" alt="">
            </div> -->
            <vue-preview :slides="thumbs" @close="handleClose"></vue-preview>
            <!-- 图片内容区 -->
            <div class="content" v-html="photoInfo.content"></div>
        </div>
        <!-- 评论区 -->
        <comment :artid="imgid"></comment>
    </div>
</template>

<script>
    //导入 评论 组件
    import comment from '../common/comment.vue';

    export default {
        created(){
            //初始化 获取图片描述信息
            this.getimageInfo();
            //初始化 获取缩率图
            this.getthumbs();
        },
        data(){
            return {
                imgid: this.$route.params.id,
                photoInfo: [],
                thumbs: []
            }
        },
        methods:{
            //获取图片详情数据
            getimageInfo(){
                // console.log('111');
                //发送ajax_get请求
                this.$http.get('api/getimageInfo/'+this.imgid).then(res=>{
                    if(res.body.status == 0){
                        this.photoInfo = res.body.message[0];
                        // console.log(res.body.message);
                    }
                });               
            },

            //获取 缩率图
            getthumbs(){
                this.$http.get('api/getthumbimages/'+this.imgid).then(res=>{
                    console.log(res.body.message);
                    if(res.body.status == 0){
                        if(res.body.message.length != 0){
                            res.body.message.forEach(ele => {
                                //给对象的每一个元素添加宽高属性
                                ele.w = 600;
                                ele.h = 400;
                                ele.msrc = ele.src;
                            });
                            this.thumbs = res.body.message;
                            // console.log(res.body.message);
                        }
                    }
                });
            },

            //点击 还原缩率图
            handleClose() {
                console.log('close event')
            }
        },
        components:{
            comment
        }
    }
</script>

<style lang="scss" scoped>
    .photodetail-container{
        padding: 0 5px;
        h1{
            font-size: 16px;
            color: #3399ff;
            text-align: center;
            height: 30px;
            line-height: 30px;
        }
        .subtitle{
            .click{
                float: right;
            }
        }
        .content{
            text-indent: 2em;
            color: #34495e;
        }
    }
</style>