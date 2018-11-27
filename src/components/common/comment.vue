<template>
    <!-- 评论区 -->
    <div class="comment_container">
        <h3>发表评论</h3>
        <hr>
        <textarea name="content" v-model="content" id="" class="comment" placeholder="请输入要BB的内容(最多BB120个字)"></textarea>
        <mt-button type="primary" size="large" class="postComment" @click="postComment">发表评论</mt-button>
        <div class="list" v-for="(item,index) in comments" :key="item.index">
            <div class="list-item">
                <div class="user">第{{index+1}}楼 用户:{{item.username}} 发表时间: {{item.add_time | timeFormat}}</div>
                <div class="info">{{item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" plain size="large" class="loadMore" @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>
    //导入 Vue 模块
    import Vue from 'vue';
    //导入 按钮 组件
    import { Button } from 'mint-ui';
    Vue.component(Button.name, Button);

    //引入 mint-ui 弹窗 组件
    import { Toast } from 'mint-ui';

    export default {
        created(){
            //初始化最新的评论数据
            this.getNewestComments();
        },
        data(){
            return {
                comments: [],
                newestcomments:[],
                oldcomments:[],
                pageindex: 1,
                content: ''
            };
        },
        props:['artid'],
        methods:{
            //获取最新的几条评论数据, 获取最新的几条评论数据(默认第一页),放到newestcomments数组中
            getNewestComments(){
               //发送ajax_get请求,获取接口数据
                this.$http.get('api/getcomments/'+this.artid+'?pageindex=1').then(response=>{                         
                    //成功获取响应数据
                    if(response.body.status == 0){
                        this.newestcomments = response.body.message; //获取最新的评论数据
                        //将newestcomments数组和oldcomments数组进行拼接,放到comments数组中
                        this.comments = this.newestcomments.concat(this.oldcomments);
                    }
                })
            },
            //提交评论; 
            postComment(){
                if(this.content == ''){
                    Toast({
                        message: '评论不能为空',
                        position: 'middle',
                        duration: 1000
                    });
                    return ;
                }
                //发送ajax_post请求, 将评论的数据提交到数据库中
                this.$http.post('api/postcomment/'+this.artid+'',{'content':this.content},{emulateJSON:true})
                .then(res=>{                    
                    //console.log(res.body.message);
                    if(res.body.status == 0){
                        Toast('评论提交成功');
                        //清空文本框中的数据
                        this.content = '';
                        //评论成功后,重新请求数据库,获取该文章最新的几条评论数据                  
                        this.getNewestComments();
                    }else{
                        Toast('评论提交失败');
                    }
                });
            },
            //加载老评论(将老评论的数据放到oldcomments数组中)
            loadMore(){
               //发送ajax_get请求,获取下一页评论数据
               this.pageindex += 1;
               this.$http.get('api/getcomments/'+this.artid+'?pageindex='+this.pageindex).then(response=>{                         
                    //成功获取响应数据
                    if(response.body.status == 0){
                        if(response.body.message.length != 0){
                            //响应回来的数据不为空
                            //将响应回来的数据拼接到oldcomments数组中
                            this.oldcomments = this.oldcomments.concat( response.body.message );
                            //将newestcomments数组和oldcomments数组进行拼接,放到comments数组中
                            //concat()方法的好处是,合并两个数组的元素,并将相同的元素合并为一个
                            this.comments = this.newestcomments.concat(this.oldcomments);
                        }else{
                            Toast('没有更多评论了');
                            this.pageindex -= 1 ;
                        }
                    }
                })
            }
        }
    };
</script>

<style lang="scss" scoped>
    .comment_container{
        padding: 0 4px;
        h3{
            font-size: 18px;
        }
        .comment{
            height: 100px;
            font-size: 16px;
            margin-bottom: 5px;   
        }
        .postComment{
            margin-bottom: 5px;
        }
        .list{
            .user{
                height: 30px;
                background-color: #ccc;
                font-size: 14px;
                line-height: 30px;
            }
            .info{
                height: 40px;
                line-height: 40px;
                background-color: #blue;
            }
        }
        .loadMore{

        }
        
    }
</style>