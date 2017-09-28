<template>
	<div class="lb" id="lb">
	<!-- 轮播图部分 -->
		<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide"><img src="../assets/images/1.jpg"></div>
	            <div class="swiper-slide"><img src="../assets/images/1.jpg"></div>
	            <div class="swiper-slide"><img src="../assets/images/1.jpg"></div>
	            <div class="swiper-slide"><img src="../assets/images/1.jpg"></div>
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
		            				<img src="../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂保洁月嫂保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../assets/images/2.jpg">
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
		            				<img src="../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../assets/images/2.jpg">
		            			</div>
		            			<p>保洁月嫂</p>
	            			</a>
	            		</li>
	            		<li>
	            			<a href="#">
		            			<div class="pic">
		            				<img src="../assets/images/2.jpg">
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
   	</div>
</template>

<script>
	export default {
		components: {
			Swiper
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
    	padding: 0.6rem 0;
    }
    .swiper-slide li {
    	float: left;
    	width: 20%;
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
    	font-size: 0.42rem;
    	line-height: 1rem;
    	height: 1rem;
    	width: 100%;
    	overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
    }
    .swiper-content {
    	width: 100%;
    	overflow: hidden;
    }
    .swiper-content .swiper-wrapper {
    	width: 200%;
    }
    .icondd {
    	top: 3.2rem;
    }
</style>