/** Express router providing Favorites_Movie related routes
 * @module routers/Favorites_Movie
 * @requires express
 * @requires config - app config
 * @requires utils - app utils functions
 * @requires express-validator - form validation module
 * @requires models- app model module
 */


 /**
 * express module
 * @const
 */
const express = require('express');


/**
 * Express router to mount user page functions.
 * @type {object}
 * @const
 */
const router = express.Router();


/**
 * App config module
 * @const
 */
const config = require('../config.js');


/**
 * App utils functions module
 * @const
 */
const utils = require('../helpers/utils.js');


/**
 * Form input validation module
 * @const
 */
const { body, validationResult } = require('express-validator');


/**
 * Favorites_Movie models
 * @const
 */
const models = require('../models/index.js');
const Favorites_Movie = models.Favorites_Movie;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators




/**
 * Route to list favorites_movie records
 * @route {GET} /favorites_movie/index/{fieldname}/{fieldvalue}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req, res) => {  
	try{
		let query = {};  // sequelize query object
		let where = {};  // sequelize where conditions
		let replacements = {};  // sequelize query params
		let fieldname = req.params.fieldname;
		let fieldvalue = req.params.fieldvalue;
		
		if (fieldname){
			where[Op.and] = [
				sequelize.literal(`(${fieldname} = :fieldvalue)`)
			];
			replacements.fieldvalue = fieldvalue;
		}
		let search = req.query.search;
		if(search){
			let searchFields = Favorites_Movie.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Favorites_Movie.getOrderBy(req);
		query.attributes = Favorites_Movie.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Favorites_Movie.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Favorites_Movie record
 * @route {GET} /favorites_movie/view/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/view/:recid'], async (req, res) => {
	try{
		let recid = req.params.recid || null;
		let query = {}
		let where = {}
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Favorites_Movie.viewFields();
		let record = await Favorites_Movie.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to insert Favorites_Movie record
 * @route {POST} /favorites_movie/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('created_at').optional(),
		body('user_id').optional(),
		body('movie_id').optional(),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Favorites_Movie record
		let record = await Favorites_Movie.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Favorites_Movie record for edit
 * @route {GET} /favorites_movie/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		let recid = req.params.recid;
		let query = {};
		let where = {};
		where['id'] = recid;
		query.where = where;
		query.attributes = Favorites_Movie.editFields();
		let record = await Favorites_Movie.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to update  Favorites_Movie record
 * @route {POST} /favorites_movie/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('created_at').optional(),
		body('user_id').optional(),
		body('movie_id').optional(),
	]
, async (req, res) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let recid = req.params.recid;
		let modeldata = req.body;
		let query = {};
		let where = {};
		where['id'] = recid;
		query.where = where;
		query.attributes = Favorites_Movie.editFields();
		let record = await Favorites_Movie.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Favorites_Movie.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Favorites_Movie record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /favorites_movie/delete/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		let recid = req.params.recid || '';
		recid = recid.split(',');
		let query = {};
		let where = {};
		where['id'] = recid;
		query.where = where;
		let records = await Favorites_Movie.findAll(query);
		records.forEach(async (record) => { 
			await record.destroy();
		});
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
