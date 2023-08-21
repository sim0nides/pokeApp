import { useEffect, useRef } from 'react'

type Fn = (value: string) => void

const useDebouncedCallback = <F extends Fn>(
  callback: F,
  ms: number
): [Fn, { cancel: () => void }] => {
  const timeoutRef = useRef<NodeJS.Timeout>()

  const cancel = () => clearTimeout(timeoutRef.current)

  const debounced = (value: string) => {
    cancel()
    timeoutRef.current = setTimeout(() => {
      callback(value)
    }, ms)
  }

  useEffect(() => {
    return () => {
      cancel()
    }
  }, [])

  return [debounced, { cancel }]
}

export default useDebouncedCallback
