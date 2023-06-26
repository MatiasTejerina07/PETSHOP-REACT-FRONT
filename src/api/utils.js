import axios from "axios"

const utils = {
    apiUrl: async function () {
        try {
            let res = await axios('https://mindhub-xj03.onrender.com/api/petshop')
            return res
        } catch (error) {
            return {
                success: false
            }
        }
    },
}
export default utils