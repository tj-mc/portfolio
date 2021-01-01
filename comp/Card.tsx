import React, {FC} from "react";
import {View} from 'react-native';
import {theme} from "../const/theme";

export const Card: FC = props => {
    return (
        <View
            style={{
                backgroundColor: theme.color.gray.card,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.35,
                shadowRadius: 6.68,
                marginVertical: 10,
                padding: 15
            }}
        >
            {props.children}
        </View>
    )
}
