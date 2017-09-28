<template>
	<div class="new">
		<div class="new-title">
			<span class="left">新闻中心</span>
			<a href="#" class="right">查看更多</a>
		</div>
		<div class="new-content">
			<ul>
				<li>
					<a href="#">
						<span class="li-content">强力推出强力推出强力推出强力推出强力推出</span>
						<span class="li-time">2017-09-14</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="li-content">强力推出</span>
						<span class="li-time">2017-09-14</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="li-content">强力推出</span>
						<span class="li-time">2017-09-14</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="li-content">强力推出</span>
						<span class="li-time">2017-09-14</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="li-content">强力推出</span>
						<span class="li-time">2017-09-14</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="li-content">强力推出</span>
						<span class="li-time">2017-09-14</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="li-content">强力推出</span>
						<span class="li-time">2017-09-14</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="li-content" id="left">强力推出</span>
						<span class="li-time">2017-09-14</span>
					</a>
				</li>
			</ul>
		</div>
	</div>


</template>


<style scoped>
	.new {
		width: 100%;
		background: #fff;
		margin-top: 0.25rem;
	}
	.new .new-title {
		width: 100%;
		height: 1.333333rem;
		line-height: 1.333333rem;
	}
	.new .new-title span {
		margin-left: 0.166667rem;
		padding-left: 0.333333rem;
		font-size: 0.433333rem;
		line-height: 0.5rem;
		color: #ea4600;
		border-left: 0.066667rem solid #ea4600;
		margin-top: 0.5rem;
		font-weight: 700;
	}
	.new .new-title a {
		font-size: 0.333333rem;
		color: #666;
		padding-right: 0.333333rem;
	}
	.new .new-content {
		width: 100%;
	}
	.new .new-content ul li {
		width: 96%;
		margin: 0 auto;
		border-bottom: 1px dashed #ccc;
		height: 1.166667rem;
		line-height: 1.166667rem;
	}
	.new .new-content ul li a {
		height: 1.166667rem;
		display: block;
	}
	.new .new-content ul li a .li-content {
		display: inline-block;
		color: #000;
		font-size: 0.433333rem;
		padding-left: 0.333333rem;
		width: 75%;
		text-align: left;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.new .new-content ul li a .li-time {
		color: #666;
		font-size: 0.3rem;
		float: right;
		padding-right: 0.333333rem;
	}
	.new .new-content ul li:last-child {
		border: 0;
	}
	
</style>