import { languages, tools } from "../../../data";
import Bar from "../componants/Bar";

export default function Resume() {
    return (
      <div className="p-6 py-2">
        <div className="grid gap-6 md:grid-cols-2 dark:text-white">
          <div>
            <h5 className="my-3 text-2xl font-bold"><u>Education</u> </h5>
            <div>
              <h5 className="my-2 text-xl font-bold">Advanced Technological
Institute -VAVUNIYA</h5>
              <p className="font-semibold">HNDIT (In Progress)</p>
              {/* <p>inab jdvgc jhvjdk JHGFGF HJFKF WFGKWWGF FJHGB JHFJFK JFKJBK</p> */}
            </div>
          </div>

          <div>
            <h5 className="my-3 text-2xl font-bold"> <u>Experience</u></h5>
            <div>
              <h5 className="my-2 text-xl font-bold">Software Developer - Trainee</h5>
              <p className="font-semibold">Woocurs PVT | archer Tek (Subsidiary)</p>
              <p>2023 September to 2024 February</p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 dark:text-white">
          <div>
            <h5 className=" my-3 text-2xl font-bold"> languages & framworks</h5>
            <div className="my-2">
              {languages.map(language=><Bar data={language} key={language.name}/>)}
            </div>
          </div>
          <div>
            <h5 className=" my-3 text-2xl font-bold"> tools & software</h5>
            <div className="my-2">
              {tools.map(tool=><Bar data={tool} key={tool.name}/>)}
            </div>
          </div>
        </div>
      </div>
      
    );
  }