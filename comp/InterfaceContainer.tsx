import React, {FunctionComponent} from 'react'
import {View} from 'react-native'
import {theme} from "../const/theme";

export const InterfaceContainer: FunctionComponent = ({children}) => {
    return (
        <View
            style={{
                padding: 10,
                maxWidth: 800,
                backgroundColor: theme.color.backdrop,
            }}
        >
            {children}
        </View>
    )
}

