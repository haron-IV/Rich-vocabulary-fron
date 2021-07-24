import { API } from '../config'
import { WordAPI } from './dictionary.types'

export const getDictionary = async () => {
  const { data } = await API.get<WordAPI[]>('word/all')

  return data
}
