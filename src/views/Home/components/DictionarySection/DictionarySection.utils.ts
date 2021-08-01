import { useState } from 'react'

export const useAddWordModal = () => {
  const [isAddWordModalOpened, setIsAddWordModalOpened] = useState(false)
  return { isAddWordModalOpened, setIsAddWordModalOpened }
}
