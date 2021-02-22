
<template>
	<div>
		<Header :toggleSearchMenu="toggleMenu" />
		<Main :menu="menu"/>
		<Footer />
		
	</div>
	
</template>

<script>
	import "./styles/main.sass"
	import {defineComponent} from 'vue'

	import Header from './components/Header.vue'
	import Main from './components/Main.vue'
	import Footer from './components/Footer.vue'
	//import FormAccount from './components/Forms/FormAccount.vue'
	//import FormAdvert from './components/Forms/FormAdvert.vue';

	



	export default defineComponent({

		data(){
			return {
				menu: false
			}
		},

		methods: {
			toggleMenu(){
				this.menu ? this.menu = !this.menu : this.menu = true;
			}
		},

		components: {
			Header,
			Main,
			Footer,
			//FormAccount,
			//FormAdvert
		},


		
	})

</script>

