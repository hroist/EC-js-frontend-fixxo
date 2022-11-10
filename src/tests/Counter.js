import React, { useState } from 'react'

const Counter = ({init = 0}) => {

    const [count, setCount] = useState(init)

    const increment = () => {
        setCount(current => current + 1 )
    }

    const decrement = () => {
        setCount(current => current - 1)
    }

  return (
    <div>
        <div>
            <p> count:
                <span data-testid="count">{count}</span>
            </p>
            <div>
                <button onClick={() => increment() }>PLUS</button>
                <button onClick={() => decrement() }>MINUS</button>
            </div>
        </div>

    </div>
  )
}

export default Counter