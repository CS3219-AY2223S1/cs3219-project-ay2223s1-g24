import { useSelector } from 'react-redux'

export function useUsername() {
  return useSelector((state) => state.username.value)
}