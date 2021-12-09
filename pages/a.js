import { elementsCount } from '../constants'
import {ButtonWithArrow} from '../components/ButtonWithArrow/ButtonWithArrow'
import {useState} from 'react'

const buttons = Array(elementsCount).fill(true)

export default function PageA() {
  const [renderCount, setRenderCount] = useState(0)

  return (
    <div>
      <button onClick={() => {setRenderCount( renderCount + 1 )}}>renderAgain!</button>

      <ul>
        {buttons.map((fakeItem, index) => (
          <li key={fakeItem + index}>
            <ButtonWithArrow/>
          </li>
        ))}
      </ul>
    </div>
  )
}


