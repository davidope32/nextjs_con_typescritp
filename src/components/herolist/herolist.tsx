import React, { useEffect, useState } from "react";
import Heroe from "./heroe/Heroe"

export interface IHero{
"id": string
"key": string |null
"name": string 
"title": string |null
"tags": [ string |null, string |null]

"stats": {
    "hp":number 
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

interface TProps {
    heroes: IHero[],
   
  }
  


export const Herolist = ({heroes}: TProps) =>{
    
     return( 
     <div className="flex flex-col justity-center text-white items-center p-6">
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-col-5 xl:grid-cols-6 gap-3"> 
            {heroes?.map((heroes)=>(
                <Heroe key={heroes.id} heroe={heroes}/>

            ))}

        </ul>

     </div>)
}