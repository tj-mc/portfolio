import React, {FunctionComponent} from "react";

import {FiraCode_300Light, FiraCode_400Regular, FiraCode_700Bold, useFonts} from "@expo-google-fonts/fira-code";
import {View} from "react-native";
import {theme} from "../../const/theme";

export const FontLoadContainer: FunctionComponent = ({children}) => {

    let [loaded] = useFonts({
        FiraCode_300Light,
        FiraCode_400Regular,
        FiraCode_700Bold
    });

    return loaded ? <>{children}</> : <BackDrop/>

}

const BackDrop: FunctionComponent = () => {
    return (
        <View style={{flex: 1, backgroundColor: theme.color.backdrop}}/>
    )
}
