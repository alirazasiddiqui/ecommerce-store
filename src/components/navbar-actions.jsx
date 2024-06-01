'use client'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'
import useCart from '../../hooks/use-cart'
import { useRouter } from 'next/navigation'

const NavBarActions = () => {
    const router=useRouter();
    const [isMounted,setMounted]=useState(false);

    useEffect(()=>{
        setMounted(true);

    },[]);
    const cart=useCart();
    if(!isMounted) {
        return null;
    }
  return (
    <div className='ml-auto flex items-center gap-x-4'>
        <Button onClick={()=>router.push('/cart')} className="flex items-center rounded-full bg-black px-2 py-2">
            <ShoppingBag size={20} color='white'/>
            <span className='ml-2 text-white text-sm font-medium'>{cart.items.length}</span>

        </Button>
    </div>
  )
}

export default NavBarActions