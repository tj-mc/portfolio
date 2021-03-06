import React from 'react';
import {Provider} from 'react-redux'

import {ViewContainer} from "./comp/container/ViewContainer";
import {AppContainer} from "./comp/container/AppContainer";
import {MainView} from "./comp/view/MainView";
import {FillViewportContainer} from "./comp/container/FillViewportContainer";
import {store} from "./store";
import {FontLoadContainer} from "./comp/container/FontLoadContainer";
import {HelmetContainer} from "./comp/container/HelmetContainer";
import {BlurContainer} from "./comp/container/BlurContainer";


export default function App() {
    return (
        <Provider {...{store}}>
            <HelmetContainer>
                <BlurContainer>
                    <FillViewportContainer>
                        <FontLoadContainer>
                            <AppContainer>
                                <ViewContainer>
                                    <MainView/>
                                </ViewContainer>
                            </AppContainer>
                        </FontLoadContainer>
                    </FillViewportContainer>
                </BlurContainer>
            </HelmetContainer>
        </Provider>
    );
}

