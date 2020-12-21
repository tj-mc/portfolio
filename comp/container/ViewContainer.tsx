import React, {FunctionComponent} from 'react'
import {View} from 'react-native'
import {theme} from "../../const/theme";

export const ViewContainer: FunctionComponent = ({children}) => {
    return (
        <View
            style={{
                padding: '5%',
                backgroundColor: theme.color.backdrop,
            }}
        >
            {children}
        </View>
    )
}

