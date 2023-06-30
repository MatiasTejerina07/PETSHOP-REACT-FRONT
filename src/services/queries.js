import axios from "axios";

const backend = axios.create({ baseURL: import.meta.env.VITE_API_URL })

let products = {
    get_all_product: async function () {
        try {
            const data = await backend("menu")
            return data
        } catch (error) {
            console.log(error);
            return {
                success: false,
                error
            }
        }
    }
}

let user = {
    signUp: async function () {
        try {
            let signUp = await backend("auth/signup")
            return signUp
        } catch (error) {
            return {
                success: false,
                error
            }

        }
    }
}


export default { products, user }