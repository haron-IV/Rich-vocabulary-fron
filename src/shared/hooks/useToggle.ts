import { useThrottle } from '@react-hook/throttle'
import { useState } from 'react'

export const useToggle = (
  initialValue: boolean = false
): [boolean, () => void] => {
  const [toggle, setToggle] = useState(initialValue)
  const toggleValue = () => setToggle(toggle => !toggle)

  return [toggle, toggleValue]
}
