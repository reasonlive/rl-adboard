<template>
	<div class="ad-block" >
		<div 
		class="ad-block_inner light-viewed-item"
		v-for="(obj,ind) in data"
		>

			<div class='ad-item' :key="ind">
				<router-link 
				:to="{name: 'ad', params: {id: obj.id}}"
				>
					<AdItem
					:data="obj"
					/>
				</router-link>
				
			</div>

			
		

		
		</div>
	</div>
</template>

<script>

	import AdItem from './AdItem.vue';
	export default{
		
		data(){
			return {
				data:[]
			}
		},
		created(){
			this.fetchAds()
		},

		components: {
			AdItem
		},
		methods: {
			fetchAds(){
				fetch('/api/ads')
				.then(response => response.json())
				.then(result => {
					result.success ? this.data = result.data : this.data = []
				})
				.catch(err => console.log(err))
			}
		},
		
		/*beforeRouteEnter(){

		},
		beforeRouteUpdate(){

		}*/

	}
</script>

<style lang="sass">
@import '../styles/mixins.sass'

.ad-block
	@include flex-center
	width:100%
	height:100%
	

	.ad-block_inner
		overflow: auto
		display: flex
		flex-flow: row wrap
		width:90%
		height:90%
		

		.ad-item
			margin: 45px
		

</style>