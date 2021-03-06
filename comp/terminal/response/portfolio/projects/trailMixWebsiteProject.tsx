import {portfolioTechnologies} from "../portfolioTechnologies";
import {Paragraph} from "../../../../text/Paragraph";
import React from "react";
import thumbnail from '../../../../../assets/img/projects/trailMixWebsite/thumbnail.png'

export const trailMixWebsiteProject = {
    name: 'Trail Mix Studios Website',
    subtitle: 'A truly custom brand experience.',
    thumbnail: thumbnail,
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
