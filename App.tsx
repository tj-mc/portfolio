import React from 'react';
import AppLoading from "expo-app-loading";
import {
    FiraCode_300Light,
    FiraCode_400Regular,
    FiraCode_500Medium,
    FiraCode_600SemiBold,
    FiraCode_700Bold,
    useFonts
} from "@expo-google-fonts/fira-code";
import {HeaderOne} from "./comp/text/header/HeaderOne";
import {HeaderThree} from "./comp/text/header/HeaderThree";
import {HeaderTwo} from "./comp/text/header/HeaderTwo";
import {BodyText} from "./comp/text/BodyText";
import {QuickCommand} from "./comp/pressable/QuickCommand";
import {PromptLine} from "./comp/PromptLine";
import {Terminal} from "./comp/Terminal";
import {InterfaceContainer} from "./comp/InterfaceContainer";
import {AppContainer} from "./comp/AppContainer";

export default function App() {

    let [fontsLoaded] = useFonts({
        FiraCode_300Light,
        FiraCode_400Regular,
        FiraCode_500Medium,
        FiraCode_600SemiBold,
        FiraCode_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <AppContainer>
            <InterfaceContainer>
                <>
                    <HeaderOne text={'Tom McIntosh'}/>
                    <HeaderThree text={'Software Developer & Creative'}/>
                    <HeaderTwo text={'Quick Commands'}/>
                    <BodyText
                        text={'My name is Tom, and I build digital experiences. If you’re interested in building a world-class mobile app, or an eye catching website, I’m always up for a chat.'}/>
                    <QuickCommand text={'resume'} onPress={() => console.log('resume')}/>
                    <PromptLine/>
                    <Terminal/>
                </>
            </InterfaceContainer>
        </AppContainer>
    );
}
