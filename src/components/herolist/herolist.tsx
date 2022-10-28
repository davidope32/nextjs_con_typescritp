import React, { useEffect, useState } from "react";
import Heroe from "./heroe/Heroe"

export interface IHero{
"id": string |null
"key": string |null
"name": string 
"title": string |null
"tags": [ string |null, string |null]

"stats": {
    "hp":number |null
    "hpperlevel": number |null
    "mp": number |null
    "mpperlevel":number |null
    "movespeed": number |null
    "armor": number |null
    "armorperlevel": number |null
    "spellblock": number |null
    "spellblockperlevel": number |null
    "attackrange": number |null
    "hpregen": number |null
    "hpregenperlevel": number |null
    "mpregen": number |null
    "mpregenperlevel": number |null
    "crit": number |null
    "critperlevel": number |null
    "attackdamage": number |null
    "attackdamageperlevel": number |null
    "attackspeedperlevel": number |null
    "attackspeed": number  |null},

    "icon": string
    "sprite": {
    "url": string |null
    "x": number |null
    "y": number |null
        },
"description": string |null
    
}

const useHero = () =>{
    const [heroes, setHeroes] = useState<IHero[]>([])
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API_URL+"/heroes")
        .then((res)=>res.json())
        .then((data:IHero[])=> setHeroes(data))
        .catch((error)=>console.error(error))

    }, [])
    
    return heroes
}

export const Herolist = () =>{
    const heroes= useHero()
     return( 
     <div className="flex flex-col justity-center text-white items-center p-8">
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-col-5 xl:grid-cols-6 gap-3"> 
            {heroes.map((heroes)=>(
                <Heroe key={heroes.id} heroe={heroes}/>

            ))}

        </ul>

     </div>)
}