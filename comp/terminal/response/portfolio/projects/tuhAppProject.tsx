import {portfolioTechnologies} from "../portfolioTechnologies";
import {Paragraph} from "../../../../text/Paragraph";
import React from "react";

export const tuhAppProject = {
    name: 'TUH App',
    subtitle: 'A complex product made simple',
    thumbnail: '',
    technologies: [
        portfolioTechnologies.reactNative,
        portfolioTechnologies.react,
        portfolioTechnologies.javascript,
    ],
    body: () => {
        return (
            <Paragraph>
                Test content
            </Paragraph>
        )
    }
}
