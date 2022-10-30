import Link from "next/link";
import React, { FC, useContext } from "react";
import Image from "next/image"
import { userContext, UserContextProps } from '../context/UserContext';
export const Nav:FC =()=>{

const { userName, setUsername, userDetail } = useContext<UserContextProps>(userContext);
return (
<div >
<nav className="w-full flex items-center justify-between flex-wrap bg-teal-500 p-6">
<div className="flex items-center flex-shrink-0 text-white mr-6">

<span className="font-bold text-xl tracking-tight hover:text-white mr-4">League-RootLab</span>
<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
<div className="text-sm lg:flex-grow">
<span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-lg font-bold"><Link href="/"><a>Inicio</a></Link></span>
<span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-lg font-bold"><Link href="/heroes"><a>Heroes</a></Link></span>
<span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-lg font-bold"><Link href="/items"><a>Objetos</a></Link></span>
<span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-lg font-bold"><Link href="/events"><a>Registro</a></Link></span>
  

  </div>  
  </div>  
  </div>

<div className=" font-bold justify-right">


{userName && <span>El usuario es {userName}</span>}
        {!userName && <span>No hay sesión</span>}
        <span>{ userDetail.status.enabled }</span>
        <span>{ userDetail.email }</span>

      </div>
  
</nav>

</div>

)
}

