import CartWidget from './CartWidget'

const Navbar = () => {
	return (
		<div className="d-flex justify-content-between align-items-center text-bg-primary pt-3 px-5">
			<p>TukiCommerce</p>
			<CartWidget />
		</div>
	)
}

export default Navbar
