import {portfolioTechnologies} from "../portfolioTechnologies";
import {Paragraph} from "../../../../text/Paragraph";
import React from "react";

export const trailMixLiveStreamingProject = {
    name: 'Trail Mix Live Streaming',
    subtitle: "COVID safe live events",
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
