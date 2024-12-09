import axios from "axios"

const instance = axios.create({
	baseURL: "https://9cd9a5de38ef06e1.mokky.dev",
})
instance.interceptors.request.use((config) => {
	return config
})
export default instance
