import React, {FunctionComponent} from 'react'

import {Text, View} from 'react-native'
import {theme} from "../../../const/theme";

type HeaderThreeProps = {
    text: string
}

export const HeaderThree: FunctionComponent<HeaderThreeProps> = ({text}) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: theme.font.primary.light,
                    fontSize: 16,
                    color: theme.color.white
                }}
            >
                {text}
            </Text>
        </View>
    )
}
