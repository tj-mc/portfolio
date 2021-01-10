import {portfolioTechnologies} from "../portfolioTechnologies";
import {Paragraph} from "../../../../text/Paragraph";
import React from "react";

export const naocaFuneralStreamProject = {
    name: 'Naoca Funeral Stream',
    subtitle: "Connecting families to their loved ones",
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
