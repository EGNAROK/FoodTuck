import axios from "axios"

const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:4000/menuList')
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export default fetchData