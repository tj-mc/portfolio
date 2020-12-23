import React, {FunctionComponent} from 'react'

import {Text, View} from 'react-native'
import {theme} from "../../const/theme";
import {Link} from "./Link";

type QuickCommandProps = {
    text: string,
    onPress: () => void,
}

export const QuickCommand: FunctionComponent<QuickCommandProps> = ({text}) => {
    return (
        <View
            style={{
                marginRight: 30,
                marginTop: 10
            }}
        >
            <Link onPress={() => {
            }}>
                <Text
                    style={{
                        fontFamily: theme.font.primary.bold,
                        fontSize: 16,
                        color: theme.color.primary
                    }}
                >
                    {'>'} {text}
                </Text>

            </Link>
        </View>
    )
}
