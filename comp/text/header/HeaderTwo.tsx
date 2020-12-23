import React, {FunctionComponent} from 'react'

import {Text, View} from 'react-native'
import {theme} from "../../../const/theme";

type HeaderTwoProps = {
    text: string
}

export const HeaderTwo: FunctionComponent<HeaderTwoProps> = ({text}) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: theme.font.primary.regular,
                    fontSize: 20,
                    color: theme.color.white
                }}
            >
                {text}
            </Text>
        </View>
    )
}
