import { useState } from 'react'

export function useLocalStorage (key) {
  const [store, setStore] = useState(
    JSON.parse(window.localStorage.getItem(key)) ?? []
  )

  const setLocalStore = input => {
    if(typeof input === 'function') {
      setStore(input(store))
      window.localStorage.setItem(key, JSON.stringify(input(store)))
    } else {
      setStore(input)
      window.localStorage.setItem(key, JSON.stringify(input))
    }
  }

  return [store, setLocalStore]
}