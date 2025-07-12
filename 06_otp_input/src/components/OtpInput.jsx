import React, { useState, useRef, useEffect } from 'react'
import { NO_OF_DIGITS } from './constant';

function OtpInput() {
    const [inputArray, setInputArray] = useState(new Array(NO_OF_DIGITS).fill(""));
    const refArray = useRef([]);
    useEffect(() => {
        refArray?.current[0].focus();
    }, []);
    const handleChange = (e, index) => {
        if (isNaN(e.target.value)) {
            return;
        }
        const newValue = e.target.value.trim();
        const newArray = [...inputArray];
        newArray[index] = newValue.slice(-1);
        setInputArray(newArray);
        if (index < NO_OF_DIGITS - 1) {
            newValue && refArray?.current[index + 1]?.focus();
        }
    }
    const handleBackspace = (e, index) =>{
        console.log(e);
        if(e.key === 'Backspace' && !e.target.value){
            refArray.current[index-1]?.focus();
        }
    }
    return (
        <div>
            {inputArray.map((item, index) => {
                return <input
                    key={index}
                    className='input-box'
                    type='text'
                    value={inputArray[index]}
                    ref={input => (refArray.current[index] = input)}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e)=> handleBackspace(e,index)}
                />
            })}
        </div>
    )
}

export default OtpInput