<template>
	<div class="home">
		<div class="home-title">
			<span class="left">家庭保洁</span>
			<a href="#" class="right">更多 ></a>
		</div>
		<div class="home-content">
			<ul>
				<li>
					<a href="#">
						<div class="pic">
							<img src="../assets/images/5.jpg"/>
						</div>
						<p>超级管家超级管家超级管家</p>
						<p><span>158元/</span><span>4小时</span></p>
						<p>
							<i class="iconfont icon-wxbquandianguanjia"></i>
							<span>洁道夫</span>
						</p>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="pic">
							<img src="../assets/images/5.jpg"/>
						</div>
						<p>超级管家</p>
						<p><span>158元/</span><span>4小时</span></p>
						<p>
							<i class="iconfont icon-wxbquandianguanjia"></i>
							<span>洁道夫</span>
						</p>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="pic">
							<img src="../assets/images/5.jpg"/>
						</div>
						<p>超级管家</p>
						<p><span>158元/</span><span>4小时</span></p>
						<p>
							<i class="iconfont icon-wxbquandianguanjia"></i>
							<span>洁道夫</span>
						</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	.home {
		width: 100%;
		margin-top: 0.333333rem;
		background: #fff;
	}
	.home .home-title {
		width: 100%;
		height: 1.333333rem;
		line-height: 1.333333rem;
	}
	.home .home-title span {
		margin-left: 0.166667rem;
		padding-left: 0.333333rem;
		border-left: 0.066667rem solid #f7481d;
		color: #000;
		font-size: 0.433333rem;
		line-height: 0.5rem;
		margin-top: 0.333333rem;
	}
	.home .home-title a {
		padding-right: 0.333333rem;
		color: #666;
		font-size: 0.333333rem;
	}
	.home .home-content {
		width: 100%;
	}
	.home .home-content ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.home .home-content ul li {
		flex: 1;
		min-width: 1.966667rem;
		margin-right: 0.166667rem;
	}
	.home .home-content ul li:first-child {
		margin-left: 0.166667rem;
	}
	.home .home-content ul li a {
		display: block;
	}
	.home .home-content ul li a .pic {
		width: 100%;
	}
	.home .home-content ul li a .pic img {
		width: 100%;
	}
	.home .home-content ul li  a p {
		width: 118px;
		text-align: left;
	}
	.home .home-content ul li  a p:nth-child(2) {
		font-size: 0.433333rem;
		line-height: 0.766667rem;
		color: #000;
		width: 100%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap
	}
	.home .home-content ul li  a p:nth-child(3) {
		color: #d74e62;
		line-height: 0.666667rem;
	}
	.home .home-content ul li  a p:nth-child(3) span:first-child {
		font-size: 0.4rem;
	}
	.home .home-content ul li  a p:nth-child(3) span:nth-child(2) {
		font-size: 0.333333rem;
	}
	.home .home-content ul li  a p:nth-child(4) {
		font-size: 0.333333rem;
		color: #666;
		padding-bottom: 0.333333rem;
		padding-top: 0.15rem;
	}
	.home .home-content ul li  a p:nth-child(4) i {
		vertical-align: top;
	}
	.home .home-content ul li  a p:nth-child(4) span {
		vertical-align: top;
	}
</style>