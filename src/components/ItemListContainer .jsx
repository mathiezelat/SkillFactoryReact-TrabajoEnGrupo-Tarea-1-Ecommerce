import ItemCount from './ItemCount'
const itemListContainer = ({ nameEcommerce }) => {
	return (
		<div>
			<h1>{nameEcommerce}</h1>
			<ItemCount stock={15} initial={1} />
		</div>
	)
}

export default itemListContainer
