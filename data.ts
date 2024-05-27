
import { RiComputerLine } from "react-icons/ri"
import { IProject, IService, ISkill } from "./type"
import { FaServer } from "react-icons/fa"
import {  AiOutlineApi } from "react-icons/ai"
import { MdDeveloperMode } from "react-icons/md"
import { CgDesignmodo } from "react-icons/cg"


export const services:IService[]=[
    {
        title:"Frontend Development",
        about:"I can build a beautifull scalable websites using HTML , CSS and React.js",
        Icon:RiComputerLine
    },
    {
        title:"Backend Development",
        about:"handle database, api using Express & other popular frameworks",
        Icon:FaServer

    },
    {
        title:"Api Development",
        about:"I can develop REST api I can develop REST api  ",
        Icon:AiOutlineApi
    },
    {
        title:"Competitive Coder",
        about:"A daily problem solver in HackerRank and Leet Code",
        Icon:MdDeveloperMode
    },
    {
        title:"UI/UX Designer",
        about:"Stunning user interface designer using Figma and Framer",
        Icon:CgDesignmodo
    },
    // {
    //     title:" Whatever",
    //     about:"whatever",
    //     Icon:RiComputerLine
    // },
    

]

export const languages:ISkill[]=[
    {
        name:"python",
        level:'90%',
    },
    {
        name:"Java",
        level:'75%',
    },
    {
        name:"javascript",
        level:'80%'
    },
    {
        name:"react",
        level:'90%'
    },
    {
        name:"next",
        level:'90%'
    },
    {
        name:"django",
        level:'90%'
    },
    {
        name:"laravel",
        level:'90%'
    },
]

export const tools:ISkill[]=[
    {
        name:"figma",
        level:'70%'
    },
    {
        name:"photoshop",
        level:'60%'
    }
]

export const projects:IProject[]=[
    {
        name:"E-commerce",
        description:"It's my hndit individual project",
        image_path:"/images/dj.PNG",
        deployed_url:"#",
        github_url:"#",
        category:["django"],
        key_techs:["django","SQLite",],

    },
    {
        name:"POS system",
        description:"It's my hndit Group project",
        image_path:"/images/dj.PNG",
        deployed_url:"#",
        github_url:"#",
        category:["C#"],
        key_techs:["C#","MySql"],

    },
    {
        name:"Johntravels",
        description:"It's a travel and tour booking website",
        image_path:"/images/dj.png",
        deployed_url:"#",
        github_url:"#",
        category:["PHP"],
        key_techs:["PHP","MYSql"],

    },
    {
        name:"Woocures Academy",
        description:"It's a academy website",
        image_path:"/images/dj.png",
        deployed_url:"#",
        github_url:"#",
        category:["PHP"],
        key_techs:["PHP","MYSql"],

    },
]
