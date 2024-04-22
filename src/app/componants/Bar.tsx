import { FunctionComponent } from "react"
import { ISkill } from "../../../type"

const Bar:FunctionComponent<{data:ISkill}>=({data:{level,name}})=>{
    return (
        <div className="my-2 text-white bg-gray-300 rounded-full">
            <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-blue-200 to-blue-800" style={{width:level}}> {name} </div>
        </div>
    )
}
export default Bar