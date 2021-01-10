import React, {FunctionComponent as FC} from "react";
import {Text, View} from 'react-native';
import {theme} from "../const/theme";
import {Directions} from "../const/directions";

export const Toast: FC<{ text: string, arrow: Directions }> = props => {
    return (
        <View
            style={{
                padding: 5,
            }}
        >

            <View
                style={{
                    borderWidth: 2,
                    zIndex: 1,
                    borderColor: theme.color.secondary,
                    backgroundColor: theme.color.backdrop,
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
            <ArrowModeSelect direction={props.arrow}/>
        </View>
    )
}


const ArrowModeSelect: FC<{ direction: Directions }> = props => {
    return (
        <>
            {props.direction === Directions.left && <LeftMode/>}
            {props.direction === Directions.top && <TopMode/>}
        </>
    )
}

const TopMode: FC = () => {
    return (
        <View
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                top: '0%',
            }}
        >
            <Arrow/>
        </View>
    )
}

const LeftMode: FC = () => {
    return (
        <View
            style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                justifyContent: 'center',
                left: '-1%',
            }}
        >
            <Arrow/>
        </View>
    )
}

const Arrow: FC = () => {
    return (
        <View
            style={{
                width: 10,
                height: 10,
                backgroundColor: theme.color.secondary,
                transform: [
                    { translateX: 2 },
                    { rotate: '45deg' },
                ]
            }}
        />
    )
}
