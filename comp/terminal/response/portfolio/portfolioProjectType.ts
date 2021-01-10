import React from "react";
import {portfolioTechnologies} from "./portfolioTechnologies";

export type portfolioProject = {
    name: string,
    subtitle: string,
    thumbnail: any,
    body: React.FC
    technologies: Array<portfolioTechnologies>
}
