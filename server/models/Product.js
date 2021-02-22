const Database = require('./Database');

module.exports = class Product extends Database{

	constructor(args){
		super(args);
	}

	async addProduct(data){

		let {name,category,owner,description} = data
		
		let res = await this.insert({
			table: 'products',
			props: "name,category,owner,description",
			values: `'${name}', ${category}, ${owner}, '${description}'`

		})
		return res;
	}

	async deleteProduct(id){
		return await this.deleteOne({table: 'products',condition: `id = ${id}`})
	}

	
}








