
const BaseModel = require("./basemodel");
class Favorites_Movie extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				created_at: {name: 'created_at', type:Sequelize.DATE},
				user_id: {name: 'user_id', type:Sequelize.STRING},
				movie_id: {name: 'movie_id', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "favorites_movie",
				modelName: "favorites_movie",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'user_id', 
			'movie_id'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'user_id', 
			'movie_id'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'user_id', 
			'movie_id'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'user_id', 
			'movie_id'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'user_id', 
			'movie_id'
		];
	}

	
	
	
}
module.exports = Favorites_Movie;
