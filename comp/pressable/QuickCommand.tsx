import React, {FunctionComponent} from 'react'

import {Text, View} from 'react-native'
import {theme} from "../../const/theme";
import {Link} from "./Link";
import {useDispatch} from "react-redux";
import {terminalResponse, terminalSlice} from "../../store/terminalSlice";

type QuickCommandProps = {
    text: string,
    response: terminalResponse
}

export const QuickCommand: FunctionComponent<QuickCommandProps> = ({text, response}) => {

    const dispatch = useDispatch()

    return (
        <View
            style={{
                marginRight: 30,
                marginTop: 10
            }}
        >
            <Link onPress={() => {
                dispatch(
                    terminalSlice.actions.add({
                        prompt: text,
                        response
                    })
                )
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
