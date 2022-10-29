import React, { FC } from "react"
import {IItem} from "../itemslist"
import Link from "next/link"
import Image from "next/image"




interface TProps{
    item: IItem
}

const Item: FC<TProps>=({item})=>{
    return(
    <li>
        <Link href={`/items/${item.id}`} >
            <ol className=" border-2 border-white-600">
                <li> 
                <Image 
                className="cursor-pointer" 
                src={item.icon} 
                alt={`${Item.name} imagen`}
                width={200}
                height={150}/>

                </li>
                <li className="text-center ">
                <strong>{item.name} </strong>
                </li>
                <li className="text-justify italic">
                <h4>{item.plaintext}</h4>
                </li>
            </ol>
           
        </Link>
</li>
    )
}

export default Item