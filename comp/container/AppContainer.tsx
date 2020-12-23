import React, {FunctionComponent} from 'react'
import {View} from 'react-native'
import {theme} from "../../const/theme";

export const AppContainer: FunctionComponent = ({children}) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.color.backdrop,
            }}
        >
                {children}
        </View>
    )
}

