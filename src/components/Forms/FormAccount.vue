

<template>
	<div class='form form-account light-viewed-item'>
		<div class='personal-info'>
			<center>Your personal info</center>
			<form id='account-info-form'>
				
				<div class='info-block'>
				<div>Your name:</div>
				<Field 
				tag="input"
				:text="data.name"
				name="username"
				theme="strict-managed-item"
				size="large"
				/>
				</div>

				<div class='info-block'>
				<div>Your location:</div>
				<Field 
				tag="input"
				:text="data.location"
				name="location"
				theme="strict-managed-item"
				size="large"
				/>
				</div>

				<div class='info-block'>
				<div>Your phone:</div>
				<Field 
				tag="input"
				:text="data.phone"
				name="phone"
				theme="strict-managed-item"
				size="large"
				/>
				</div>

				<div class='info-block'>
				<div>Your address:</div>
				<Field 
				tag="input"
				:text="data.address"
				name="address"
				theme="strict-managed-item"
				size="large"
				/>
				</div>

				<div class='info-block photo'>
				<div>Your photo:</div>
				<Field 
				tag="file"
				text="photo"
				name="photo"
				theme="strict-managed-item"
				/>
				<img :src="data.photo" alt="photo">

				</div>
				<div class='info-block-btns'>
					<Button 
					text="apply"
					size="small"
					theme="strict-managed-item"
					:action="updateInfo"
					/>
					<Button 
					text="clear"
					size="small"
					theme="strict-managed-item"
					:action="clearFields"
					/>
				</div>
				
			</form>

		</div>

		<div class='advert-info'>
			<center>Your advertisements</center>

			<form id="account-advert-form">
				<div class='info-block'>
					<div>My active advertisements:</div>
					<Field
					tag="select"
					:multiple="true"
					name="activeAds"
					size="xlarge"
					theme="strict-managed-item"

					 />
				</div>

				<div class='info-block'>
					<div>My inactive advertisements:</div>
					<Field
					tag="select"
					:multiple="true"
					name="inactiveAds"
					size="xlarge"
					theme="strict-managed-item"
					 />
				</div>

				<div class='info-block'>
					<div>My favorites advertisements:</div>
					<Field
					tag="select"
					:multiple="true"
					name="favoritesAds"
					size="xlarge"
					theme="strict-managed-item"
					 />
				</div>
				
			</form>
		</div>

		<div class='account-settings'>
			<center>Your account settings</center>

			<form id="account-settings-form">
				

				<div class="info-block">
					<div>don't show your advertisements <br> for a while:</div>
					<Switcher />
				</div>



				<div class='info-block'>
				<div>show your info in advertisement:</div>
				<Field 
				tag="checkbox"
				text="username"
				name="checkUsername"
				/>
				
				<Field 
				tag="checkbox"
				text="location"
				name="checkLocation"
				
				
				/>

				<Field 
				tag="checkbox"
				text="address"
				name="checkAddress"
				
				/>

				<Field 
				tag="checkbox"
				text="phone"
				name="checkPhone"
				/>

				<Field 
				tag="checkbox"
				text="email"
				name="checkEmail"
				/>

				<Button
				text="apply"
				theme="strict-managed-item"
				size="small"
				:action="updateAdsInfo"
				/>

				</div>

				<div class='del-btns'>

					<div class='del-btns-item'>
						<div>delete your profile photo: </div>

						<Button
						text="delete"
						size="small"
						theme="danger-managed-item"
						:action="deletePhoto"
						 />
					</div>

					<div class="del-btns-item">
						<div>delete your account: </div>
					
						<Button
						text="delete"
						size="small"
						theme="danger-managed-item"
						:action="deleteAccount"
						/>
					</div>

				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import Button from '../Button.vue'
	import Field from '../Field.vue'
	import Switcher from '../Switcher.vue';

	const photoPath = '/img/profiles/';
	

	export default {

		data(){
			return {
				data: {},
			}
		},

		created(){
			this.fetchUser()
		},

		
		methods:{
			fetchUser(){
				fetch('/api/account')
				.then(response => response.json())
				.then(result => {
					this.data = result.data;
				})
				.catch(err=> console.log(err));
			},

			deleteAccount(){
				fetch('/api/account/account',{
					method: 'DELETE'
				})
				.then(response => response.json())
				.then(result => {
					if(result.success){
						alert("Your profile successfully deleted");
						document.location.href = '/';
					}else{
						alert('Error! Try again later');
						document.location.reload();
					}
				})
			},

			deletePhoto(){
				fetch('/api/account/photo',{method: 'DELETE'})
				.then(response => response.json())
				.then(result => {
					if(result.success){
						alert("Your profile successfully deleted");
						document.location.href = '/';
					}else{
						alert('Error! Try again later');
						document.location.reload();
					}
				})
			},

			updateInfo(){
				fetch('/api/account/update', {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify({some: 'some'})

				})
				.then(response => response.json())
				.then(result => {
					if(result.success){
						alert("Your profile successfully deleted");
						document.location.href = '/';
					}else{
						alert('Error! Try again later');
						document.location.reload();
					}
				})
			},
			updateAdsInfo(){
				fetch('/api/account/updateAds', {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify({some: 'some'})
				})
				.then(response => response.json())
				.then(result => {
					if(result.success){
						alert("Your profile successfully deleted");
						document.location.href = '/';
					}else{
						alert('Error! Try again later');
						document.location.reload();
					}
				})
			},

			toggleAds(){
				fetch('/api/account/toggleAds',{
					method: 'PUT',
					headers:{
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify({data: 'some'})

				})
				.then(response => response.json())
				.then(result => {
					if(result.success){
						alert("Your ads successfully disabled");
						document.location.reload()
					}else{
						alert('Error! Try again later');
						document.location.reload();
					}
				})
			},

			clearFields(){
				const inputs = document.getElementsByTagName('input');
				inputs.forEach = [].forEach;

				inputs.forEach(elem=>{
					console.log(elem)
				})
			}

		},

		components: {
			Button,
			Field,
			Switcher
		}
	}

</script>

<style lang='sass'>
@import '../../styles/mixins.sass'

.form-account
	form
		position: relative
		font:16px Helvetica, sans-serif
		@include flex-center(true)

	center
		font:18px Helvetica, sans-serif
		font-weight: bold
		margin-bottom:5px
		border-bottom:1px solid black

.form-account
	margin:5px
	width:100%
	height:100%

	display: grid
	grid-template-columns: repeat(3,1fr)


	.personal-info
		.info-block
			@include flex-center(true)
		.photo
			@include flex-center(true)
			img
				
				width:150px
				height:150px


	.advert-info
		select
			height:100px
		.info-block
			margin:15px

	.account-settings
		.info-block

			margin:20px 0 20px 0
			
				
			&:last-child
				margin-top:45px


		



.info-block-btns
	margin-top: 10px
	@include flex(false,space-around,center)
	
	width:80%

.del-btns
	width:80%
	@include flex-center(true)
	color: red
	font-weight: bold
	margin:10px

	.del-btns-item
		
		margin:10px 0
		width:100%
		@include flex(false,space-between,center)
		



	
</style>


