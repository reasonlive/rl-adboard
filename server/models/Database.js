//Database.js


class Database{

	constructor(settings){

		if(settings.type === 'postgresql'){
			let Pool = require('pg').Pool;
			this.db = new Pool(settings);
		}
	}

	async getById(table,id){

		try{
			let result = await this.db.query(
				`SELECT * FROM ${table} WHERE id = $1`,
				[id]
			)
			return result.rows;
		}catch(e){
			return e;
		} 
		
	}

	async getByProp(table,prop,value){

		try{
			let result = await this.db.query(
				`SELECT * FROM ${table} WHERE ${prop} = $1`,
				[value]
			)
			return result.rows;
		}catch(e){
			return e;
		} 
		
	}

	async get(table){

		try{
			let result = await this.db.query(`SELECT * FROM ${table}`);
			return result.rows;
		}catch(e){
			throw e;
		}
		
	}

	async getByJoin(leftTable,rightTable,options){

		let {method,values,on,condition,group,order,limit} = options;



		let query = `SELECT ${values} FROM ${leftTable} ${method} JOIN ${rightTable}
		ON ${on} ${condition ? ' WHERE '+condition : ''} 
		${group ? ' GROUP BY '+group : ''} ${order ? ' ORDER BY '+order : ''} 
		${limit ? ' LIMIT '+limit : ''}`

		try{
			return await this.db.query(query);

		}catch(e){return e}

	}


	async insert(options){

		try{

			let {table,props,values,rows} = options;

			if(rows && rows > 1){

				let dynamicStr = '';
				for(let i=0;i < rows;i++){
					dynamicStr += `(${values[i]}),`;
				}

				dynamicStr = dynamicStr.slice(0,-1);

				
				
				let result = await this.db.query(
					`INSERT INTO ${table} (${props}) VALUES ${dynamicStr} `,
				)

				
				return result.rowCount;
			}

			let result = await this.db.query(
				`INSERT INTO ${table} (${props}) VALUES (${values}) `,
				//[values]
			);

			return result.rowCount;
			
		}catch(e){
			return e;
		} 
	}

	/**
	*updateOne updates one property
	*@param {object} options
	* options are : {table,prop,value,condition}
	*
	* table {String} name of table
	* prop {String} name of changed property
	* value {String} new value of prop
	* condition {String} after WHERE code string
	*
	*@returns {Number} count of touched rows
	*/

	async updateOne(options){

		let {table,prop,value,condition} = options;

		try{
			let result = await this.db.query(
			`UPDATE ${table} SET ${prop} = $1 WHERE ${condition}`,
				[value]
			);
			return result.rowCount;
		}catch(e){
			return e;
		}

		
	}

	/**
	*deleteOne deletes one row
	*@param {object} options
	* options are : {table,prop,value}
	*@returns {Number | Error} number of touched rows
	*/

	async deleteOne(options){

		let {table,condition} = options;

		try{
			let result = await this.db.query(
				`DELETE FROM ${table} WHERE ${condition}`);
			return result.rowCount;
		}catch(e){
			return e;
		}

	}

	//deletes all rows from the table
	async deleteAll(table){
		return await this.db.query("DELETE FROM "+table);
	}

	close(){
		this.db.end();
	}
}

module.exports = Database;


///////////////////////////////////////////////TESTS

/*const conf = require('../../config');
const db = new Database(conf.database);

db.getJoin('cities', 'countries', {

	method: 'INNER',
	values: 'city_name,country_name',
	on: 'cities.country = countries.id',
	condition: 'countries.id = 1'

}).then(res => console.log(res))*/

/*db.db.query('SELECT city_name,country_name FROM cities LEFT JOIN countries ON cities.country = countries.id',  (err,res) => {
	if(err)console.log(err)
	console.log(res);
})*/