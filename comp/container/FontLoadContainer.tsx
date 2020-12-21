import React, {FunctionComponent} from "react";

import {
    FiraCode_300Light,
    FiraCode_400Regular,
    FiraCode_500Medium,
    FiraCode_600SemiBold,
    FiraCode_700Bold,
    useFonts
} from "@expo-google-fonts/fira-code";

import AppLoading from "expo-app-loading";

export const FontLoadContainer: FunctionComponent = ({children}) => {

    let [loaded] = useFonts({
        FiraCode_300Light,
        FiraCode_400Regular,
        FiraCode_500Medium,
        FiraCode_600SemiBold,
        FiraCode_700Bold
    });

    return loaded ? <>{children}</> : <AppLoading/>

}
