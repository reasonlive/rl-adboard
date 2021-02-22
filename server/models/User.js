const Database = require('./Database');

module.exports = class User extends Database{

	constructor(args){
		super(args);
	}

	async addUser(data){

		let {name,email,password} = data;

		/*let timestamp = new Date().
		toISOString().slice(0,-5).replace('T', " ");*/
		
		let res = await this.insert({
			table: 'users',
			props: "username,email,password",
			values: `'${name}', '${email}','${password}'`
		})
		return res;
	}

	async getUser(data){
		let {email} = data;
		return this.getByProp('users','email', email);
	}

	async deleteUser(id){

		let table = 'users',
		condition = `id = ${id}`;

		try{
			let result = await this.deleteOne({table,condition})
			return result;

		}catch(e){return e}

	}

	async addUserPhoto(id,image){

		let updated = await this.updateOne(
			{table:'users',
			prop: 'photo',
			value: image, 
			condition: `id = ${id}`});

		return updated;


	}

	async deleteUserPhoto(id){
		let table = 'users',
		condition = `id = ${id}`;

		try{

			let result = await this.updateOne({
				table: 'users',
				prop: 'photo',
				value: '/img/profiles/default.png',
				condition: `id = ${id}`
			})
			return result.rowCount;

		}catch(e){return e}
	}

	
}








