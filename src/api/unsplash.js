import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID sW6KXzCZ3D8E9UYJjougJyjHahVDn56g1v7mzgs1BV0'
	}
})