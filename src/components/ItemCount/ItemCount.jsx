/*import React, {useState, useEffect} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        setCount(count + 1);
        if(count === stock){setCount(count)}
    }

    const decrement = () => {
        setCount(count - 1);
        if (count <=1){setCount(count)}
    }

    useEffect(() => {
        console.log("SE ACTUALIZO EL CONTADOR");
    }, [count]) 


    return (
        <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin:'2rem'
                }}>
                <button className="btn btn-outline-secondary" onClick={decrement}>Restar</button>
                <p style={{margin:'1rem'}}>{count}</p>
                <button className="btn btn-outline-secondary" onClick={increment}>Sumar</button>
            <button className="btn btn-outline-secondary" onClick={onAdd(count)}>Add</button>
        </div>

    )
}

export default ItemCount*/