
exports.getProduk = async (req, res) => {

	try{
		const products = [
			{
				id_produk: 1,
				nama_produk: 'Huawei P30 Pro'
			},
			{
				id_produk: 2,
				nama_produk: 'Huawei Nova 5T'
			}
		]

		const stok_product = [
			{
				id_produk: 1,
				qty: 15,
			},
			{
				id_produk: 1,
				qty: 6,
			},
			{
				id_produk: 2,
				qty: 4,
			},
			{
				id_produk: 2,
				qty: 18,
			},
		]

		const hasil = await products.map(product => {
			const totalProduct = stok_product.filter(({id_produk}) => id_produk == product.id_produk).reduce( ( sum, obj ) => {
					return sum + obj.qty
			}, 0)
			console.log(totalProduct)
			return {
				nama_produk: product.nama_produk,
				total_stok: totalProduct
			}
		})

		res.send({
			status: "success",
			message: "Products Succesfully Get",
			hasil,
	    });
	} catch(error) {
		console.log(error);
	    res.status(500).send({
	        status: "error",
	        message: "Server Error",
	    });
	}

}