<template>
	<div class="footer">
		<ul>
			<li><router-link to="/"><i class="iconfont icon-shouye"></i><span>首页</span></router-link></li>
			<li><router-link to="/sort"><i class="iconfont icon-fenlei"></i><span>分类</span></router-link></li>
			<li><router-link to="/order"><i class="iconfont icon-dingdan"></i><span>订单</span></router-link></li>
			<li><router-link to="/my"><i class="iconfont icon-wode"></i><span>我的</span></router-link></li>
		</ul>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	.footer {
		width: 100%;
		height: 1.433333rem;
		padding-top: 0.3rem;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #fff;
	}
	.footer ul {
		width: 100%;
		height: 100%;
		display: flex;
	}
	.footer ul li {
		flex: 1;
		line-height: 1.733333rem;
	}
	.footer ul li  a {
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		color: #505050;
		line-height: 1.733333rem;
	}
	.footer ul li a i {
		display: block;
		font-size: 0.666667rem;
		line-height: 0.933333rem;
	}
	.footer ul li a span {
		display: block;
		font-size: 0.3rem;
		line-height: 0.6rem;
	}
	.isActive ul li:first-child a,.isSort ul li:nth-child(2) a,.isOrder ul li:nth-child(3) a,.isMy ul li:last-child a{
		color: #f66e56;
	}
</style>