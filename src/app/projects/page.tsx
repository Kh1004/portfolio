"use client"
import { useState } from "react";
import { projects as projectData } from "../../../data";
import ProjectCard from "../componants/ProjectCard";
import ProjectNavbar from "../componants/ProjectNavbar";
import { Category } from "../../../type";

export default function Projects() {

  const [projects,setProject] = useState(projectData);
  const [active,setActive] = useState("all");
  const handleFilterCategory=(category:Category | "all")=>{
    if(category==="all"){
      setProject(projectData);
      setActive(category);
      return;
    }
    const newArray = projectData.filter(project=>project.category.includes(category));
    setProject(newArray)
    setActive(category)
  }

    return (
      <div className="px-5 py-2 overflow-y-scroll " style={{height:'85 vh'}}>
        <ProjectNavbar handleFilterCategory= {handleFilterCategory} active= {active} />
        <div className="grid grid-cols-12 gap-4 my-3 relative">
          {
            projects.map(project=>(
              <div key={project.name} className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-blue-200 dark:bg-blue-800 dark:text-white rounded">
                <ProjectCard project={project} key={project.name}/>
              </div>
            ))
          }
        </div>
      </div>
    );
  }