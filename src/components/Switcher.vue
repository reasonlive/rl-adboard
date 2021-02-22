

<template>
	<div class='switcher'>
		<div class='switcher-btns'>
			<div 
			@click="handleSwitcher" 
			class="runner runner-off"
			>{{switcher}}</div>
			<div @click="handleSwitcher" >on</div>
			<div @click="handleSwitcher" >off</div>
		</div>
	</div>
</template>

<script>
	//import "../styles/main.sass"
	export default {
		props: {
			size: String,
			theme: String,
			action: Function,
			text: String
		},

		data(){
			return {
				switcher: "off",
				handler: this.action ? this.action : function(){}
			}
		},

		computed:{
			
		},

		
		methods:{

			handleSwitcher(e){

				let runner = document.getElementsByClassName('runner')[0];
			 		

			 	if(e.target.innerHTML == 'on'){

			 		runner.classList.add('runner-on');
			 		this.switcher = 'on';
			 	}
			 	else{
			 		runner.classList.remove('runner-on');
			 		this.switcher = 'off';
			 	} 

			}
		}
	}

</script>

<style lang='sass'>
@import '../styles/mixins.sass'

.switcher
	width:100px
	height:40px

	.switcher-btns
		@include flex-center
		background: lightgreen
		height: 100%
		position: relative
		border-radius:10px
		div
			font-size: 20px
			font-weight: bold
			@include flex-center
			background: lightgreen
			height: 100%
			width: 100%
			@include radius(10px)

			&:hover
				cursor: pointer

			
			
			
.runner
	position: absolute
	top:0
	right:0
	background: red !important
	width: 50% !important
	color: white
	transition: all 0.1s


.runner-on
	right:50% !important


	
</style>

