import { NextResponse, NextRequest } from "next/server";
import { IHero } from "./components/herolist/herolist";
import { IItem } from "./components/itemslist/itemslist";


export async function middleware(request: NextRequest){

    const urlitems = request.nextUrl.pathname.split('/').filter(Boolean)

    if( urlitems[0]==="heroes" && urlitems.length===2){
        const heroeid= urlitems[1]

        const heroes: IHero[] =await fetch(process.env.NEXT_PUBLIC_API_URL+"/heroes")
        .then((res)=>res.json())
        .catch((error)=>console.error(error)) as IHero[]

        if(!heroes.some((heroe) => heroe.id===heroeid)){
          
            return NextResponse.redirect(new URL("/heroes", request.url))

        }
        
    }

    if( urlitems[0]==="items" && urlitems.length===2){
        const itemId= urlitems[1]

        const items: IItem[] =await fetch(process.env.NEXT_PUBLIC_API_URL+"/items")
        .then((res)=>res.json())
        .catch((error)=>console.error(error)) as IItem[]

        if(!items.some((item) => item.id===itemId)){
          
            return NextResponse.redirect(new URL("/items", request.url))

        }
        
    }
    

}


export const config={

    matcher: ['/heroes/:id*', '/items/:id*']
}