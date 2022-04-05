var config = {
	app: {
		name: "Movies App NBA",
		url: "http://localhost:8060",
		frontendUrl: "http://localhost:8050",
		secret: "447c3eceea3f55284246e6b375608d1a",
		language: "english",
		publicDir: "assets",
	},
	meta: {
		author:"",
		description: "__metadescription",
		charset: "UTF-8",
	},
	auth: {
		jwtDuration: 30, //in minutes
		otpDuration: 5, //in minutes
	},
	database: {
		name:"movies-db",
		type: "mysql",
		host: "localhost",
		username: "root",
		password: "",
		port: "",
		charset: "utf8",
		recordlimit: 10,
		ordertype: "DESC"
	},
	mail: {
		username:"",
		password: "",
		senderemail:"",
		sendername:"",
		host: "",
		port: ""
	},
	upload: {
		tempDir: "uploads/temp/",
		import_data: {
			filenameType: "timestamp",
			extensions: "json,csv",
			limit: "10",
			maxFileSize: "3",
			returnFullpath: "false",
			filenamePrefix: "",
			uploadDir: "uploads/files/"
		},
		
		poster: {
			filenameType: "random",
			extensions: "jpg,png,gif,jpeg",
			limit: "1",
			maxFileSize: "25",
			returnFullpath: false,
			filenamePrefix: "",
			uploadDir: "uploads/files",
			imageResize:  [ 
				{name: "small", width: 100, height: 100, mode: "cover"}, 
				{name: "medium", width: 480, height: 480, mode: "inside"}, 
				{name: "large", width: 1024, height: 760, mode: "inside"}
			],

		},

		photo: {
			filenameType: "random",
			extensions: "jpg,png,gif,jpeg",
			limit: "1",
			maxFileSize: "25",
			returnFullpath: false,
			filenamePrefix: "",
			uploadDir: "uploads/files",
			imageResize:  [ 
				{name: "small", width: 100, height: 100, mode: "cover"}, 
				{name: "medium", width: 480, height: 480, mode: "inside"}, 
				{name: "large", width: 1024, height: 760, mode: "inside"}
			],

		},

	},
	s3: {
		secretAccessKey: "",
		accessKeyId: "",
		region: "",
		bucket: "",
	},
	
}
module.exports = config