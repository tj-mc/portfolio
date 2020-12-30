import React, {FunctionComponent, useEffect, useState} from "react";
import {Helmet} from 'react-helmet';
import {useSelector} from "react-redux";
import {RootState} from "../../store";

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


                {/* Force monospace font before font load */}
                {
                    fontLoad.ready ||
                    <style>
                        {'* {font-family: monospace!important;}'}
                    </style>
                }

            </Helmet>
            {children}
        </>
    )
}
