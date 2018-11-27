<template>
    <div class="goods-container">
        yamade
    </div>
</template>

<script>
    export default {
        created(){
            //初始化 获取所有的商品数据
            this.getgoods();
        },
        data(){
            return {
                goodslist: [],
                pageindex: 1 //默认获取第1页
            }
        },
        methods:{
            //获取所有的商品数据
            getgoods(){
                //发送 ajax_get请求
                this.$http.get('api/getgoods?pageindex='+this.pageindex).then(res=>{
                    //成功时的回调函数
                    if(res.body.status == 0){
                        this.goodslist = res.body.message;
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .goods-container{

    }
</style>