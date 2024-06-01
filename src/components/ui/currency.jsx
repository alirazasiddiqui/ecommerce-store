'use client'

import { useEffect, useState } from "react";

const formatter= new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD",
    
  });


const Currency = ({value}) => {
    const [isMounted,setMounted]=useState(false);
    useEffect(()=>{
        setMounted(true)
    },[]);
    if(!isMounted) {
        return null;
    }

  return (
    <div className='font-semibold'>
        {formatter.format(Number(value))}
        </div>
  )
}

export default Currency