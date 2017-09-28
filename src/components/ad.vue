<template>
	<!-- 广告部分 -->
	<div class="sectionad">
		<div class="ad">
			<ul class="clearfix">
				<li class="left ch-left">
                    <a href="#">
    					<p>新客户立减专区</p>
    					<p>家庭保洁低至25元/小时</p>
    					<div class="pic">
    						<img src="../assets/images/3.jpg"/>
    					</div>
                    </a>
				</li>
				<li class="right ch-right">
                    <a href="#">
    					<div class="ch-ty top clearfix">
    						<div class="content left">
    							<p>足疗套餐</p>
    							<p>首减20,低至118元</p>
    						</div>
    						<div class="pic right">
    							<img src="../assets/images/4.jpg">
    						</div>
    					</div>
                    </a>
                    <a href="#">
    					<div class="ch-ty bottom clearfix">
    						<div class="content left">
    							<p>签证办理</p>
    							<p>最快仅需3个工作日</p>
    						</div>
    						<div class="pic right">
    							<img src="../assets/images/4.jpg">
    						</div>
    					</div>
                    </a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
	  /*广告部分*/
    .sectionad {
        margin-top: 0.25rem;
    }
    a {
        display: block;
      }
    .ad {
    	background: #fff;
    	padding: 0.2rem;
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
        padding-top: 0.333333rem;
        padding-left: 0.5rem;
    	margin-right: 0.2rem;
    }
    .ad ul .ch-left .pic {
    	width: 3rem;
    	height: 3rem;
    	margin: 0 auto;
    }
    .ad ul .ch-right {
    	background: #fff;
        display: flex;
        flex-direction: column;
    }
    .ad ul .ch-right>a {
        flex: 1;
        background: #fafafa;
    }
    .ad ul .ch-right>a>div {
        padding-left: 0.5rem;
        height: 100%;
        position: relative;
    }
    .ad ul .ch-right a .pic {
        position: absolute;
        right: 0;
        bottom: 0;
    	width: 1.34rem;
    	height: 1.34rem;
    }
    .ad ul .ch-right .ch-ty .pic img,.ad ul .ch-left .pic img {
    	width: 100%;
    	display: block;
    }
    .ad ul .ch-right a:nth-child(1) {
    	margin-bottom: 0.2rem;
    }
    .ad ul p {
    	font-size: 0.433333rem;
    	color: #000;
    	line-height: 0.6rem;
    	text-align: left;
    }
    .ad ul .ch-left p:nth-child(2) {
    	font-size: 0.4rem;
    	color: #be1b50;
    	line-height: 0.6rem;
    	text-align: left;
        
    }
    .ad ul .ch-right .top .content p:nth-child(2) {
        color: #78b8db;
    }
    .ad ul .ch-right .bottom .content  p:nth-child(2) {
        color: #f5c034;
    }
    .ad ul .ch-left p:nth-child(2),.ad ul .ch-ty .content p:nth-child(2) {
        font-size: 0.4rem;
        line-height: 1rem;
    }
    .ad ul .ch-ty .content p:nth-child(1) { 
        padding-top: 0.333333rem;
    }

</style>