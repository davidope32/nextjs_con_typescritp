import Link from "next/link";
import React, { FC } from "react";

export const Footer:FC =()=>{
return (

<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022| David O. Peña | All Rights Reserved. | davidope32@gmail.com
</span>
<ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <li className="mr-4 md:mr-6">
       RootLab
    </li>
    <li className="mr-4 md:mr-6">
        NextJS
    </li>

</ul>
</footer>

)
}

