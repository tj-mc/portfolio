import React, {ReactComponentElement} from "react";
import {terminalResponse} from "../../store/terminalSlice";
import {NotFoundResponse} from "../../comp/terminal/response/NotFoundResponse";
import {ResponseContainer} from "../../comp/terminal/response/ResponseContainer";
import {ResumeResponse} from "../../comp/terminal/response/ResumeReponse";
import {PortfolioResponse} from "../../comp/terminal/response/PortfolioResponse";
import {PublicationsResponse} from "../../comp/terminal/response/PublicationsResponse";
import {OpenSourceResponse} from "../../comp/terminal/response/OpenSourceResponse";
import {SkillsResponse} from "../../comp/terminal/response/SkillsResponse";

export const getResponseComponent = (prompt: string, response: terminalResponse): ReactComponentElement<any> => {

    switch (response) {

        case terminalResponse.portfolio:
            return (
                <ResponseContainer prompt={prompt}>
                    <PortfolioResponse/>
                </ResponseContainer>
            )

        case terminalResponse.blog:
            return (
                <ResponseContainer prompt={prompt}>
                    <PublicationsResponse/>
                </ResponseContainer>
            )

        case terminalResponse.openSource:
            return (
                <ResponseContainer prompt={prompt}>
                    <OpenSourceResponse/>
                </ResponseContainer>
            )

        case terminalResponse.resume:
            return (
                <ResponseContainer prompt={prompt}>
                    <ResumeResponse/>
                </ResponseContainer>
            )

        case terminalResponse.notFound:
            return (
                <ResponseContainer prompt={prompt}>
                    <NotFoundResponse/>
                </ResponseContainer>
            )

        case terminalResponse.skills:
            return (
                <ResponseContainer prompt={prompt}>
                    <SkillsResponse/>
                </ResponseContainer>
            )
        default:
            return <NotFoundResponse/>
    }
}
