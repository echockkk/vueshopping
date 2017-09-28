<template>
	<!-- 头部搜索部分 -->
	<div class="header">
		<header>
			<div class="search">
				<div class="search-box">
					<i class="iconfont icon-fangdajing"></i>
					<input type="text" placeholder="快速搜索商家"/>
				</div>
			</div>
		</header>
	</div>
</template>

<style scoped>
	/*头部部分*/
	
	header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		background: rgba(128,128,128,0);
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

</style>