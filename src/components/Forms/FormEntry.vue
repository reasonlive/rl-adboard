
<template>
	<div class='form form-entry strict-viewed-item'>

			<div class='form-entry_title'> You have to {{registered ? 'register' : 'log in'}} on this platform it you want to publish some interesting stuff</div>
			
			<div class="fields-wrapper" v-if="registered" >

				
				<Field 
				tag="input"
				name="username"
				text="username"
				size="xlarge"
				theme="light-managed-item"
				/>
				<Field 
				tag="input"
				name="email"
				text="email"
				size="xlarge"
				theme="light-managed-item"
				/>
				<Field
				tag="input"
				name="password"
				text="password"
				size="xlarge"
				theme="light-managed-item"
				/>

				<Field
				tag="input"
				name="password2"
				text="check password"
				size="xlarge"
				theme="light-managed-item"
				/>

				<Button 
				:text="btnText"
				size="medium"
				theme="light-managed-item"
				:action="sendData"
				/>
				

			</div>

			<div class="fields-wrapper" v-else >
				<Field 
				tag="input"
				name="email"
				text="email"
				size="xlarge"
				theme="light-managed-item"
				/>
				<Field
				tag="input"
				name="password"
				text="password"
				size="xlarge"
				theme="light-managed-item"
				/>

				<Button 
				:text="btnText"
				size="medium"
				theme="light-managed-item"
				:action="sendData"
				/>
				
			</div>

			
	</div>

</template>

<script>

	import Button from '../Button.vue'
	import Field from '../Field.vue'
	

	export default {
		props: {
			registered: Boolean,
			
		},
		data(){
			return {
				//act: this.registered ? 'sign up' : 'sign in'
				//btnText: this.registered  ? 'sign up' : 'sign in',
			}
		},

		computed: {
			btnText(){
				return this.registered ? 'register' : 'log in'
			},

			
		},

		
		methods:{

			/**
			* sendData Checks data and 
			* makes post request to the server
			*/

			async sendData(){

				const checked = this.registered ? this.checkData() : this.verifyData();

				if(!checked) return;
				
				let path = checked.username ? '/api/entry/register' : '/api/entry/login';

				fetch(path, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(checked)

				}).then(response => response.json())
				  .then(result => {
				  	result.success ? 
				  	document.location.href = '/' :
				  	alert(result.error+': You are not registered!')
				  })
				  .catch(err => console.log(err))


			},

			verifyData(){
				let email = document.getElementById('email').value;
				let password = document.getElementById('password').value;

				if(password.length < 8){
					alert('password length might be greater than 7');
					return false;
				}

				return {
					email,
					password
				};
			},

			/**
			* checkData Checks all the fields and
			* if a check has success
			* it returns Map of all values
			* otherwise it returns false
			*  
			*/
			checkData(){


				const username = document.getElementById('username')
					, email = document.getElementById('email')
					, password = document.getElementById('password')
					, password2 = document.getElementById('password2');


				if(!username.value || !username.value.match(/^[a-zA-Z0-9\-\_]{2,20}$/)){
					alert('You have to enter your name');
					username.focus();
					return false;
				}
					

				if(!email.value || 
					!email.value.match(/^[a-zA-Z0-9\_\-]+@[a-z]{1,7}\.[a-z]{2,7}$/)){
					alert("You have to enter your email")
					email.focus()	
					return false;
				}

				if(!password.value || !password2.value  ||
					password.value !== password2.value || 
					!password.value.match(/^.{8,20}$/)){

					alert("Your password is incorrect!");
					password.focus();
					return false;
				}
					


				return {
					username: username.value,
					email: email.value,
					password: password.value
				}
					
						
			}
				
				 
		},

		components: {
			Button,
			Field
		}
	}

</script>

<style lang='sass'>
@import '../../styles/mixins.sass'

.form-entry_title
	display: none
	margin-bottom:40px
	font:20px Helvetica, sans-serif
	text-align: center
	padding:10px
	background: white
	@include radius
	

.form-entry
	
	margin: 30px auto
	min-width: 50%
	padding:20px
	min-height: 200px
	@include flex-center(true)

	.fields-wrapper
		width:80%


	input
		margin-bottom: 25px

	div
		@include flex-center(true)
		
		

	

	
</style>
