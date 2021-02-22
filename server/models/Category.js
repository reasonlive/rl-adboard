const Database = require('./Database');

module.exports = class Category extends Database{

	constructor(args){
		super(args);
	}

	async addCategory(name){
		return await this.insert({
			table: 'categories',
			props: 'name',
			values: `'${name}'`
		})
	}
}








