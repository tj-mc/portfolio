import React, {FunctionComponent as FC} from "react";
import {Text, View} from 'react-native';
import {theme} from "../const/theme";
import {Directions} from "../const/directions";
import {Octicons} from '@expo/vector-icons';

export const Toast: FC<{ text: string, arrow: Directions }> = props => {
    return (
        <View
            style={{
                padding: 5,
                // backgroundColor: 'red'
            }}
        >

            <View
                style={{
                    borderWidth: 2,
                    borderColor: theme.color.secondary,
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,

                    elevation: 12,
                }}
            >
                <Text
                    numberOfLines={1}
                    style={{
                        fontFamily: theme.font.primary.regular,
                        color: theme.color.white,
                    }}
                >
                    {props.text}
                </Text>
            </View>
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    left: '-1%',

                }}
            >
                <Octicons name="triangle-left" size={16} color={theme.color.secondary}/>
            </View>
        </View>
    )
}

