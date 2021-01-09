import React, {ReactComponentElement} from "react";
import {NotFoundResponse} from "../../comp/terminal/response/NotFoundResponse";
import {ResponseContainer} from "../../comp/terminal/response/ResponseContainer";
import {ResumeResponse} from "../../comp/terminal/response/ResumeReponse";
import {PortfolioResponse} from "../../comp/terminal/response/PortfolioResponse";
import {PublicationsResponse} from "../../comp/terminal/response/PublicationsResponse";
import {OpenSourceResponse} from "../../comp/terminal/response/OpenSourceResponse";
import {SkillsResponse} from "../../comp/terminal/response/SkillsResponse";
import {standardTerminalResponse} from "./standardTerminalResponse";

export const getResponseComponent = (prompt: string, response: standardTerminalResponse): ReactComponentElement<any> => {

    switch (response) {

        case standardTerminalResponse.portfolio:
            return (
                <ResponseContainer prompt={prompt}>
                    <PortfolioResponse/>
                </ResponseContainer>
            )

        case standardTerminalResponse.blog:
            return (
                <ResponseContainer prompt={prompt}>
                    <PublicationsResponse/>
                </ResponseContainer>
            )

        case standardTerminalResponse.openSource:
            return (
                <ResponseContainer prompt={prompt}>
                    <OpenSourceResponse/>
                </ResponseContainer>
            )

        case standardTerminalResponse.resume:
            return (
                <ResponseContainer prompt={prompt}>
                    <ResumeResponse/>
                </ResponseContainer>
            )

        case standardTerminalResponse.notFound:
            return (
                <ResponseContainer prompt={prompt}>
                    <NotFoundResponse/>
                </ResponseContainer>
            )

        case standardTerminalResponse.skills:
            return (
                <ResponseContainer prompt={prompt}>
                    <SkillsResponse/>
                </ResponseContainer>
            )
        default:
            return <NotFoundResponse/>
    }
}
