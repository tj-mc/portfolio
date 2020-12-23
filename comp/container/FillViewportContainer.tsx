import React, {FunctionComponent} from "react";
import {View} from "react-native";

export const FillViewportContainer: FunctionComponent = props => {
    return (
        <View
            style={{
                minHeight: '100vh'
            }}
        >
            {props.children}
        </View>
    )
}
