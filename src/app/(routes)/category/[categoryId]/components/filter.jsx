'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";
import  qs from 'query-string'

const Filter = ({data,name,valueKey}) => {
    
    const searchParams=useSearchParams();
   // console.log('searchPearamss ',searchParams)
    const router=useRouter();
   // console.log('router',router)

    const selectedValue= searchParams.get(valueKey);
  //  console.log('selectedValues',selectedValue)

    const onClick=(id)=>{
       
        const current=qs.parse(searchParams.toString());
        //console.log('currentValue',current)
        const query={
            ...current,
            [valueKey]:id
        };
        console.log('query',query)
    

        if(current[valueKey]===id){
            query[valueKey] = null;

        }
        const url=qs.stringifyUrl({
           url:window.location.href,
           query 
        },{
            skipNull:true
        })
        router.push(url);
    }
    
    

  return (
    <div className="mb-8">
        <h3 className="text-lg font-semibold">
            {name}
        </h3>
        <hr className="my-4"/>
        <div className="flex flex-wrap gap-2">
            {data.map((filter)=>(
                <div key={filter.id} className="flex items-center">
                    <Button onClick={()=>onClick(filter.id)} className={cn("rounded-md hover:text-white text-sm text-gray-800 p-2 bg-white border  border-gray-300",selectedValue === filter.id && "bg-black text-white")}>
                        {filter.name}
                    </Button>
                </div>
            ))}

        </div>

    </div>
  )
}

export default Filter