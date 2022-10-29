import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image"
export const Nav:FC =()=>{
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

  </div>
  </div>  </div>
  <div className="block lg:hidden"> 
</div>


</nav>

</div>

)
}

