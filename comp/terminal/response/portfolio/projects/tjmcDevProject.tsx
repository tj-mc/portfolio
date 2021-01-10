import {portfolioTechnologies} from "../portfolioTechnologies";
import {Paragraph} from "../../../../text/Paragraph";
import React from "react";

export const tjmcDevProject = {
    name: 'Portfolio Site',
    subtitle: "A flexible and interactive experience",
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
