import React from 'react'
import NOResults from './ui/no-results'
import ProductCard from './ui/product-card'

const ProductList = ({title,item}) => {
  return (
    <div className='space-y-4'>
        <h3 className='font-bold text-3xl'>{title}</h3>
        {item.length ===0 && <NOResults/>}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                item.map((data)=>(
                    <ProductCard key={data.id} data={data}/>

                ))

            }
        </div>

        
        </div>
  )
}

export default ProductList