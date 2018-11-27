<template>
    <div class="photolist-container">
        <van-tabs @change="getcatimages" v-model="active" swipeable animated sticky>
            <van-tab v-for="(item,index) in catlist" :title="item.title" :key="item.id">
                <div class="photolist" v-for="item in catimages" :key="item.id" v-lazy="item">
                    <router-link :to="'/home/photodetail/'+item.id" tag="a">
                        <!-- <img :src="item.img_url" alt=""> -->
                        <img v-lazy="item.img_url" alt="">
                        <div class="photodesc">
                            <h3>{{item.title}}</h3>
                            <div class="desc">{{item.zhaiyao}}</div>
                        </div>
                    </router-link>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        created(){
            //初始化 获取所有图片分类的数据
            this.getimgcategory();

            //初始化标签页 为全部图片数据
            this.getcatimages(0);
        },
        data(){
            return {
                catlist: [],
                catimages: [],
                active: 0  //默认选中的标签页
            }
        },
        methods:{
            //获取 图片分享 分类数据
            getimgcategory(){
                 //发送ajax_get请求, 获取所有图片分类数据
                this.$http.get('api/getimgcategory').then(res=>{
                    //请求成功时的回调函数
                    if(res.body.status == 0){
                        this.catlist = res.body.message;
                        //设置默认第一个分类为 全部 标签页
                        this.catlist.unshift({id:0, title:'全部'});
                    }
                });
            },
            
            //标签页单击事件
            getcatimages(index){
                // console.log(this.catlist.length);
                //初始化调用该方法时,catlist数组是空的
                var id = this.catlist.length == 0 ? 0 : this.catlist[index].id;
                 //发送ajax_get请求, 图片分类列表数据
                this.$http.get('api/getcatimages/'+id).then(res=>{
                    //请求成功时的回调函数
                    if(res.body.status == 0){
                        this.catimages = res.body.message;
                        // console.log(this.catimages);
                    }
                });
            }
        }   
    }
</script>

<style lang="scss" scoped>
    .photolist-container{
        .photolist{
            position: relative;
            img{
                width: 100%;
            }
            .photodesc{
                position: absolute;
                //让当前元素在父元素的最下面
                bottom: 0px;               
                color: #fff;
                background-color: rgba(#000, 0.5);
                h3{
                    font-size: 16px;
                }
                .desc{
                    font-size: 14px;
                }
            }
        }     
    }
</style>