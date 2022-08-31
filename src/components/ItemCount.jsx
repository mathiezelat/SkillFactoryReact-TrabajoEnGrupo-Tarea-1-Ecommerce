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
			<div className="d-flex gap-1">
				<button className="btn btn-primary" onClick={decrease}>
					Decrease
				</button>
				<button className="btn btn-primary" onClick={increase}>
					Increase
				</button>
			</div>
		</div>
	)
}

export default ItemCount
