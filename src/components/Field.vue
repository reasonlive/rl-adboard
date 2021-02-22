

<template>
	<div v-if="tag === 'input' " >
	<input 
	type="text" 
	:class="[sizeableClass,theme]"
	:placeholder="text"
	:name="name"
	:id="name"
	>
	</div>

	<div v-else-if="tag === 'select' " >
		<select 
		:name="name"
		:id="name"
		:class="[sizeableClass,theme]"
		@change="changeIt"
		:multiple="multiple"
		 >
			<option
			
			v-for="(option,ind) in options" 
			:value="option.id"
			:key="ind" >
			{{option.name}}
			</option>

		</select>
	</div>

	<div v-else-if=" tag === 'textarea' ">
		<textarea 
		:class="[sizeableClass, theme]"
		:name="name"
		:id="name"
		 >
			
		</textarea>
		
	</div>

	<div v-else-if=" tag === 'checkbox' ">
		<div class='checkbox-item'>
		<input 
		type="checkbox"
		:name="name"
		:id="name"
		:class="[theme]"
		>
		<p>{{text}}</p>
		</div>
	</div>

	<div v-else-if=" tag === 'file' ">
		
		<input
		:class="[sizeableClass,theme]" 
		type="file"
		:name="name"
		:id="name"
		@change="changeIt"
		>
		
		
	</div>
</template>

<script>
// what handlers need to be
// click, focus, blur, change, input
	export default {
		props: {
			tag: String,
			theme: String,
			size: String,
			handlers: Array,
			name: String,
			text: String,
			options: Array,
			multiple: Boolean
		},

		data(){
			if(!this.handlers){
				return {

				}
			}
			else
			return {
				click: this.handlers.find(elem => elem.type === 'click'),
				focus: this.handlers.find(elem => elem.type === 'focus'),
				blur: this.handlers.find(elem => elem.type === 'blur'),
				change: this.handlers.find(elem => elem.type === 'change'),
				input: this.handlers.find(elem => elem.type === 'input')
			}
		},

		computed: {
			
			sizeableClass: function(){
				let fl = this.size && this.size.substr(0,2);

				if(!fl)return 'field';

				if(fl.charAt(0) === 'x'){
					if(fl.charAt(1) === 'x')return 'field-xxl'
					else return 'field-xl';
				}
				return `field-${fl.charAt(0)}`;

			}
		},

		
		methods:{
			 action(){
			 	for(let handler of this.handlers){

			 	}
			 },
			 changeIt(e){
			 	if(this.change)this.change.func();
			 }
		}
	}

</script>

<style lang='sass'>
@import '../styles/mixins.sass'

@mixin plain-input($w,$h:30px)
	border:0
	outline:0
	width:$w
	height:$h
	text-align: center
	resize: none

.field
	@include plain-input(100%)
	font-size:14px

.field-s
	@include plain-input(100px)
	font-size:12px
.field-m
	@include plain-input(180px)
	font-size:14px
.field-l
	@include plain-input(210px,40px)
	font-size:16px
.field-xl
	@include plain-input(250px,50px)
	font-size:18px
.field-xxl
	@include plain-input(300px,50px)
	font-size:22px

.checkbox-item
	display: flex
	max-height:25px
	align-items: center
	

.file-item
	
	@include flex-center(true)
	img
		width: 150px
		height:150px



	
</style>

