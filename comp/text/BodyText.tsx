import React, {FunctionComponent} from 'react'

import {Text, View} from 'react-native'
import {theme} from "../../const/theme";

type BodyTextProps = {
    text: string,
    textAlign: any
}

export const BodyText: FunctionComponent<BodyTextProps> = ({text, textAlign = 'left'}) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: theme.font.primary.light,
                    fontSize: 12,
                    color: theme.color.white,
                    textAlign: textAlign,
                }}
            >
                {text}
            </Text>
        </View>
    )
}
