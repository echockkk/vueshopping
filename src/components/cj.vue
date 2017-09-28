<template>
	<div class="cj">
		<div class="cj-title">
			<span class="left ch-left">最多企业</span>
			<a href="#" class="right">更多 ></a>
		</div>
		<div class="cj-content">
			<ul>
				<li>
					<a href="#">
						<p>充值</p>
						<p>返现+升会员</p>
						<div class="pic">
							<img src="../assets/images/2.png"/>
						</div>
					</a>
				</li>
				<li>
					<a href="#">
						<p>充值</p>
						<p>返现+升会员</p>
						<div class="pic">
							<img src="../assets/images/2.png"/>
						</div>
					</a>
				</li>
				<li>
					<a href="#">
						<p>充值</p>
						<p>返现+升会员</p>
						<div class="pic">
							<img src="../assets/images/2.png"/>
						</div>
					</a>
				</li>
				<li>
					<a href="#">
						<p>充值</p>
						<p>返现+升会员</p>
						<div class="pic">
							<img src="../assets/images/2.png"/>
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
	.cj {
		width: 100%;
		margin-top: 0.333333rem;
		background: #fff;
		padding-bottom: 0.333333rem;
	}
	.cj .cj-title {
		width: 100%;
		height: 1.333333rem;
		line-height: 1.333333rem;
	}
	.cj .cj-title span {
		font-size: 0.433333rem;
		color: #000;
		padding-left: 0.566667rem;
	}
	.cj .cj-title a {
		font-size: 0.333333rem;
		color: #666;
		padding-right: 0.333333rem;
		text-align: center;
	}
	.cj .cj-content ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.cj .cj-content li {
		min-width: 1.454167rem;
		flex: 1;
		margin-right: 0.166667rem;
		background: #fef4f5;
	}
	.cj .cj-content li:first-child {
		margin-left: 0.166667rem;
	}
	.cj .cj-content li a {
		display: block;
	}
	.cj .cj-content .pic {
		width: 50%;
		margin: 0 auto;
	}
	.cj .cj-content .pic img {
		width: 100%;
	}
	.cj .cj-content ul li a p:first-child {
		font-size: 0.433333rem;
		color: #ff87ac;
		line-height: 0.6rem;
	}
	.cj .cj-content ul li a p:nth-child(2) {
		font-size: 0.333333rem;
		color: #666;
		line-height: 1rem;
	}
</style>