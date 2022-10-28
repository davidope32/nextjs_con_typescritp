import React, { NextPage } from "next";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import {Herolist} from "../../components/herolist/herolist"

interface TProps {
  response: string;
}

const heroes: NextPage<TProps> = () => {
  return (
    <ApplicationWrapper
      title="Heroes"
      description="Lista de Heroes del League of Legends"
    >
      <div className="justify-center text-6xl font-bold text-center">
      <h1 >Lista de Campeopnes</h1>
      </div>
      
    <Herolist />
   
    </ApplicationWrapper>
  );
};

export default heroes;