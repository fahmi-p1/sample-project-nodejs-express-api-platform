
const BaseModel = require("./basemodel");
class Users extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				created_at: {name: 'created_at', type:Sequelize.DATE},
				name: {name: 'name', type:Sequelize.STRING},
				photo: {name: 'photo', type:Sequelize.STRING},
				dob: {name: 'dob', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "users",
				modelName: "users",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'name', 
			'photo', 
			'dob'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'name', 
			'photo', 
			'dob'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'name', 
			'photo', 
			'dob'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'name', 
			'photo', 
			'dob'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'name', 
			'photo', 
			'dob'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("name LIKE :search"), 
			sequelize.literal("dob LIKE :search"),
		];
	}

	
	
}
module.exports = Users;
