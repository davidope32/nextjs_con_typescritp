import { GetServerSideProps, NextPage} from "next";
import React from "react";
import { IHero } from "../../components/herolist/herolist";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import Image from "next/image"

interface TProps{
    heroe: IHero
}

const DetallesHeroesPages: NextPage<TProps>= ({heroe})=>{
   
console.log(heroe)
return (
<div> 
    <ApplicationWrapper title={heroe.name}>
        <div className="flex flex-col justity-center text-white items-center p-8">

                <Image  className="cursor-pointer" 
                src={heroe.icon} 
                alt={`${heroe.name} imagen`}
                width={250}
                height={250}/>   
        <div className="text-white font-bold text-xl">Campeon: {heroe.name}</div>
        <div className="grid grid-cols-3 gap-3">
        <div className="fill col-start-1 col-span-3 text-lg font-bold justify-center items-center"></div>
        <div> HP: {heroe.stats.hp} </div>
        <div> Armor: {heroe.stats.armor} </div>
        <div> attackspeed: {heroe.stats.attackspeed}</div>
        <div> movespeed: {heroe.stats.movespeed} </div>
        <div>hpregen: {heroe.stats.hpregen}</div>
        <div>hpregenperlevel: {heroe.stats.hpregenperlevel}</div>
        <div className="col-start-1 col-span-3">
            <p className="font-bold">Descripcion:</p> {heroe.description}</div>
        
    
 
        </div>



                   
                
            </div>
    </ApplicationWrapper>
</div>
)
}


export const getServerSideProps: GetServerSideProps= async (context) =>{
    const res= await fetch(
        process.env.NEXT_PUBLIC_API_URL+"/heroes/"+context.params?.id
    )
    const heroe = await res.json()
    return{
        props:{

            heroe
            
        }
    }
}


export default DetallesHeroesPages


