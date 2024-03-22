import React, {useState, useEffect} from 'react'

function UserEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    });
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increment count ({count})
        </button>
    </div>
  )
}

export default UserEffectCounter