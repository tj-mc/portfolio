import React, {FunctionComponent as FC} from "react"
import {FlatList, Text, View} from 'react-native'
import {theme} from "../const/theme";
import {PromptLine} from "./PromptLine";
import {useSelector} from "react-redux";
import {RootState} from "../store";

export const Terminal: FC = () => {
    return (
        <MainContainer>
            <HeaderBar/>
            <PaddingContainer>
                <History/>
                <PromptLine/>
            </PaddingContainer>
        </MainContainer>
    )
}

const History: FC = () => {

    const terminal = useSelector((state: RootState) => state.terminal)

    return (
        <View>
            <FlatList data={terminal} renderItem={({item}) => <>{item.response}</>}/>
        </View>
    )
}


const Tab: FC = () => {
    return (

        <View
            style={{
                flexShrink: 1
            }}
        >
            <Text
                style={{
                    fontFamily: theme.font.primary.bold,
                    fontSize: 12,
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

const HeaderBar: FC = () => {
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


const PaddingContainer: FC = ({children}) => {
    return (
        <View
            style={{
                padding: 6,
                minHeight: 330
            }}
        >
            {children}
        </View>
    )
}

const MainContainer: FC = ({children}) => {
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
