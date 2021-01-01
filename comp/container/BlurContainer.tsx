import React, {FunctionComponent} from "react";
import {View, Text} from 'react-native'
import {BlurView} from "expo-blur";

export const BlurContainer: FunctionComponent = ({children}) => {

    return (
        <>
            <div id={'test_id'} style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }}/>
            <>
                {children}
            </>
        </>
    )

}
