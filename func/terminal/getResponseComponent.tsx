import React, {ReactComponentElement} from "react";
import {NotFoundResponse} from "../../comp/terminal/response/NotFoundResponse";
import {ResponseContainer} from "../../comp/terminal/response/ResponseContainer";
import {ResumeResponse} from "../../comp/terminal/response/ResumeReponse";
import {PublicationsResponse} from "../../comp/terminal/response/PublicationsResponse";
import {OpenSourceResponse} from "../../comp/terminal/response/OpenSourceResponse";
import {standardTerminalResponse} from "./standardTerminalResponse";

export const getResponseComponent = (prompt: string, response: standardTerminalResponse): ReactComponentElement<any> => {

    switch (response) {

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

        default:
            return <NotFoundResponse/>
    }
}
