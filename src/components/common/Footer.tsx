import Link from "next/link";
import React, { FC } from "react";

export const Footer:FC =()=>{
return (
<div>

<footer className="flex p-6 h-20 bg-white text-black items-center justify-center">
        <a
          href="https://rootstack.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className="">Rootstack</span>
        </a>
      </footer>


</div>

)
}

 