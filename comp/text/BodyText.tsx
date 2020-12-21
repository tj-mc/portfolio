import React, {FunctionComponent} from 'react'

import {Text, View} from 'react-native'
import {theme} from "../../const/theme";

type BodyTextProps = {
    text: string
}

export const BodyText: FunctionComponent<BodyTextProps> = ({text}) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: theme.font.primary.light,
                    fontSize: 12,
                    color: theme.color.white
                }}
            >
                {text}
            </Text>
        </View>
    )
}
