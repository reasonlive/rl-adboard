<template>
	<div class="ad simple-viewed-item">
		<div class="ad_block">
			
			<div class="ad_title">{{data.title}}</div>

			<div class="common-wrapper">
				
			

				<div class='photos-wrapper' >

					
						<div class="ad_photo-big">
							<img  :src="active" alt="photo">
						</div>
					
						<div class="ad_photo-small" >
							<div v-for="(photo,ind) in data.photos">
								<img 
								:key="ind" 
								:src="photo" 
								alt="1" 
								@click="switchPhoto"
								/>
							</div>
							
							
						</div>
						
					

					

				</div>

				<div class='info-wrapper'>
					<div class="ad_description">
						<div class="ad_description_item">
							{{data.description}}
						</div>
					</div>
					<div class="ad_personal-info">
						<div>location: {{data.city}}</div>
						<div>phone number: {{data.phone 
						? data.phone : 'unknown'}}</div>
					</div>
				</div>
			</div>

			
		</div>
		<div class="ad_comments">
				<div class="comment-item">comment</div>
			</div>
	</div>
</template>

<script>

			//title: String,
			//photo: String,
			//description: String,
			//city: String,
			//phone: String,
			//id: String,

	export default {
		props: {
			data: Object
		},

		data(){
			return{

				active: this.data.photos[0]
			}
		},

		methods: {
			switchPhoto(e){
				this.active = e.target.src
			}
		}
	}
</script>

<style lang="sass">
@import '../styles/mixins.sass'

.common-wrapper
	@include flex


.photos-wrapper
	@include flex(true)
	width:100%
	height:100%

.info-wrapper
	@include flex(true)
	width:100%


.ad
	overflow: hidden
	width:100%
	height:100%
	@include flex-center(true)

	.ad_block
		font: 20px Helvetica, sans-serif
		width:90%
		height:90%
		background: palegreen
		@include radius(10px)


		.ad_title
			border-radius: inherit
			height:30px
			background: lightcyan
			@include flex-center
			font: bold 24px Verdana, sans-serif

		


		.ad_photo-big
			height:330px
			
			@include flex-center
			img
				max-width:100%
				max-height:100%

		.ad_photo-small
			height:70px
			width:100%
			
			@include flex-center

			img
				width:100px
				height:100%
				cursor: pointer
				transition: all 0.4s
				&:hover
					transform: scale(1.1)

		.ad_description
			width:100%
			
			height:80%
			@include flex-center

			div
				@include radius(10px)
				padding: 10px
				width:90%
				height:200px
				background: lightcyan

		.ad_personal-info
			width:100%
			height:20%
			
			@include flex(false,space-around,center)


		

</style>