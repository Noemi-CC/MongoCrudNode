var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost/nodeDriver"
var Operaciones = require('./CRUD.js')
MongoClient.connect(url, function(err, db){
	if (err)console.log(err)
		console.log("Conexion establecida con la base de datos")
	Operaciones.insertarRegistro(db, (error, result) =>{
	if (error)console.log("Error insertado los registros:"+error)
	})
})