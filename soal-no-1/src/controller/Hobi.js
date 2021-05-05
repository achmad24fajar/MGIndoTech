
exports.getHobi = async (req, res) => {
	try{
		const ArrayOfObject = [
			{
				name: "Smith",
				hobi: "Self Service"
			},
			{
				name: "Dio",
				hobi: "Design Grafis"
			},
			{
				name: "Agung",
				hobi: "Bermain Game"
			}
		]

		let result = []

		let name, hobi;
		await ArrayOfObject.forEach(val => {
			if(val.name == "Agung"){
				name = "Agung"
			}
			if(val.hobi == "Self Service"){
				hobi = "Self Service"
			}
		})
		result.push({
			name: name,
			hobi: hobi
		});

		res.send({
			status: "success",
			message: "Name and Hobby Succesfully Get",
			result,
	    });

	}catch(error){
		console.log(error);
	    res.status(500).send({
	        status: "error",
	        message: "Server Error",
	    });
	}
}