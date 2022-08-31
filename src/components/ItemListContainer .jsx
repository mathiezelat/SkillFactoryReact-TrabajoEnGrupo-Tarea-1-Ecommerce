import ItemCount from './ItemCount'
import { useEffect, useState } from 'react'

const ItemListContainer = ({ nameEcommerce }) => {
	const [products, setProducts] = useState([])

	const getProducts = async () => {
		try {
			const response = await fetch('https://fakestoreapi.com/products/')
			const data = await response.json()
			setProducts(data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getProducts()
	}, [])

	console.log('products', products)

	return (
		<div className="px-5">
			<h1>{nameEcommerce}</h1>
			<div className="row row-cols-2 row-cols-md-4 g-4">
				{products.map(product => {
					return (
						<div key={product.key} className="col">
							<div className="card h-100 ">
								<img
									className="card-img-top "
									src={product.image}
									alt={product.title}
								/>
								<div className="card-body">
									<p className="card-title">
										{product.title}
									</p>
									<p className="card-subtitle text-muted">
										{product.price}
									</p>
									<ItemCount stock={15} initial={1} />
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ItemListContainer
