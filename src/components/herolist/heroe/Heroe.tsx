import React, { FC } from "react"
import {IHero} from "../herolist"
import Link from "next/link"
import Image from "next/image"




interface TProps{
    heroe: IHero
}

const Heroe: FC<TProps>=({heroe})=>{
    return(
    <li>
        <Link href={`/heroes/${heroe.id}`} >
            <div className=" border-2 border-white-600">
            <Image className="cursor-pointer" 
            src={heroe.icon} 
            alt={`${heroe.name} imagen`}
            width={200}
            height={200}
            />   
            </div>


        </Link>
    
    <strong>{heroe.name} </strong>
    <h4>{heroe.title}</h4>
</li>
    )
}

export default Heroe