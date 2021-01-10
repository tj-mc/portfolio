import {portfolioTechnologies} from "../portfolioTechnologies";
import {Paragraph} from "../../../../text/Paragraph";
import React from "react";

export const trailMixWebsiteProject = {
    name: 'Trail Mix Studios Website',
    subtitle: 'A truly custom brand experience',
    thumbnail: '',
    technologies: [
        portfolioTechnologies.php,
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
