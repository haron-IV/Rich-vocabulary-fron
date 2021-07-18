import { AxiosResponse } from 'axios'
import { API } from '../config'
import { WordAPI } from './dictionary.types'

// export const initDatabase = async (
//   request: InitDatabaseRequest
// ): Promise<AxiosResponse> => API.post('/database/create', request)

// export const checkIfDatabaseExist = async (): Promise<AxiosResponse> =>
//   API.get('/database/check')

export const getDictionary = async () => {
  const { data } = await API.get<WordAPI[]>('word/all')

  return data
}
