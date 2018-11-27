<template>
    <div class="app-container">
        <!-- 顶部的 Header 区域 -->
        <mt-header fixed title="易购商城"></mt-header>
        
        <!-- 中间的 路由 router-view 区域 -->
		<router-view class="router_view"></router-view>

        <!-- 底部 Tabbar 区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
   
</script>

<style lang="scss" scoped>
	.app-container{
		// margin-top: 40px;
		// padding-bottom: 40px;
		.mint-header{
			    background-color: red;
				font-weight: bold;
		}
		.router_view{
			margin-top: 40px;
			margin-bottom: 50px;
			// border: 2px solid black;
		}
	}
</style>
