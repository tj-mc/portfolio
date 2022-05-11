import React, {FunctionComponent as FC, useRef, useState} from 'react'
import {Platform, Text, TextInput, View} from 'react-native'
import {theme} from "../const/theme";
import {useDispatch} from "react-redux";
import {terminalSlice} from "../store/terminalSlice";
import {functionalTerminalResponse} from "../func/terminal/functionalTerminalResponse";
import {validatePromptInput} from "../func/terminal/validatePromptInput";

export const PromptLine: FC<{ frozenValue?: string }> = props => {

    const dispatch = useDispatch()

    return (
        <View>
            <Text
                style={{
                    fontFamily: theme.font.primary.regular,
                    fontSize: 16,
                }}
            >
                <Text style={{color: theme.color.primary}}>
                    guest@tjmc.dev
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

                        // Remove spaces and set lower case
                        const cleanInput = textInput.toLowerCase().trim()

                        // If there is a function to run for this command
                        const functionalResponder = functionalTerminalResponse.find(i => i.prompt === cleanInput)

                        if (functionalResponder) {
                            // Note that this is not added to the command history
                            functionalResponder.action()

                        } else {
                            // This is just a regular command, or invalid
                            dispatch(
                                terminalSlice.actions.add({
                                    prompt: cleanInput,
                                    response: validatePromptInput(cleanInput)
                                })
                            )
                        }
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
            }}
            blurOnSubmit={false}
            ref={inputRef}
            editable={Boolean(props.frozenValue === undefined)}
            autoFocus
            style={
                [
                    {
                        fontFamily: theme.font.primary.regular,
                        fontSize: 16,
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
