import { elementsCount } from '../constants'
import {ButtonWithCallback} from '../components/ButtonWithCallback/ButtonWithCallback'
import {useCallback, useState} from 'react'

const buttons = Array(elementsCount).fill(true)

export default function PageA() {
  const [renderCount, setRenderCount] = useState(0)
  const handleClick = useCallback(() => {
    setRenderCount(renderCount + 1)
  }, [renderCount])

  return (
    <div>
      <button onClick={handleClick}>renderAgain!</button>

      <ul>
        {buttons.map((fakeItem, index) => (
          <li key={fakeItem + index}>
            <ButtonWithCallback/>
          </li>
        ))}
      </ul>
    </div>
  )
}


