import {portfolioTechnologies} from "../portfolioTechnologies";
import {Paragraph} from "../../../../text/Paragraph";
import React from "react";

export const smileSeekerSmileRevealProject = {
    name: 'SmileSeeker - Smile Reveal',
    subtitle: "Building excitement through the orthodontic process",
    thumbnail: '',
    technologies: [
        portfolioTechnologies.react,
        portfolioTechnologies.laravel,
        portfolioTechnologies.sql,
    ],
    body: () => {
        return (
            <Paragraph>
                Test content
            </Paragraph>
        )
    }
}
