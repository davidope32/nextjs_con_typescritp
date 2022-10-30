import React, { GetStaticProps, NextPage } from "next";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import {Herolist, IHero} from "../../components/herolist/herolist"

interface TProps {
  heroes: IHero[],
  response: string;
}

const Heroes: NextPage<TProps> = ({heroes }) => {
  return (
    <ApplicationWrapper
      title="Heroes"
      description="Lista de Heroes del League of Legends"
    >
      <div className="justify-center text-6xl font-bold text-center">
      <h1 className="text-green-600 text-5xl font-bold sm:text-xl md:text-2xl xl:text-5xl  ">Lista de Campeopnes</h1>
      </div>
      
    <Herolist heroes={heroes}/>
   
    </ApplicationWrapper>
  );
};

export default Heroes;

export const getStaticProps: GetStaticProps = async(context)=>{
 
  const heroes=await fetch(process.env.NEXT_PUBLIC_API_URL+"/heroes")
  .then((res)=>res.json())
  .catch((error)=>console.error(error))

   

  return{
    props:{
     heroes
    },
    revalidate: 10
  }
}