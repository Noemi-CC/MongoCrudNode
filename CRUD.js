module.exports.insetarRegistro = function(db, callback){
let coleccion = db.collection ("users")
coleccion.insertMany([
	{nombre:"Noemi",ape_paterno:"Colquehuanca",ape_materno:"Cabana",edad:"20"},
	{nombre:"Eli",ape_paterno:"Chavez",ape_materno:"Larico",edad:"21"},
	{nombre:"Juan",ape_paterno:"Choque",ape_materno:"Apaza",edad:"22"},
	{nombre:"Mary",ape_paterno:"Carlos",ape_materno:"Cardenas",edad:"23"},
	{nombre:"Vale",ape_paterno:"Larico",ape_materno:"Caceres",edad:"24"},
	], (error, result) => {
		console.log("Resultado de insert:" + result.toString())
	})
}
module.exports.eliminarRegistro = function(db, callback){
	let coleccion = db.collection("users")
	try{
		coleccion.deleteOne({edad:24})
		console.log("se elimino el registro correctamente")

	}catch(e){
		console.log("se genero error"+ e)
	}
}
module.exports.consultarYActualizar = function(db, callback){
	let coleccion = db.collection("users")

	coleccion.find().toArray((error, documents) =>{
		if(error)console.log(error)
			console.log(documents)
		callback()
	})
	try{
		coleccion.updateOne({name:"Eli"}, {$set: {edad:25}})
		console.log("Se ha actualizado el registro correctamente")
	}catch(e){
		console.log("Error actualizando el registro:"+ e)
	}
	coleccion.find().toArray((error, documents)=>{
		if(error)console.log(error)
			console.log(documents)
		callback()
	})
}

