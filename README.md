# React - Trabajo en Grupo 

- Ivonne Oña
- Javier Huebra
- Mathías Ezequiel Latrónico

## Tarea 26 de agosto

1. Crear un componente llamado ItemListContainer que sea llamado por App.js Debe recibir una prop llamada "nameEcommerce" y debe renderizarse como el título de una Tienda Ficticia 

2. Crear un Componente Llamado NavBar que tenga un hijo llamado CartWidget. CartWidget debe mostrar el icono de un carrito de compras y NavBar debe ser renderizado desde App.js

3. Crear un componente llamado ItemCount y que se renderizará, por ahora, desde ItemListContainer. El contador debe recibir dos props: Stock=15 e Initial=1. Usar estas props para realizar las validaciones dentro del contador para que no se supere el stock y además, el contador no debe permitir números negativos

4. Realizar un pedido asincrónico al siguiente endpoint: https://fakestoreapi.com/products/. Utilizar el hook useEffect. En principio, utilizar fetch + async/await. Si el pedido entra en un loop infinito, revisar el dependency array. Guardar los productos en un estado del componente ItemListContainer. Mapear los productos para renderizarlos en el DOM desde el componente mencionado. Maquetar la vista correspondiente utilizando el camino que consideren apropiado para la estilización.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.