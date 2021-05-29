import { AxiosResponse } from 'axios'
import { API } from '../config'
import { InitDatabaseRequest } from './database.types'

export const initDatabase = async (
  request: InitDatabaseRequest
): Promise<AxiosResponse> => API.post('/database/create', request)
