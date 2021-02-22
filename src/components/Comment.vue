<style lang='sass'>
.btn
 button
  width:300px
  height:50px
  padding:10px
  color:#fff 
  background:#000
  border:0
  outline:0
  &:hover
   color: black
   background: green
   cursor: pointer
	
</style>

<template>
	<div class='btn'>
		<button  v-on:click.prevent="showtip">
			{{btnText}}
		</button>
	</div>
</template>

<script>

	export default {
		data(){
			return {
				btnText: 'text for btn'
			}
		},

		
		methods:{
			 showtip (e) {
				console.log(e)
				alert('my button works');
			}
		}
	}

</script>

