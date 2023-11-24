import axios from "axios"

function ApiHandler() {
    const API_TOKEN = `Bearer nIPemt4bGTV38dY6JManKShoF3sm6BeUUhHzZ-Uv`
    const API_BASE_URL = 'https://api.predicthq.com'
    axios.defaults.headers.common['Authorization'] = API_TOKEN;


    const getData = async (filters?: string) => {
        const data = await axios.get(
            `${API_BASE_URL}/v1/events/${filters ? filters : ''}`
        ).then(response => {
            return response.data.results
        }).catch(err => {
            console.log(err.message);
        })
        return data
    } 

    const getCount = async (filters?: string) => {
        const data = await axios.get(
            `${API_BASE_URL}/v1/events/count${filters ? filters : ''}`
        ).then(response => {
            return response.data.results
        }).catch(err => {
            console.log(err.message);
        })
        return data
    }

    const getCardsCounts = async () => {
        const data = {}
        await axios.get(
            `${API_BASE_URL}/v1/events/count`
        ).then(response => {
            data.total = Intl.NumberFormat('en-US', {
                notation: "compact",
                maximumFractionDigits: 1
            }).format(response.data.count);
        }).catch(err => {
            console.log(err.message);
        })
        await axios.get(
            `${API_BASE_URL}/v1/events/count/?start.gte=2023-11-24&start.lte=2023-11-30`
        ).then(response => {
            data.thisMonth = Intl.NumberFormat('en-US', {
                notation: "compact",
                maximumFractionDigits: 1
            }).format(response.data.count);
        }).catch(err => {
            console.log(err.message);
        })
        return data
    }
    
    return {
        getData,
        getCount,
        getCardsCounts
    }
}

export default ApiHandler()