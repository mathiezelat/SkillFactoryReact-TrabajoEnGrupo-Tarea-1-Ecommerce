import ItemListContainer from './components/ItemListContainer '
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'

// Ivvone Oña - Javier Huebra

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<ItemListContainer nameEcommerce="TukiCommerce" />}
				/>
				<Route path="/product/:id" element={<ItemDetailContainer />} />
			</Routes>
		</div>
	)
}

export default App
