import React, { NextPage } from "next";
import { ApplicationWrapper } from "../components/layout/ApplicationWrapper";

type HomeProps = {
  response: string;
};

const Inicio: NextPage<HomeProps> = () => {
  return (
    <ApplicationWrapper
      title="Inicio"
      description="Bienvenido">

<div className="grow flex flex-col justify-center items-center bg-[url('/img/bg-home.jpg')] bg-cover">
        <div className="grow bg-black w-full justify-center items-center flex opacity-70">
          <h1 className="text-7xl font-bold underline text-white">
            Bienvenidos a Nuestro Sitio Web
          </h1>
        </div>
      </div>
    </ApplicationWrapper>
  );
};

export default Inicio;
