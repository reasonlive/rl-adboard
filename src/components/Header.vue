<style lang='sass' >
@import '../styles/mixins.sass'

header
	
	display: flex
	justify-content: space-around
	height:100px

	
	img
		width:50px
		height:50px

	.logo-block
		height:100%
		@include flex-center
		flex-direction: column
		

	.menu-block
		@include flex(false,space-around,center)
		width:60%
		height:100%
		


		/// header buttons
		.header-btn
			width:150px
			height:50px
			@include flex-center




		.menu-opts
			z-index: 1
			ul
				position: absolute
				width: inherit
				margin-top:200px
				list-style-type: none
				padding-left:0
				

				li
					background: silver
					padding:10px 0 10px 0
					text-align: center
					font-size:14px
					@include radius

					&:hover
						background: orange
						color: black
</style>


<template>


<div>
		
	<header class="simple-viewed-item" >

		<router-link to="/">
			<div class='logo-block' >
				<img :src="logo" alt="logo" />
				<div class="h-title">advert+</div>
			</div>
		</router-link>
		
		<div class="menu-block">
			
				<div 
				@click="toggleOpts"
				 class='menu-opts header-btn strict-managed-item'
				 >
					adverts
					<ul>
							
						<li
						@click="toggleSearchMenu" 
						v-show="open">find advert
						</li>
						
						<router-link :to="pathPublish">
						<li v-show="open">publish advert</li>
						</router-link>
					</ul>
				</div>
				

				<router-link :to="pathLoginOrLogout">
				<div 
				class="header-btn strict-managed-item"
				@click="logout"
				>
					{{log ? 'logout' : 'login'}}
				</div>
				</router-link>
				
				<router-link :to="pathRegisterOrAccount">
				<div class="header-btn strict-managed-item">
					{{log ? 'account' : 'register'}}
				</div>
				</router-link>

				
			
		</div>

	</header>
	<LocationBar />
	</div>
</template>

<script>
	import {defineComponent} from 'vue'

	import LocationBar from './LocationBar.vue'
	import logo from '../img/logo.png'
	
	export default defineComponent({

		props: {
			toggleSearchMenu: Function
		},


		data(){
			return {
				logo: logo, //logo image
				log: false, //check auth session
				open: false, //toggle button 'adverts',
			}
		},

		created(){
			this.checkAuth();
		},

		components: {
			LocationBar
		},

		computed: {
			pathLoginOrLogout(){
				return this.log ? '/' : '/login'
			},
			pathRegisterOrAccount(){
				return this.log ? '/account' : '/register'
			},
			pathPublish(){
				return this.log ? '/add' : '/register'
			}
		},

		
		methods:{
			 
			 toggleOpts(e){
			 	this.open ? this.open = false : this.open = true;
			 },

			 checkAuth(){
			 	fetch('/api/entry/checkAuth')
			 	.then(response => response.json())
			 	.then(result => {
			 		if(result.auth)this.log = true;
			 		else this.log = false;
			 	})
			 },

			 logout(){
			 	if(this.log){
			 		fetch('/api/entry/logout');
			 		this.log = false;
			 		document.location.href = '/';

			 	} 
			 }
		},
		//template: temp
	})

</script>

