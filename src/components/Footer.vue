<style lang='sass'>
footer
	display: flex
	justify-content: space-around
	width:100%
	height:100px
	background-color: lightgreen
	font:20px Tahoma, sans-serif

	.f-item
		display: flex
		flex-direction: column
		justify-content: center

</style>


<template>


	<footer>
		<div class='f-item'>
			<span>reasonlive</span>
			<span>&copy; 2021</span>
		</div>

		<div class='f-item'>
			<span>my repos:</span>
			<span><a href="https://github.com/reasonlive">look at</a></span>
		</div>

		<div class='f-item'>
			<span>my contacts:</span>
			<span>telegram: @find_me_h</span>
			<span>email: digitmind@protonmail.com</span>
		</div>
		
	</footer>

</template>

	<script>

	
	import {defineComponent} from 'vue'
	export default defineComponent({
			
	})

</script>

