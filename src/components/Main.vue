<style lang='sass'>

main
	width:100%
	height:500px
	background: khaki
	display: flex
	position: relative
	overflow: hidden
	
</style>

<template>
	<main>
		
		<FormAdvertSearch  :opened="val"/>
		<router-view></router-view>
		
	</main>
</template>


<script>

	import {defineComponent} from 'vue'
	import FormAdvertSearch from './Forms/FormAdvertSearch.vue'

	
	export default defineComponent({
		props: {
			menu: Boolean
		},
		components: {
			FormAdvertSearch
		},

		computed: {
			val(){
				return this.menu ? true : false
			}
		}
		
		
	})

</script>

