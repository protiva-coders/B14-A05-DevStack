import {use} from "react";
import type { Itechnology } from "../../types/TechnologyType";

interface TechnologyProps{
    technologiesPromise: Promise<Itechnology[]>
}

const Technology = ({technologiesPromise}:TechnologyProps) => {
  const technologies = use(technologiesPromise);
  console.log(technologies);
    return (
        <div>
            
        </div>
    );
};

export default Technology;