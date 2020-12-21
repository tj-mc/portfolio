import React from 'react';

import {ViewContainer} from "./comp/container/ViewContainer";
import {AppContainer} from "./comp/container/AppContainer";
import {MainView} from "./comp/view/MainView";
import {FontLoadContainer} from "./comp/container/FontLoadContainer";

export default function App() {
    return (
        <FontLoadContainer>
            <AppContainer>
                <ViewContainer>
                    <MainView/>
                </ViewContainer>
            </AppContainer>
        </FontLoadContainer>
    );
}

