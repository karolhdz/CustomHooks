import { useState } from "react"

export const useCounter = (initialArgument = 10) => {
    
    const [ counter, setCounter ] = useState(initialArgument);

    const increm = (value = 1) => {
        setCounter((current) => current + value );
    } 

    const decrem = (value = 1) => {
        // if( counter === 0 ) return; 
        setCounter( current => current - value );
    }
    
    const reset = () => {
        setCounter( initialArgument );
    }

    return{
        counter,
        increm,
        decrem,
        reset,
    }
}