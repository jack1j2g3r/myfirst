<template>
    <div class="newsdetail-container">
        <p class="title">{{detail.title}}</p>
        <p class="subtitle">
            <span>发表时间:{{detail.add_time | timeFormat}}</span>
            <span class="click">点击{{detail.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="detail.content"></div>
         <!-- 引入 评论 组件 -->
        <comment :artid="id"></comment>
    </div>
</template>

<script>
    //引入 comment.vue组件
    import comment from '../common/comment.vue';
    
    export default {
        created(){
            this.getnew();
        },
        data(){
            return {
                id: this.$route.params.id,
                detail: []
            }
        },
        methods:{
            getnew(){
                //获取请求参数
                //发送ajax_get请求,获取新闻详情数据
                this.$http.get('api/getnew/'+this.id).then(response=>{
                    if(response.body.status == 0){
                        //新闻详情获取成功
                        this.detail = response.body.message[0];
                        // console.log( response.body );
                    }else{
                        //新闻获取失败
                        Toast('新闻加载失败');
                    }
                   
                });
            }
        },
        components:{
            //将comment.vue组件注册到当前组件下
            comment
        }   
    }
</script>

<style lang="scss" scoped>
    .newsdetail-container{
        .title{
            font-size: 16px;
            color: red;
            text-align: center;
        }
        .subtitle{
            font-size: 14px;
            color: blue;
            .click{
                // display: flex;
                // justify-content: space-between;
                float: right;
            }

        }
        .content{
            padding: 0 4px;
        }
    }
</style>