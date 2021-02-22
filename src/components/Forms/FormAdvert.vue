

<template>
	<div class='form-advert'>
		<form class='strict-viewed-item form-info' >

			
			<div>
				<div class='advert-item'>
					<div>section:</div>
					<Field
					tag="select"
					name="section"
					size="medium"
					theme="light-managed-item"
					:options="section"
					:handlers="[{type:'change', func: handleChoice}]"
					 />
					
				</div>

				<div 
				v-if="sales"  >

					<div class='advert-item'>
						<div>kind of ad:</div>
						<Field
						tag="select"
						name="purpose"
						size="medium"
						theme="light-managed-item"
						:options="salesOpts"
						 />
					</div>

					<div class='advert-item'>
						<div>kind of product:</div>
						<Field
						tag="select"
						name="category"
						size="medium"
						theme="light-managed-item"
						:options="categories"
						 />
					</div>

					<div class='advert-item'>
						<div>name of product:</div>
						<Field
						tag="input"
						name="productName"
						size="medium"
						theme="light-managed-item"
						/>
					</div>

					<div class='advert-item'>
						<div>condition:</div>
						<Field
						tag="select"
						name="productCondition"
						size="medium"
						theme="light-managed-item"
						:options="conditionOpts"
						 />
					</div>

					<div class='advert-item'>
						<div>price:</div>
						<Field
						tag="input"
						text="rub"
						name="productPrice"
						size="medium"
						theme="light-managed-item"
						 />
					</div>
				</div>

				<div v-else-if=" rent " >

					<div class='advert-item'>
						<div>kind of ad:</div>
						<Field
						tag="select"
						name="purpose"
						size="medium"
						theme="light-managed-item"
						:options="rentOpts"
						 />
					</div>

					<div class='advert-item'>
						<div>name of product:</div>
						<Field
						tag="input"
						name="productName"
						size="medium"
						theme="light-managed-item"
						/>
					</div>

					<div class='advert-item'>

						<div>price:</div>
						<div class="price-block">
							<Field
							tag="input"
							name="productPrice"
							text="0.00"
							size="small"
						
							/>
							<Field 
							tag="select"
							size="small"
							
							/>
						</div>
						
					</div>
				</div>

				<div v-else-if=" lostFound ">

					<div class='advert-item'>
						<div>kind of ad:</div>
						<Field
						tag="select"
						name="adKind"
						size="medium"
						theme="light-managed-item"
						:options="lostFoundOpts"
						/>
					</div>

					<div class='advert-item'>
						<div>name of item:</div>
						<Field
						tag="input"
						name="productName"
						size="medium"
						theme="light-managed-item"
						/>
					</div>
				</div>

			</div>

			<div class='advert-descr'>

				<div>brief description:</div>
				<Field
				tag="textarea"
				size="large"
				theme="light-managed-item"
				/>

				<div>location of product</div>
				<Field 
				tag="input"
				name="location"
				text="city or town"
				size="medium"
				theme="light-managed-item"
				:options="cities"
				/>

			</div>

			<div class="advert-opts">
				<div>additional options</div>

				<Field
				tag="checkbox"
				text="exchange available"
				name="exchange"
				/>

				<Field 
				tag="checkbox"
				text="discount available"
				name="discount"
				/>
			</div>
			

			<!-- buy sell lost found rent-->
			
		</form>

		<form class="form-media strict-viewed-item">
			<div class='field-upload'>
				<div>you can upload up to 5 photos of your product </div>
				<Field 
				tag="file"
				name="photo"
				theme="light-managed-item"
				:handlers="[{type: 'change', func: tempUpload}]"
				/>
			</div>
			<Imager 
			:images="imgArr"
			/>
				
			
			<div class="form-btns">
				<Button 
				text="publish ad"
				size="small"
				theme="light-managed-item"
				:action="publish"
				/>

				<Button 
				text="cancel"
				size="small"
				theme="light-managed-item"
				:action="cancel"
				/>
			</div>
		</form>
		
	</div>
</template>

<script>

	import Field from '../Field.vue'
	import Button from '../Button.vue'
	import Imager from '../Imager.vue'

	export default {
		data(){
			return {
				section: [
					{},
					{id:1, name: 'sales'},
					{id:2, name: 'rent'},
					{id:3, name: 'lost and found'},

				],

				salesOpts: [
					{id:1,name: 'sell'},
					{id:2,name: 'buy'}
				],

				categories: [
				{id:0,name:''},
				{id:1,name:'auto'},
				{id:2,name: 'housing'},
				{id:3,name:'household appliances'},
				{id:4,name: 'furniture'},
				{id:5,name: 'clothes'},
				{id:6,name: 'media devices'},
				{id:7,name: 'sports equipment'},
				{id:8,name: 'domestic animals'},
				{id:9,name: 'other'}


				],

				conditionOpts: [
					{id:1,name:'new'},
					{id:2,name: 'untouched'},
					{id:3,name: 'touched'},
					{id:4,name:'old'}
				],

				rentOpts: [
					{},
					{id:1,name: 'offer a rent'},
					{id:2,name: 'look for rent'}
				],

				lostFoundOpts: [
					{},
					{id:1,name: 'lost'},
					{id:2,name: 'found'}
				],
				cities: [

				],

				sales: false,
				rent: false,
				lostFound: false,
				imgArr: []
			}
		},

		
		methods:{
			 handleChoice(){
			 	let select = document.querySelector('select[name=section]');
			 	if(select.value == 1){
			 		this.sales = true;
			 		this.rent = this.lostFound = false;
			 		
			 	}
			 	if(select.value == 2){
			 		this.rent = true;
			 		this.sales = this.lostFound = false;
			 	}

			 	if(select.value == 3){
			 		this.lostFound = true;
			 		this.sales = this.rent = false;
			 	}
			 	if(!select.value)
			 		this.sales = this.rent = this.lostFound = false;
			 },

			 tempUpload(){
			 	if(this.imgArr.length > 4)return;
			 	let file = document.querySelector('input[name=photo]');
			 		let src = URL.createObjectURL(file.files[0])
			 		this.imgArr.push({src})
			 		
			 },

			 cancel(e){
			 	e.preventDefault()
			 	document.location.reload();
			 },

			 publish(e){
			 	e.preventDefault();
			 	//there are two forms 
			 	console.log(document.forms)
			 }
		},

		computed: {
			
		},

		components: {
			Field,
			Button,
			Imager
		}
	}

</script>

<style lang='sass'>
@import '../../styles/mixins.sass'

.form-advert
	width:100%
	height:100%
	@include flex-center(true)

	form
		width:80%
		margin:10px
		display: flex
		justify-content: space-between

	.form-info
		height:60%
		.advert-item
			@include flex-center(true)

		.advert-descr
			margin-left:20px
			textarea
				height:200px
				width:300px

		.advert-opts
			width:200px
			margin:0 0 0 20px
			

	.form-media
		display: flex
		justify-content: space-around
		align-items: center
		height:20%

	.form-btns
		button
			margin: 10px 0 10px 0

.price-block
	@include flex
	select
		width:30px




	
</style>

