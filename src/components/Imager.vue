

<template>
	<div class="imager">
		
		<div class="slider">
			<div v-for="(img,ind) in images" >
				<img :src="img.src"
				 alt="photo"
				  width=80 
				  height=80
				  @click="openPopup"
				   />
			</div>

			<div v-for="(photo,ind) in photos " >
				
				<img 
				:key="ind" 
				:src="photo" 
				alt="photo" 
				width=80 
				height=80 
				@click="openPopup"
				/>
				
			</div>
		</div>

		<div class="imager_popup">
			<span 
			class="closer"
			@click="closePopup"
			>&times;</span>
			<div class="imager_img">
				<img :src="active" alt="photo">
			</div>
			
		</div>
		
	</div>
</template>

<script>

	export default {
		props: {
			images: Array,
			//adId: String,
			//userId: String,
			//photos: Array
		},

		data(){
			return {
				adId: '',
				userId: '',
				photos: [],
				active: '',
				
			}
		},

		methods:{

			//popup shows the photo in its full measures
			 closePopup(){
			 	document.getElementsByClassName('imager_popup')[0]
			 	.style.display = 'none';
			 },

			 openPopup(e){
			 	
			 	this.active = e.target.src;
			 	document.getElementsByClassName('imager_popup')[0]
			 	.style.display = 'block';
			 }
		}
	}

</script>

<style lang='sass'>

@import '../styles/mixins.sass'



.imager
	width:80%
	height:80px
	@include flex-center


	.imager_popup
		position: absolute
		left: 0px
		top: 0px
		width: 100%
		height: 800px
		background: rgba(0,0,0,0.7)
		z-index: 1
		display: none


		.imager_img
			width: 100%
			height: 100%
			display: flex
			justify-content: center

			img
				height: 500px

		

		.closer
			width:40px
			height:50px
			background: black
			position: absolute
			top:0
			right:0
			font-size:3em
			text-align: center
			cursor: pointer
			color: white
			&:hover
				color: black
				background: white


	.slider
		width:100%
		@include flex-center
		
		
		img
			&:hover
				transition: all 1s
				transform: scale(1.1)
				cursor: pointer
				border:1px solid orange


	

	
</style>



