import {portfolioTechnologies} from "../portfolioTechnologies";
import {Paragraph} from "../../../../text/Paragraph";
import React from "react";

export const tomorrowJournalProject = {
    name: 'Tomorrow Journal',
    subtitle: "Journalling, made simple.",
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
