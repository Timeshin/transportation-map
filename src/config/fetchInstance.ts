import axios from 'axios'

const fetchInstance = axios.create({
	baseURL: 'http://router.project-osrm.org/'
})

export default fetchInstance
