
const BaseModel = require("./basemodel");
class Movies extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				created_at: {name: 'created_at', type:Sequelize.DATE},
				title: {name: 'title', type:Sequelize.STRING},
				director: {name: 'director', type:Sequelize.STRING},
				duration: {name: 'duration', type:Sequelize.STRING},
				poster: {name: 'poster', type:Sequelize.STRING},
				rating: {name: 'rating', type:Sequelize.STRING},
				main_genre: {name: 'main_genre', type:Sequelize.STRING},
				second_genre: {name: 'second_genre', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "movies",
				modelName: "movies",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'title', 
			'director', 
			'duration', 
			'poster', 
			'rating', 
			'main_genre', 
			'second_genre'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'title', 
			'director', 
			'duration', 
			'poster', 
			'rating', 
			'main_genre', 
			'second_genre'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'title', 
			'director', 
			'duration', 
			'poster', 
			'rating', 
			'main_genre', 
			'second_genre'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'title', 
			'director', 
			'duration', 
			'poster', 
			'rating', 
			'main_genre', 
			'second_genre'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'created_at', 
			'title', 
			'director', 
			'duration', 
			'poster', 
			'rating', 
			'main_genre', 
			'second_genre'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("title LIKE :search"), 
			sequelize.literal("director LIKE :search"), 
			sequelize.literal("duration LIKE :search"), 
			sequelize.literal("poster LIKE :search"), 
			sequelize.literal("rating LIKE :search"), 
			sequelize.literal("main_genre LIKE :search"), 
			sequelize.literal("second_genre LIKE :search"),
		];
	}

	
	
}
module.exports = Movies;
