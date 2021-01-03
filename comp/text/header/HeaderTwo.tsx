import React, {FunctionComponent} from 'react'

//@ts-ignore
import TypeWriter from 'react-native-typewriter'
import {Text, View} from 'react-native'
import {theme} from "../../../const/theme";

type HeaderTwoProps = {
    text: string,
    animate?: boolean
}

export const HeaderTwo: FunctionComponent<HeaderTwoProps> = ({text, animate}) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: theme.font.primary.regular,
                    fontSize: 20,
                    color: theme.color.white
                }}
            >
                {
                    animate
                        ?
                        <TypeWriter
                            typing={1}
                            fixed={true}
                        >
                            {text}
                        </TypeWriter>
                        :
                        text
                }
            </Text>
        </View>
    )
}
