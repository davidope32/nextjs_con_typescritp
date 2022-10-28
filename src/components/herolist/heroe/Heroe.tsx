import React, { FC } from "react"
import {IHero} from "../herolist"
import Link from "next/link"




interface TProps{
    heroe: IHero
}

const Heroe: FC<TProps>=({heroe})=>{
    return(
    <li>
        <Link href={`/heroes/${heroe.id}`} >
            <img className="cursor-pointer border-2 border-white" src={heroe.icon} alt={`${heroe.name} imagen`}/>
        </Link>
    
    <strong>{heroe.name} </strong>
    <h4>{heroe.title}</h4>
</li>
    )
}

export default Heroe