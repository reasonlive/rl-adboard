<style lang='sass'>
.location
	width:100%
	height:30px
	background: palegreen
	display: flex
	align-items: center
	justify-content: flex-end

	div
		margin:0 10px 0 10px

	.location_country
		display: flex
	.location_city
		display: flex
	
	
</style>

<template >
	<div class='location'>
		<div>Choose your location:</div>
		<div class='location_country'>
			<Field 
			size="small"
			theme="strict-managed-item"
			name="country"
			tag="select"
			:options="countries"
			:handlers="handlers"
			/>
			
		</div>
		<div class='location_city'>
			<Field 
			size="small"
			theme="strict-managed-item"
			name="city"
			tag="select"
			:options="cities"
			/>

		</div>
	
		<div class='location_apply'>
			<Button 
			text="apply"
			theme="strict-managed-item"
			size="small"
			:action="applyChoice"
			/>
		</div>
	</div>
</template>

<script>
	import Field from './Field.vue'
	import Button from './Button.vue'

	export default {
		//props: ['countries'],
		data(){

			return {
				selected: '',
				countries: [
				{id:'0',name:''},
				{id:'1',name:"Belarus"},
				{id:"2",name:"Russia"}
				],

				handlers: [
				{type: 'change', func: this.getCities}
				],
				cities: []
			}
		},
		components:{
			Field,
			Button
		},

		computed: {
			
		},

		
		methods:{
			getCities(e){
				let country = document.querySelector('select[name=country]');
				
				switch(country.value)
				{
					case '1':
					this.cities =  [

						{id: 'Brest', name: 'Brest'},
						{id: 'Vitebsk', name: 'Vitebsk'},
						{id: 'Gomel', name: 'Gomel'},
						{id: 'Grodno', name: 'Grodno'},
						{id: 'Minsk', name: 'Minsk'},
						{id: 'Mogilev', name: 'Mogilev'}

					];break;
					case '2':
					this.cities = [

						{id: 'Moscow',name: 'Moscow'},
						{id: 'Saint-Petersburg',name: 'Saint-Petersburg'},

					];break;
					default: this.cities = []
				}
					

				
			},

			applyChoice(){
				let selects = document.getElementsByTagName('select');
				for(let sel of selects)
					if(sel.value)alert(sel.value)
			}


		}
	}

</script>

