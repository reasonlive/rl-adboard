const Database = require('./Database');

module.exports = class Ad extends Database{

	constructor(args){
		super(args);
	}


	async publishAd(data){



		let {
			title,
			description,
			category,
			price,
			owner,
			city} = data;

		let categoryRow = await this.getByProp('categories', 'category_name', category);
		let cityRow = await this.getByProp('cities', 'city_name', city);


		

		try{
			return await this.insert({
				table: 'ads',
				props: 'title,ad_description,category_id,city_id,owner,price',

				values: `'${title}','${description}',
				${categoryRow.id},${cityRow.id},${owner},
				${price}`
			})
		
		}catch(e){return e};

	}

	async deleteAd(id){

		try{
			await this.deleteOne({
				table: 'ads',
				condition: `id = ${id}`
			})

		}catch(e){return e}

	}

	async updateActivity(id,active){

		try{
			return await this.updateOne({table: 'ads', prop: 'active',value: active})
		}catch(e){return e}

	}

	async correctAd(){

	}

	groupAds(){

	}


}








