import React, {FunctionComponent} from "react";
import {Helmet} from 'react-helmet';
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {theme} from "../../const/theme";


const alwaysStyle = `
#blur-container {
    z-index: 1!important;
    background: rgba( 41, 41, 41, 0.0 ) !important;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) !important;
    backdrop-filter: blur( 5px ) !important;
    -webkit-backdrop-filter: blur( 5px ) !important;
    border-radius: 10px!important;
} 
`

const readyStyle = `
#blur-container {
    opacity: 0;
    transition: all 0.4s ease;
    pointer-events: none;
}
`

const loadingStyle = `
* {
    font-family: monospace!important;
}

#blur-container {
    opacity: 1;
}
`

const particleStyle = `
/* ---- particles.js container ---- */
#particle-effect-container {
    /*position: absolute;*/
    /*width: 100%;*/
    /*height: 100%;*/
    background-color: #292929;
    background-image: url("");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
}

`

const htmlColor = `
html {background-color: ${theme.color.backdrop}}
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

                <style>{particleStyle}</style>

                <style>{htmlColor}</style>

                {/* Force monospace font and blur before font load */}
                {fontLoad.ready ? <style>{readyStyle}</style> : <style>{loadingStyle}</style>}


            </Helmet>
            {children}
        </>
    )
}
