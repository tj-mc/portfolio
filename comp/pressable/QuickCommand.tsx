import React, {FunctionComponent} from 'react'

import {Pressable, Text} from 'react-native'
import {theme} from "../../const/theme";

type QuickCommandProps = {
    text: string,
    onPress: () => void,
}

export const QuickCommand: FunctionComponent<QuickCommandProps> = ({text}) => {
    return (
        <Pressable
            onPress={() => {
                console.log('QuickCommand')
            }}
            style={{
                // @ts-ignore
                cursor: 'pointer',
                marginRight: 30,
                marginTop: 10
            }}
        >
            <Text
                style={{
                    fontFamily: theme.font.primary.bold,
                    fontSize: 14,
                    color: theme.color.primary
                }}
            >
                {'>'} {text}
            </Text>
        </Pressable>
    )
}
