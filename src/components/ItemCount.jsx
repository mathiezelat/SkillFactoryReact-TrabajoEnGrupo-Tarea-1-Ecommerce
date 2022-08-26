import { useState } from 'react'

const ItemCount = ({ stock, initial }) => {
	const [count, setCount] = useState(initial)

	const increase = () => {
		count < stock && setCount(count + 1)
	}

	const decrease = () => {
		count > 0 && setCount(count - 1)
	}

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={decrease}>Decrease!</button>
			<button onClick={increase}>Increase!</button>
		</div>
	)
}

export default ItemCount
