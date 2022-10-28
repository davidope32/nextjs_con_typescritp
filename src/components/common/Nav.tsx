import Link from "next/link";
import React, { FC } from "react";

export const Nav:FC =()=>{
return (
<div >
    <nav className="w-full flex gap-5 p-6 items-center text-2xl">
<Link href="/"><a>Inicio</a></Link>
<Link href="/heroes"><a>Heroes</a></Link>
</nav>

</div>

)
}

 