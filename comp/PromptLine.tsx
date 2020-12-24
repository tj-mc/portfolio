import React, {FunctionComponent as FC, useRef, useState} from 'react'
import {Platform, Text, TextInput, View} from 'react-native'
import {theme} from "../const/theme";
import {useDispatch} from "react-redux";
import {terminalSlice} from "../store/terminalSlice";
import {interpretPromptInput} from "../func/terminal/interpretPromptInput";

export const PromptLine: FC<{ frozenValue?: string }> = props => {

    const dispatch = useDispatch()

    return (
        <View>
            <Text
                style={{
                    fontFamily: theme.font.primary.regular,
                    fontSize: 14,
                }}
            >
                <Text style={{color: theme.color.primary}}>
                    tom@tjmc.dev
                </Text>
                <Text style={{color: theme.color.white}}>
                    :
                </Text>
                <Text style={{color: theme.color.secondary}}>
                    ~
                </Text>
                <Text style={{color: theme.color.white}}>
                    $
                </Text>

                <View style={{width: 5}}/>

                <Input
                    frozenValue={props.frozenValue}
                    onSave={textInput => {
                        dispatch(
                            terminalSlice.actions.add({
                                prompt: textInput,
                                response: interpretPromptInput(textInput)
                            })
                        )
                    }}
                />

            </Text>
        </View>
    )
}

const Input: FC<{ onSave: (textInput: string) => void, frozenValue?: string }> = props => {

    const [value, setValue] = useState(props.frozenValue || '')
    const inputRef = useRef(null)

    return (
        <TextInput
            {...{value}}
            onSubmitEditing={() => {
                props.onSave(value)
                setValue('')
                setTimeout(() => {
                    // @ts-ignore - This ref will not be null
                    inputRef?.current.focus()
                }, 10)
            }}
            ref={inputRef}
            editable={Boolean(props.frozenValue === undefined)}
            autoFocus
            style={
                [
                    {
                        fontFamily: theme.font.primary.regular,
                        fontSize: 14,
                        color: theme.color.white,
                        borderColor: theme.color.backdrop,
                    },
                    // @ts-ignore
                    Platform.OS === 'web' ? {outline: 'none'} : {}
                ]
            }
            onChangeText={v => {
                if (!props.frozenValue) {
                    setValue(v)
                }
            }}
        />
    )
}
