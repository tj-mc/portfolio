import React, {FC} from "react";
import {View} from 'react-native';
import {theme} from "../const/theme";

export const Card: FC<{ noMargin?: boolean }> = props => {
    return (
        <View
            style={{
                borderRadius: 0,
                backgroundColor: theme.color.gray.card,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.35,
                shadowRadius: 6.68,
                marginVertical: props.noMargin ? 0 : 10,
                padding: 15
            }}
        >
            {props.children}
        </View>
    )
}
