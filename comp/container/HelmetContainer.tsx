import React, {FunctionComponent, useEffect, useState} from "react";
import {Helmet} from 'react-helmet';
import {useSelector} from "react-redux";
import {RootState} from "../../store";


const alwaysStyle = `
#test_id {
    z-index: 1!important;
    background: rgba( 41, 41, 41, 0.0 ) !important;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) !important;
    backdrop-filter: blur( 5px ) !important;
    -webkit-backdrop-filter: blur( 5px ) !important;
    border-radius: 10px!important;
} 
`

const readyStyle = `
#test_id {
    opacity: 0;
    transition: all 0.15s ease;
    pointer-events: none;
}
`

const loadingStyle = `
* {
    font-family: monospace!important;
}

#test_id {
    opacity: 1;
}
`

export const HelmetContainer: FunctionComponent = ({children}) => {

    const fontLoad = useSelector((state: RootState) => state.fontLoad)

    return (
        <>
            <Helmet>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <title>Tom McIntosh | Brisbane App Developer</title>
                <meta name="description"
                      content={"Looking for an app or website? I build digital experiences that your clients will remember. Choose a Brisbane based developer for your important web and mobile projects."}
                />
                <meta name="author" content="Tom McIntosh"/>
                <meta name="keywords" content="Brisbane, React, Javascript, App Developer"/>
                <meta name="google" content="notranslate"/>

                {/* Favicon */}
                <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico"/>

                <style>{alwaysStyle}</style>

                {/* Force monospace font before font load */}
                {
                    fontLoad.ready
                        ?
                        <style>{readyStyle}</style>
                        :
                        <style>{loadingStyle}</style>

                }

            </Helmet>
            {children}
        </>
    )
}
