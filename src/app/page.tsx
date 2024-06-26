import { title } from "process";
import { services } from "../../data";
import ServiceCard from "./componants/ServiceCard";

    const Home = ()=>{

    return (
      <div className="flex flex-col px-6 pt-1 dark:text-white">
        <h5 className="my-3 font-medium ">I am currently doing HND IT in Advanced Technological Institute - Vavuniya. 
        </h5>
        <div className="p-4 mt-5 bg-gray-400 dark:bg-gray-900" style={{marginLeft:"-1.5rem",marginRight:"-1.5rem"}}>
          <h6 className="my-3 text-xl font-bold tracking-wide">What I am doing</h6>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service: any) =>(
              <div key={title} className="bg-gray-200 dark:bg-gray-700 rounded-lg lg:col-span-1">
              <ServiceCard service={service}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    );
  }
  export default Home;

