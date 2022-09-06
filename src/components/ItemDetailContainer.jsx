import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
	const [product, setProduct] = useState()

	const { id } = useParams()

	const getProduct = async () => {
		const response = await fetch(`https://fakestoreapi.com/products/${id}`)

		const data = await response.json()

		setProduct(data)
	}

	useEffect(() => {
		getProduct()
	}, [])

	return (
		<div>
			<ItemDetail
				id={product?.id}
				title={product?.title}
				price={product?.price}
				category={product?.category}
				description={product?.description}
				image={product?.image}
			/>
		</div>
	)
}

export default ItemDetailContainer
