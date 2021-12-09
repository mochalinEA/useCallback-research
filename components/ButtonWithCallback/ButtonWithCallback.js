import {useCallback, useMemo, useState} from 'react'

export function ButtonWithCallback() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => { setCount(count + 1) }, [count])

  return (
    <button
      onClick={handleClick}
    >
      callback {count}
    </button>
  )
}
