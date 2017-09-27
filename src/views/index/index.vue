<template>
	<div>
		<!-- 头部搜索部分 -->
		<header>
			<div class="search">
				<div class="search-box">
					<i class="iconfont icon-fangdajing"></i>
					<input type="text" placeholder="快速搜索商家"/>
				</div>
			</div>
		</header>

		<!-- 轮播图部分 -->

		<footer-nav v-bind:class="{'isActive':isNow}"></footer-nav>
	</div>
</template>
<script>
	import FooterNav from '../../components/footer.vue'
	export default {
		components: {
			FooterNav
		},
		data(){
			return {
				isNow: true
			}
		}
	}
</script>
<style scoped>
	header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
	}
	header .search {
		width: 100%;
		height: 2rem;
		display: flex;
        align-items: center;
	}
	.search-box {
		width: 80%;
		height: 1.166667rem;
		position: relative;
		margin-left: 2.5rem;
	}
	.search-box i {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		font-size: 1rem;
	}
	.search-box input {
		position: absolute;
		top: 0;
		left: 0;
		width: 80%;
		height: 1.166667rem;
		border: 1px solid #000;
		border-radius: 0.833333rem;
		padding-left: 1rem;
		background: rgba(255,255,255,0.4);
		font-size: 0.433333rem;
	}
</style>