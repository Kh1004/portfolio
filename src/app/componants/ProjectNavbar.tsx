import { FunctionComponent } from "react"
import { Category } from "../../../type"

const NavItem:FunctionComponent<{value:Category | "all" ; handleFilterCategory:Function; active:string}>=({value,handleFilterCategory,active})=>{

    let className ="capitalize cursor-pointer hover:text-blue-500"
    if(active === value){
        className += " text-blue-500"
    }
    return (
        <li className={className} onClick={()=>handleFilterCategory(value)}>
            {value}
        </li>
    )
}

const ProjectNavbar:FunctionComponent<{handleFilterCategory:Function,active:string}>=(props)=>{
    
    return (
        <div className="px-3 py-2 space-x-3 overflow-x-scroll list-none flex dark:text-white">
            <NavItem value="all" {...props} />
            <NavItem value="react" {...props}/>
            <NavItem value="mongo" {...props}/>
            <NavItem value="django" {...props}/>
            <NavItem value="node" {...props}/>
        </div>
    )
}

export default ProjectNavbar