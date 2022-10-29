import { GetServerSideProps, NextPage} from "next";
import React from "react";
import { IItem } from "../../components/itemslist/itemslist";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import Image from "next/image"

interface TProps{
    item: IItem
}
const DetallesItemsPages: NextPage<TProps>= ({item})=>{
   
return (
<div> 
    <ApplicationWrapper title={item.name}>
    <div className="flex flex-col justity-center text-white items-center p-8">

<Image  className="cursor-pointer" 
src={item.icon} 
alt={`${item.name} imagen`}
width={250}
height={250}/>   
<div className="text-white font-bold text-xl">OBJETO: {item.name}</div>
<div className="grid grid-cols-3 gap-3">
<div className="fill col-start-1 col-span-3 text-lg font-bold justify-center items-center"></div>
<div> Descripcion: {item.description} </div>
<div> Categoria: {item.tags[0]} </div>
<div> Stats: {item.stats.FlatMovementSpeedMod}</div>

<div className="col-start-1 col-span-3">
<p className="font-bold">Descripcion:</p> {item.description}</div>
</div>
</div>


    </ApplicationWrapper>
</div>
)
}


export const getServerSideProps: GetServerSideProps= async (context) =>{
    const res= await fetch(
        process.env.NEXT_PUBLIC_API_URL+"/items/"+context.params?.id
    )
    const item = await res.json()
    return{
        props:{

           item
            
        }
    }
}


export default DetallesItemsPages


