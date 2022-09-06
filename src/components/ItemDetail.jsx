import ItemCount from './ItemCount'

const ItemDetail = ({ title, price, category, description, image }) => {
	return (
		<div className="px-5 pt-5">
			<img
				className="img-thumbnail"
				src={image}
				alt={`A ${title}`}
				style={{
					width: '250px',
					height: '250px',
					objectFit: 'contain',
				}}
			/>
			<h1>{title}</h1>
			<h5>{category}</h5>
			<p>${price}</p>
			<p>{description}</p>
			<ItemCount initial={1} stock={5} />
		</div>
	)
}

export default ItemDetail
