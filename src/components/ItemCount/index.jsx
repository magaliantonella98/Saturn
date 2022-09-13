import React, {useState, useEffect} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if(count < stock) setCount(count+1)
    }

    const decrement = () => {
        if (count>1) setCount(count - 1)
    }

    useEffect(() => {
        console.log("SE ACTUALIZO EL CONTADOR");
    }, []) 


    return (
        <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin:'2rem'
                }}>
                <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
                <p style={{margin:'1rem'}}>{count}</p>
<<<<<<< HEAD:src/components/ItemCount/index.jsx
                <button className="btn btn-outline-secondary" onClick={increment}>+</button>
=======
                <button className="btn btn-outline-secondary" onClick={increment}>Sumar</button>
>>>>>>> 89a18988d4e3b86f3b0e2818631d5931eed63fe9:src/components/ItemCount/ItemCount.jsx
            <button className="btn btn-outline-secondary" onClick={()=>onAdd(count)}>Add</button>
        </div>

    )
}

export default ItemCount;