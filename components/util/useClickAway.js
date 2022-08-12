// This implementation was copied from alpine.js
// https://github.com/alpinejs/alpine/blob/fd9eddd2e01eac6630b2f5f52e93509fdf237bce/dist/alpine.js#L693

import { useEffect, useRef } from 'react'

const useClickAway = (handler, once=false) => {
  const ref = useRef(null)

  useEffect(() => {
    const clickHandler = (event) => {
      const el = ref.current
      if (!el) return
      if (el.contains(event.target)) return
      if (el.offsetParent === null) return
      if (el.offsetWidth < 1 && el.offsetHeight < 1) return

      handler(event)

      if (once) {
        document.removeEventListener('mousedown', clickHandler)
      }
    }

    document.addEventListener('mousedown', clickHandler)

    return () => {
      document.removeEventListener('mousedown', clickHandler)
    }
  }, [handler, once])

  return ref
}

export default useClickAway

