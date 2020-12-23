import React from 'react';

import {ViewContainer} from "./comp/container/ViewContainer";
import {AppContainer} from "./comp/container/AppContainer";
import {MainView} from "./comp/view/MainView";
import {FontLoadContainer} from "./comp/container/FontLoadContainer";
import {FillViewportContainer} from "./comp/container/FillViewportContainer";


export default function App() {
    return (
        <FillViewportContainer>
            <FontLoadContainer>
                <AppContainer>
                    <ViewContainer>
                        <MainView/>
                    </ViewContainer>
                </AppContainer>
            </FontLoadContainer>
        </FillViewportContainer>
    );
}

