import { elementsCount } from '../constants'
import {ButtonWithCallback} from '../components/ButtonWithCallback/ButtonWithCallback'
import {PureComponent, useCallback, useState, memo} from 'react'

const buttons = Array(elementsCount).fill(true)

class PureButton extends PureComponent {
  render() {
    return <ButtonWithCallback />
  }
}

const MemoButton = memo(ButtonWithCallback, () => true)


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
            <PureButton />
            <MemoButton />
          </li>
        ))}
      </ul>
    </div>
  )
}


