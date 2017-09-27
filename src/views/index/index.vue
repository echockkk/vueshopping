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
		<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide"><img src="../../assets/images/1.jpg"></div>
	            <div class="swiper-slide"><img src="../../assets/images/1.jpg"></div>
	            <div class="swiper-slide"><img src="../../assets/images/1.jpg"></div>
	            <div class="swiper-slide"><img src="../../assets/images/1.jpg"></div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination iconlb"></div>
   		</div>

   		<!-- 第二部分轮播 -->
   		<div class="swiper-content">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide">
	            	<ul>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂保洁月嫂保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            	</ul>
	            </div>
	            <div class="swiper-slide">
	            	<ul>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            	</ul>
	            </div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination icondd"></div>
   		</div>

   		<!-- 广告部分 -->
   		<div class="ad">
   			<ul class="clearfix">
   				<li class="left ch-left">
   					<p>新客户立减专区</p>
   					<p>家庭保洁低至25元/小时</p>
   					<div class="pic">
   						<img src="../../assets/images/3.jpg"/>
   					</div>
   				</li>
   				<li class="right ch-right">
   					<div class="ch-ty top clearfix">
   						<div class="left">
   							<p>足疗套餐</p>
   							<p>首减20，低至118元</p>
   						</div>
   						<div class="pic right">
   							<img src="../../assets/images/4.jpg">
   						</div>
   					</div>
   					<div class="ch-ty bottom clearfix">
   						<div class="left">
   							<p>签证办理</p>
   							<p>最快仅需3个工作日</p>
   						</div>
   						<div class="pic right">
   							<img src="../../assets/images/4.jpg">
   						</div>
   					</div>
   				</li>
   			</ul>
   		</div>

		<footer-nav v-bind:class="{'isActive':isNow}"></footer-nav>
	</div>
</template>
<script>
	import Swiper from '../../../static/swiper-3.4.2.min.js';
	import FooterNav from '../../components/footer.vue'
	export default {
		components: {
			FooterNav,
			Swiper
		},
		data(){
			return {
				isNow: true
			}
		},
		mounted() {
		    var mySwiper = new Swiper('.home_banner .swiper-container', {
		      direction: 'horizontal',
		      loop: true
			});
			var mySwipertwo = new Swiper('.home_banner .swiper-content', {
		      direction: 'horizontal'
			});
			var swiper = new Swiper('.swiper-container', {
	            pagination: '.swiper-pagination',
	            slidesPerView: 1,
	            paginationClickable: true,
	            spaceBetween: 30,
	            loop: true,
	            autoplay: 2000,
	            autoplayDisableOnInteraction: false
	        });
	        var swiperTwo = new Swiper('.swiper-content', {
	            pagination: '.swiper-pagination',
	            slidesPerView: 1,
	            paginationClickable: true,
	            spaceBetween: 30
	        });
		}
	}

</script>
<style scoped>
	/*头部部分*/
	html,body {
		background: #f5f5f5;
	}
	header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
	header .search {
		width: 100%;
		height: 1.6rem;
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
		top: 0.15rem;
		left: 0.2rem;
		z-index: 10;
		font-size: 0.8rem;
		color: #fff;
	}
	.search-box input {
		position: absolute;
		top: 0;
		left: 0;
		width: 80%;
		height: 1.166667rem;
		border-radius: 0.833333rem;
		padding-left: 1rem;
		background: rgba(255,255,255,0.4);
		font-size: 0.5rem;
	}
	input::-webkit-input-placeholder{
		color: #fff;
	}


	/*轮播图部分*/
	.swiper-container,.swiper-content {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }
    .swiper-content a {
    	display: block;
    	width: 100%;
    	color: #000;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-slide>img {
    	display: block;
    	width: 100%;
    }
    .iconlb {
    	top: 4.15rem;
    }


    /*第二部分轮播图*/
    .swiper-slide ul {
    	width: 100%;
    	padding: 1rem 0;
    	padding-top: 0.6rem;
    }
    .swiper-slide li {
    	float: left;
    	width: 25%;
    }
    .swiper-slide li div {
    	width: 70%;
    	margin: 0 auto;
    }
    .swiper-slide li div img {
    	width: 100%;
    	display: block;
    }
    .swiper-slide li p {
    	font-size: 0.5rem;
    	line-height: 1rem;
    	height: 1rem;
    	width: 100%;
    	overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
    }
    .icondd {
    	top: 3.5rem;
    }

    /*广告部分*/
    .ad {
    	width: 100%;
    	background: #fff;
    	padding: 0.166667rem;
    }
    .ad ul {
    	width: 100%;
    	display: flex;
    }
    .ad ul li {
    	flex: 1;
    	background: #fafafa;
    }
    .ad ul .ch-left {
    	margin: 0 0.333333rem;
    }
    .ad ul .ch-left .pic {
    	width: 3rem;
    	height: 3rem;
    	margin: 0 auto;
    }
    .ad ul .ch-right {
    	margin-right: 0.333333rem;
    	background: #fff;
    }
    .ad ul .ch-right .ch-ty .pic {
    	width: 1.666667rem;
    	height: 1.666667rem;
    }
    .ad ul .ch-right .ch-ty .pic img,.ad ul .ch-left .pic img {
    	width: 100%;
    	display: block;
    }
    .ad ul .ch-right .ch-ty>div {
    	background: #fafafa;
    }
    .ad ul .ch-right .ch-ty .top {
    	margin-bottom: 0.333333rem;
    }
    .ad ul p {
    	font-size: 0.5rem;
    	color: #000;
    	line-height: 0.6rem;
    	text-align: left;
    }
    .ad ul .ch-left p:nth-child(2){
    	font-size: 0.4rem;
    	color: #be1b50;
    	line-height: 0.6rem;
    	text-align: left;
    }
</style>