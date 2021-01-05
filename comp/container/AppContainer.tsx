import React, {FunctionComponent} from 'react'
import {View} from 'react-native'
import {theme} from "../../const/theme";
import {ViewSource} from "../ViewSource";
import {RocketAnimation} from "../animated/RocketAnimation";
import {ContactModal} from "../modal/ContactModal";

export const AppContainer: FunctionComponent = ({children}) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                // overflow: 'hidden',
                backgroundColor: theme.color.backdrop,
            }}
        >
            <>
                {children}
                <ViewSource/>
                <RocketAnimation/>
                <ContactModal/>
            </>
        </View>
    )
}

