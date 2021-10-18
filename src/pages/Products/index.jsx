import { getProducts } from "services"
import { useEffect, useState } from "react"

export const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(async() => {
		async function fetchData() {
			const results = await getProducts().name
			for (let product of results.products) {
			setProducts((prevState) => [...prevState, product])}};
			fetchData();
		}, [])

  return(
    <>
      <h1>This is the Products page</h1>
	  <div>{{products}}</div>
    </>
  )
}