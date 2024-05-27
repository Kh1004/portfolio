"use client"
import { AiFillGithub, AiFillLinkedin,AiFillMail,AiFillMobile } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GrDownload } from "react-icons/gr";
import { useTheme } from "next-themes";
import Image from "next/image"

export default function Sidebar(){

  const {theme,setTheme}=useTheme();
  const changetheme=()=>{
    setTheme(theme=='light'?"dark":"light");
  }
    return (
        <div className="col-span-12 bg-white dark:bg-black lg:col-span-4 rounded-2xl p-4 text-center ">
        <div>
          <img src="images/profile.png" alt="profile" className="w-32 h-32 mx-auto rounded-full"></img>
          <h3 className="my-4 text-3xl font-medium tracking-wider dark:text-white">
            <span className=" text-blue-500 font-serif font-bold">kavinath</span><br></br>Suventhiran
          </h3>
          <p className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center font-bold dark:bg-gray-900 dark:text-white">Web Developer</p>
          {/* <a className="flex item-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full  dark:bg-gray-900 dark:text-white" href=""><GrDownload className="w-4 h-6"/> download resume</a> */}
          <div className="flex justify-around w-9/12 my-5 text-blue-500 md:w-full">
          <a href="https://github.com/Kh1004"><AiFillGithub className="w-8 h-8 cursor-pointer"/>  </a>
          <a href="https://linkedin.com/in/kavinath04"><AiFillLinkedin className="w-8 h-8 cursor-pointer"/> </a>
          

          </div>
          <div className="py-4 my-5 bg-gray-200  dark:bg-gray-900 dark:text-white" style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
            <div className="flex items-center justify-center">
              <span><GoLocation/>Muthalaikuli , <br></br>karanavai south , karaveddy <br></br>Jaffna.</span>
            </div><br/>
            <p className="flex items-center justify-center"><AiFillMail/> kavinkavi004@gmail.com</p>
            <p className="flex items-center justify-center"><AiFillMobile/>+94778414044</p>
          </div>
          <button onClick={()=>window.open('mailto:kavinkavi004@gmail.com')} className="bg-gradient-to-r from-blue-200 to-blue-800 w-8/12 rounded-full py-2px-5 text-white my-2 focus:outline-none">E-mail Me</button>
          <button onClick={changetheme} className="bg-gradient-to-r from-blue-200 to-blue-800 w-8/12 rounded-full py-2px-5 text-white my-2">Toggle theme</button>
        </div>
      </div>
    );
}
