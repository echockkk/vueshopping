<template>
	<footer-nav v-bind:class="{'isOrder':isNow}"></footer-nav>
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