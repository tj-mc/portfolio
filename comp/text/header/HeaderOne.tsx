import React, {FunctionComponent} from 'react'

import {Text, View} from 'react-native'
import {theme} from "../../../const/theme";

type HeaderOneProps = {
    text: string
}

export const HeaderOne: FunctionComponent<HeaderOneProps> = ({text}) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: theme.font.primary.bold,
                    fontSize: 24,
                    color: theme.color.white
                }}
            >
                {text}
            </Text>
        </View>
    )
}
