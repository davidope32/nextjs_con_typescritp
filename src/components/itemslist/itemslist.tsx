import React, { useEffect, useState } from "react";
import Heroe from "./item/Item"

export interface IItem{
    "name": string
    "description": string
    "plaintext": string
    "into": [
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ],
    "tags": [
      string
    ],
    "stats": {
      "FlatMovementSpeedMod": number
    },
    "id": string
    "icon": string
    "sprite": {
      "url": string
      "x": number,
      "y": number
    },
    "price": {
      "base": number
      "total": number,
      "sell": number
    },
    
}

const useItem = () =>{
    const [item, setItem] = useState<IItem[]>([])
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API_URL+"/items")
        .then((res)=>res.json())
        .then((data:IItem[])=> setItem(data))
        .catch((error)=>console.error(error))

    }, [])
    
    return item
}

export const Itemlist = () =>{
    const item= useItem()
     return( 
     <div className="flex flex-col justity-center text-white items-center p-8">
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-col-5 xl:grid-cols-6 gap-3"> 
            {item.map((item)=>(
                <Heroe key={item.id} item={item}/>

            ))}

        </ul>

     </div>)
}