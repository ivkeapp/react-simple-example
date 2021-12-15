import React from 'react'
import { useState, useEffect } from 'react';

export default function Time() { 
    //const {initialMinute = 0,initialSeconds = 0} = props;
    var [ date, setDate ] = useState(new Date());
    
    useEffect(()=>{
        var timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup(){
            clearInterval(timer);
        }
    });

    return (
        <div>
        {
        <div>{date.toLocaleString()}</div>
        }
        </div>
    )
}
