import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6 g-4">
				{products.map(product => {
					return (
						<Link key={product.id} to={`/product/${product.id}`}>
							<div className="col h-100">
								<div className="card h-100">
									<img
										className="card-img-top p-4"
										style={{
											height: '250px',
											objectFit: 'contain',
										}}
										src={product.image}
										alt={product.title}
									/>
									<div className="card-body">
										<p className="card-title">
											{product.title}
										</p>
										<p className="card-subtitle text-muted">
											${product.price}
										</p>
									</div>
								</div>
							</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default ItemListContainer
