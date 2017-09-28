<template>
	<div>
		<header-nav></header-nav>

		<!-- 轮播部分 -->
		<lb id="lb"></lb>
		

		<!-- 广告部分 -->
		<ad-nav></ad-nav>
   		

   		<!-- 更多抽奖部分 -->
   		<cj-nav></cj-nav>


   		<!-- 家庭保洁部分 -->
   		<home-nav></home-nav>
   		<home-nav></home-nav>
   		<home-nav></home-nav>
		

		<!-- 新闻中心部分 -->
		<new-nav></new-nav>


		<div class="home-bottom">
			<p>—— 我也是有底线的 ——</p>
		</div>
		<!-- 底部部分 -->
		<footer-nav v-bind:class="{'isActive':isNow}"></footer-nav>
	</div>
</template>
<script>
	import Swiper from '../../../static/swiper-3.4.2.min.js';
	import FooterNav from '../../components/footer.vue';
	import Lb from '../../components/lb.vue';
	import AdNav from '../../components/ad.vue';
	import HeaderNav from '../../components/header.vue';
	import CjNav from '../../components/cj.vue';
	import HomeNav from '../../components/home.vue';
	import NewNav from '../../components/new.vue';
	export default {
		components: {
			FooterNav,
			Lb,
			AdNav,
			HeaderNav,
			CjNav,
			HomeNav,
			NewNav
		},
		data(){
			return {
				isNow: true
			}
		}
	}
</script>
<style scoped>
	.home-bottom p {
		height: 1.333333rem;
		line-height: 1.333333rem;
		font-size: 0.333333rem;
		color: #666;
	}
</style>