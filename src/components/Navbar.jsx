import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
	return (
		<div className="d-flex justify-content-between align-items-center text-bg-primary px-5 py-2">
			<Link to="/" className="fs-3 text-white">
				TukiCommerce
			</Link>
			<CartWidget />
		</div>
	)
}

export default Navbar
