<template>
	<div class="ad-item" :data-id="data.id">
		<div class='item-title'>{{data.title}}</div>
		<img class="item-photo" :src="data.photo" alt="photo">
		<div class="item-descr">{{data.description}}</div>
		<div class="item-info">
			<div class="item-info_city">
				{{data.city}}
			</div>
			<div class="item-info_phone">
				{{data.phone}}
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		props:{
			data: Object,
			
		},
		data(){
			return {

			}
		},
		components: {

		},
		methods: {

		}
	}
</script>

<style lang="sass">
@import '../styles/mixins.sass'

.ad-item
	@include flex-center(true)
	width:200px
	height: 200px
	background: lightsalmon
	cursor: pointer
	transition: all 0.4s
	&:hover
		transform: scale(1.05)
		outline: 1px solid red

	.item-title
		font-weight: bold
		overflow: hidden

	.item-photo
		width:100%
		height:60%
		background: white

	.item-descr
		height:50px
		overflow: hidden

	.item-info
		width:100%
		background: goldenrod

		@include flex(space-between)

	.item-info_city
		max-width:100px
		overflow: hidden
		



</style>