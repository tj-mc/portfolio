import React, {FunctionComponent} from "react";
import {Text, View} from 'react-native'

type RedBorderProps = {
    name: string
}

export const RedBorder: FunctionComponent<RedBorderProps> = ({name, children}) => {
    return (
        <View
            style={{
                borderColor: 'red',
                borderWidth: 1
            }}
        >
            <View
                style={{
                    zIndex: 999,
                    position: 'absolute',
                    top: -20
                }}
            >
                <Text
                    style={{
                        color: 'red'
                    }}
                >
                    {name}
                </Text>
            </View>
            <>
                {children}
            </>
        </View>
    )
}
