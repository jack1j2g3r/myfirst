<template>
    <div class="newslist-container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsdetail/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'><span>{{item.add_time | timeFormat}}</span><span class="click">点击{{item.click}}次</span></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        created(){
            this.getNewslist();
        },
        data(){
            return {
                newslist: []
            };
        },
        methods: {
           getNewslist(){
               //发送ajax_get请求,获取新闻列表数据
               this.$http.get('api/getnewslist').then(response=>{
                   this.newslist = response.body.message;
                //    console.log(this.newslist);
               });
           }
        }
    }
</script>

<style class="scss" scoped>
    .mui-ellipsis{
        .click{
            float: right;
        }
    }
</style>