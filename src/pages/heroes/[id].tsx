import { GetServerSideProps, NextPage} from "next";
import React from "react";
import { IHero } from "../../components/herolist/herolist";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";


interface TProps{
    heroe: IHero
}

const DetallesHeroesPages: NextPage<TProps>= ({heroe})=>{
   
console.log(heroe)
return (
<div> 
    <ApplicationWrapper title={heroe.name}>


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


