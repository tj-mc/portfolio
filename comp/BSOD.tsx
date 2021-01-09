import React, {FC} from "react";
import {View} from 'react-native';
import {theme} from "../const/theme";

export const BSOD: FC = () => {
    return (
        <View
            //@ts-ignore - RNW
            style={{
                position: 'fixed',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: theme.color.bsod.backdrop
            }}
        >

        </View>
    )
}
