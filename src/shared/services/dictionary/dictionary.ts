import { API } from '../config'
import { WordAPI } from './dictionary.types'

const SUBPATH = 'word'

export const getDictionary = async () => {
  const { data } = await API.get<WordAPI[]>(`${SUBPATH}/all`)

  return data
}

export const addWord = async (body: Omit<WordAPI, 'id'>) => {
  const { data } = await API.post(`${SUBPATH}/add`, body)

  return data
}
