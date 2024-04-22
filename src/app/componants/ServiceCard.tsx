import { IService } from "../../../type"
import { FunctionComponent } from "react"

const ServiceCard:FunctionComponent<{service:IService}>=({service:{about,title,Icon},})=>{
    return (
        <div className="flex items-center p-2 space-x-4"><Icon className="w-12 h-12 text-blue-600"/>
        <div>
            <h4><b> {title} </b></h4>
            <p> {about} </p>
        </div>
        </div>
    )
}
export default ServiceCard