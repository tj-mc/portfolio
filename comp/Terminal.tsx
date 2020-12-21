import React, {FunctionComponent} from "react"
import {Text, View} from 'react-native'
import {theme} from "../const/theme";
import {PromptLine} from "./PromptLine";

export const Terminal: FunctionComponent = () => {
    return (
        <MainContainer>
            <HeaderBar/>
            <PaddingContainer>
                <PromptLine/>
            </PaddingContainer>
        </MainContainer>
    )
}


const Tab: FunctionComponent = () => {
    return (

        <View
            style={{
                flexShrink: 1
            }}
        >
            <Text
                style={{
                    fontFamily: theme.font.primary.bold,
                    fontSize: 10,
                    color: theme.color.gray.medium,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRightWidth: 1.5,
                    borderColor: theme.color.secondary,
                    marginBottom: -1,
                    paddingRight: 10
                }}
            >
                localhost
            </Text>
        </View>
    )

}

const HeaderBar: FunctionComponent = () => {
    return (
        <View
            style={{
                borderColor: theme.color.secondary,
                borderBottomWidth: 1.5,
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <Tab/>
            <View style={{flex: 1}}/>
        </View>
    )
}


const PaddingContainer: FunctionComponent = ({children}) => {
    return (
        <View
            style={{
                padding: 6,
                minHeight: 300
            }}
        >
            {children}
        </View>
    )
}

const MainContainer: FunctionComponent = ({children}) => {
    return (
        <View
            style={{
                width: '100%',
                borderColor: theme.color.secondary,
                borderWidth: 2,
            }}
        >
            {children}
        </View>
    )
}
