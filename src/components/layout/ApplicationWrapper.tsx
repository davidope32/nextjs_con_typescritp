import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Footer } from "../common/Footer";
import { Nav } from "../common/Nav";


interface TProps {
  title: string;
  description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="bg-black min-h-screen flex flex-col" >

    <Head>
        <title>{title} |LOL</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className="bg-white h-20">
       <Nav />
    </header>

    <main className="grow flex flex-col text-white">
        {children}
        
    </main>
    

    <Footer/>

    </div>
  );
};
