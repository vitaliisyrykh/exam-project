import axios from 'axios'
import CONTANTS from '../constants'

const httpClient = axios.create({
  baseURL: CONTANTS.BASE_URL
})

export default httpClient
