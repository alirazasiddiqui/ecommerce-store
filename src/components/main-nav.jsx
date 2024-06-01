'use client'

import { usePathname } from 'next/navigation'
import { cn } from '../../lib/utils';
import Link from 'next/link';


const MainNav = ({data}) => {
    const pathName=usePathname();
    const routes=data.map((route)=>({
        href:`/category/${route.id}`,
        label:route.name,
        active:pathName === `/category/${route.id}`
    }))

  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
       {
            routes.map((route)=>(
                <Link className={cn('text-sm font-medium transition-colors hover:text-primary',route.active?'text-black dark:text-white':'text-muted-foreground')} key={route.href} href={route.href}>{route.label}</Link>

            ))
        }
    </nav>
  )
}

export default MainNav