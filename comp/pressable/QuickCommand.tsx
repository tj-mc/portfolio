import React, {FC} from 'react'

import {Text, View} from 'react-native'
import {theme} from "../../const/theme";
import {Link} from "./Link";
import {useDispatch} from "react-redux";
import {terminalSlice} from "../../store/terminalSlice";
import {standardTerminalResponse} from "../../func/terminal/standardTerminalResponse";

type QuickCommandProps = {
    text: string,
    response?: standardTerminalResponse,
    onPress?: () => void,
    disabled?: boolean
}

export const QuickCommand: FC<QuickCommandProps> = props => {

    const dispatch = useDispatch()

    return (
        <View
            pointerEvents={props.disabled ? 'none' : undefined}
            style={{
                opacity: props.disabled ? 0.2 : 1,
                marginRight: 30,
                marginTop: 15
            }}
        >
            <Link
                useUnderline={!props.disabled}
                onPress={() => {

                    if (props.disabled) return

                    if (props.onPress) {
                        props.onPress()
                    } else if (props.response) {
                        dispatch(
                            terminalSlice.actions.add({
                                prompt: props.text,
                                response: props.response
                            })
                        )
                    }
                }}
                isExternalLink={false}
                a11yLabel={`Run ${props.text} quick command`}
            >
                <Text
                    style={{
                        fontFamily: theme.font.primary.bold,
                        fontSize: 16,
                        color: theme.color.primary
                    }}
                >
                    {'>'} {props.text}
                </Text>
            </Link>
        </View>
    )
}
