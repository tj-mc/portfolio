import React, {FunctionComponent} from 'react'
import {Platform, Text, TextInput, View} from 'react-native'
import {theme} from "../const/theme";

export const PromptLine: FunctionComponent = () => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: theme.font.primary.regular,
                    fontSize: 12,
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
                <Input/>

            </Text>
        </View>
    )
}

const Input: FunctionComponent = () => {
    return (
        <TextInput
            autoFocus
            style={
                [
                    {
                        fontFamily: theme.font.primary.regular,
                        fontSize: 12,
                        color: theme.color.white,
                        borderColor: theme.color.backdrop,
                    },
                    // @ts-ignore
                    Platform.OS === 'web' ? {outline: 'none'} : {}
                ]
            }
            onChangeText={t => {
                console.log(t)
            }}
        />
    )
}
