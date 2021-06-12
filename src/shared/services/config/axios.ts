import axios from 'axios'

const AXIOS_CONFIG = {
  baseURL: 'http://localhost:2200',
}

export const API = axios.create(AXIOS_CONFIG)
