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
			<div className="row row-cols-2 ">
				{products.map(product => {
					return (
						<div key={product.key} className="col p-2">
							<div className="text-bg-dark rounded h-100 p-2">
								<p>{product.title}</p>
								<p>{product.price}</p>
								<img
									className="img-thumbnail"
									src={product.image}
									alt={product.title}
								/>
								<ItemCount stock={15} initial={1} />
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ItemListContainer
