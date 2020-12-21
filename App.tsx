import React from 'react';
import {View} from 'react-native';
import AppLoading from "expo-app-loading";
import {
    FiraCode_300Light,
    FiraCode_400Regular,
    FiraCode_500Medium,
    FiraCode_600SemiBold,
    FiraCode_700Bold,
    useFonts
} from "@expo-google-fonts/fira-code";
import {theme} from "./const/theme";
import {HeaderOne} from "./comp/header/HeaderOne";
import {HeaderThree} from "./comp/header/HeaderThree";
import {HeaderTwo} from "./comp/header/HeaderTwo";

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
        <View
            style={{
                backgroundColor: theme.color.backdrop,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <HeaderOne text={'Tom McIntosh'}/>
            <HeaderTwo text={'Quick Commands'}/>
            <HeaderThree text={'Software Developer & Creative'}/>
        </View>
    );
}
