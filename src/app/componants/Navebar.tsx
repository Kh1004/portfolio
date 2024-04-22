"use client"
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

const NavItem:FunctionComponent<{
    activeItem:string,setActiveItem:Function,name:string,route:string
}>=({activeItem,name,route,setActiveItem})=>{
    return(
        activeItem !== name?(
            <Link href={route}>
                <span onClick={()=>setActiveItem(name)} className="hover:text-blue-500 dark:text-white ">{name}</span>
            </Link>
        ):null
    )
}

const Navbar=()=>{
    const [activeItem,setActiveItem]=useState<string>('');

    const router = useRouter();
  const { pathname } = router;

    console.log(pathname);
    useEffect(()=>{
        if(pathname==='/') setActiveItem('About')
        if(pathname==='/projects') setActiveItem('Projects')
        if(pathname==='/resume') setActiveItem('Resume')
    },[pathname])

    return (
        <><div className="flex justify-between px-5 my-3">
            <span className="font-bold text-blue-500 text-xl border-b-4 border-blue-500"> {activeItem} </span>
        <div className="flex space-x-3 text-lg" >
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/"/>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects"/>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume"/>
        </div>
        </div>
        </>
    )
}

export default Navbar;


