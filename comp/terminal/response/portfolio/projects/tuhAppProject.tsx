import {portfolioTechnologies} from "../portfolioTechnologies";
import {Paragraph} from "../../../../text/Paragraph";
import React from "react";
import thumbnail from '../../../../../assets/img/projects/tuhApp/thumbnail.png'

export const tuhAppProject = {
    name: 'TUH App',
    subtitle: 'A complex product made simple.',
    thumbnail: thumbnail,
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
