
<template>
	
	<div 
	class="advert-search" 
	:style="{display: display}"
	:data-height="initial"
	>
		<button 
		class="opener"
		@click="toggleMenu"
		>^</button>
		
		<div class="advert-form">
			 Searching settings
			 
			<div>
				<div>country:</div>
				<Field
				tag="input"
				text="country"
				name="country"
				
				
				/>
			</div>

			<div>
				<div>city:</div>
				<Field
				tag="input"
				text="city"
				name="city"
				

				/>
			</div>

			<div>
				<div>kind of product:</div>
				<Field
				tag="select"
				name="productOption"
				text="kind"
				
				:options="kindOpts"
				/>
			</div>

			<div>
				<div>product:</div>

				<Field
				tag="input"
				name="product"
				text="product"
				
				/>
			</div>

			<div>
				<div>price:</div>
				<div class='advert-form-item'>
					<div>less than:</div>
					<Field
					tag="input"
					name="price"
					text="price"
					size="small"
					/>
				</div>
			</div>
			<div>
				<div>sort by:</div>
				<Field
				tag="select"
				name="sortOption"
				text="sort"
				
				:options="sortOpts"
				/>
			</div>

			<div>
				<div>order by:</div>
				<Field
				tag="select"
				name="order"
				text="order"
				
				:options="[{id:1,name:'newer'},{id:2,name:'cheaper'},{id:3,name:'all'}]"
				/>
			</div>
			<div>
				<Button 
				text="search"

				/>
			</div>
			
		</div>
	</div>

</template>	
	
<script>

	import {onMounted} from 'vue'
	import Field from '../Field.vue'
	import Button from '../Button.vue'

	export default {
		props: {
			opened: Boolean
		},

		mounted(){
			this.initial = getComputedStyle(this.$el).height;
		},

		

		

		data(){
			return {
				initial: 0,

				kindOpts: [
				{id:0,name:''},
				{id:1,name:'auto'},
				{id:2,name: 'housing'},
				{id:3,name:'household appliances'},
				{id:4,name: 'media devices'},
				{id:5,name: 'sports equipment'},
				{id:6,name: 'domestic animals'},
				{id:7,name: 'other'}


				],

				sortOpts: [
				{id:0,name:''},
				{id:1,name: 'publish date'},
				{id:2,name: 'price'},

				]
			}
		},
		components: {
			Field,
			Button	
		},

		methods: {

			toggleMenu(e){

				const menu = e.target.parentNode;
				const height = getComputedStyle(menu).height;

				parseInt(height) >= parseInt(this.initial) ?
				menu.style.height = `15px` : menu.style.height = this.initial;  

			}
		},

		computed: {
			display(){
				return this.opened ? 'flex' : 'none'
			},

		}

	}
</script>

<style lang="sass">
.advert-search
	overflow: hidden
	position: absolute
	flex-direction: column
	align-items: center
	width:22%
	height:100%
	background: grey
	z-index: 1
	transition: all 1s

	.advert-form
		div
			margin: 5px 0 5px 0
		button
			margin-top:15px

		



.advert-form-item

	display: flex
	align-items: center
	justify-content: space-between

.opener
	width:100%


	
</style>