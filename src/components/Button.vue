

<template>
	<div >
		<button  
		:class="[sizeableClass,theme]"
		v-on:click="handler"
		>
			{{text}}
		</button>
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
				handler: this.action ? this.action : function(){}
			}
		},

		computed: {
			sizeableClass: function(){
				switch(this.size){
					case 'small': return 'btn-s';
					case 'medium': return 'btn-m';
					case 'large': return 'btn-l';
					default: return 'btn';
				}
					
			}
		},

		
		methods:{
			 
		}
	}

</script>

<style lang='sass'>


button
	border:0
	outline:0
	&:hover
		cursor: pointer


@mixin set-size($w,$h,$font)
	width:$w
	height:$h
	font-size:$font

.btn-s
	@include set-size(80px, 30px, 14px)

.btn-m
	@include set-size(130px, 50px, 20px)

.btn-l
	@include set-size(180px, 70px, 24px)

.btn
	@include set-size(100%, 30px, 17px)
	

	
</style>

