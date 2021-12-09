import {useState} from 'react'

export function ButtonWithArrow() {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick={() => {setCount(count + 1)}}
    >
      arrow {count}
    </button>
  )
}
