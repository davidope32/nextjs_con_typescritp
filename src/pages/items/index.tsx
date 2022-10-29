import React, { NextPage } from "next";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { Itemlist } from "../../components/itemslist/itemslist";

interface TProps {
  response: string;
}

const items: NextPage<TProps> = () => {
  return (
    <ApplicationWrapper
      title="Items"
      description="Lista de Items del League of Legends"
    >
      <div className="justify-center text-6xl font-bold text-center">
      <h1 className="text-green-600 text-5xl font-bold sm:text-xl md:text-2xl xl:text-5xl ">Lista de Objetos</h1>
      </div>
      
    <Itemlist />
   
    </ApplicationWrapper>
  );
};

export default items;