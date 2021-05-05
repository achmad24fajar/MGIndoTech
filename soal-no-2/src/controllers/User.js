const User = require('../../models/User')

exports.getUser = async (req, res) => {

	try{
		const users = await User.find();
		res.json(users);
	}catch(error){
		res.json(error);
	}

}

exports.postUser = async (req, res) => {

	const store = new User({
		nama: req.body.nama,
		hobi: req.body.hobi,
		alamat: req.body.alamat,
		notelp: req.body.notelp
	})

	try{
		const save = await store.save();
		res.json(save);
	}catch(error){
		res.json(error);
	}

}

exports.deleteUser = async (req, res) => {

	try{
		const deleteUser = await User.remove({_id: req.params.id});
		res.json(deleteUser); 
	} catch (error) {
		res.json(error)
	}

}

exports.editUser = async (req, res) => {

	try{
		const edit = await User.updateOne({_id: req.params.id}, {
			$set: {
				nama: req.body.nama,
				hobi: req.body.hobi,
				alamat: req.body.alamat,
				notelp: req.body.notelp
			}
		});
		res.json(edit);
	}catch(error){
		res.json(error)
	}
}