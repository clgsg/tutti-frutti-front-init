import axios from "axios"
import {getAll} from "./products"


const client = axios.create({
	baseURL: "localhost:3001",
	headers: {
		"Content-Type": "application/json",
	},
});

const getProducts= getAll(client)
export {
	getProducts
};

