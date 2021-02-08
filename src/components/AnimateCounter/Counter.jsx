import React, { useEffect, useRef, useState } from 'react'

function Counter({ to }) {

    const [count, setCount] = useState(0);
    let interval = useRef();

    var ct = count;

    const startCounter = () =>{
        interval = setInterval(() => {
            if (ct < to){
                ct = ct + 10;
            }else{
                ct = to;
                clearInterval(interval.current);
            }
            setCount(ct);
        }, 10);
    };

    useEffect(() =>{
        startCounter();
        return () =>{
            clearInterval(interval.current);
        };
    },10000);



    return (
        <React.Fragment>
            {count}
        </React.Fragment>
    )
};

export default Counter;
