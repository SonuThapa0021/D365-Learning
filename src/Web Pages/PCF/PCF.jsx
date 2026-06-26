// import RoadMap from "./Web Pages/PCF/RoadMap";
import { Link } from "react-router-dom";


function PCF() {
  return (
    <div>
      <h1><Link to="/RoadMap"> PCF Mastery Roadmap (0 → Advanced) </Link></h1>

      <h1 className="Heading">What is PCF</h1>
      <p className="PeraGraph">test</p>

      <h2 className="Headingh2">PHASE 1 — TypeScript Mastery</h2>
      <p className="peragraph">PCF is TypeScript First.</p>
      
      <h3 className="Headingh3">Module 1.1 Types</h3>
      <ul className="list-disc list-outside md:list-inside">
        <li>string</li>
        <li>number</li>
        <li>boolean</li>
        <li>any</li>
        <li>unknown</li>
        <li>never</li>
      </ul>

      <h3 className="Headingh3">Module 1.2 Interfaces</h3>
      <p className="Code">
        {` interface Customer {
   name:string;
}`}
      </p>
    </div>
  )
}

export default PCF;