"use client"
import { FunctionComponent, useState } from "react"
import { IProject } from "../../../type"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import Image from "next/image"

const ProjectCard:FunctionComponent<{project:IProject}>=({project:{name,image_path,category,deployed_url,description,key_techs,github_url},})=>{
    
    const [showDetails, setShowDetails] =useState(false)

    return (
        <div>
            <img src={image_path} alt={name} className="cursor-pointer" onClick={()=>setShowDetails(true)} width="300" height="150" />
            <p className="my-2 text-center"> {name} </p>

            {
                showDetails && (
           

            <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black bg-green-100 dark:text-white dark:bg-gray-900">
                <div>
                    <img src={image_path} alt={name}/>
                    <div className="flex justify-center my-4 space-x-3">
                    <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-500"><AiFillGithub/><span>GitHub</span></a>
                    <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-500"><AiFillProject/><span>Project</span></a>
                    </div>
                </div>
                <div>
                    <h2 className="mb-3 text-xl font-medium md:text-2xl"> {name} </h2>
                    <h3 className=" mb-3 font-medium "> {description} </h3>
                    <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                        {
                            key_techs.map((tech=><span key={tech} className="px-2 p-2 py-1 my-1 bg-gray-200 dark:bg-gray-800 rounded">
                                {tech}
                            </span>))
                        }
                    </div>
                </div>
                <button onClick={()=>setShowDetails(false)} className="absolute top-3 right-3 p-1 rounded-full focus:outline-none bg-gray-200 dark:bg-gray-600" >
                    <MdClose size={30}/>
                </button>
            </div>
)}
        </div>
        
    )
}
export default ProjectCard