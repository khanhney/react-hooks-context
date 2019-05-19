import React, { Component, useState, useEffect } from 'react';

function Example() {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count+1)}>Click Here</button>
        </>
    )
}

export default Example;