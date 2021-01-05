import React, {FunctionComponent as FC, ReactComponentElement, useEffect, useRef} from "react"
import {Animated, FlatList, Text, View} from 'react-native'
import {theme} from "../../const/theme";
import {PromptLine} from "../PromptLine";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {getResponseComponent} from "../../func/terminal/getResponseComponent";
import {terminalSliceItem} from "../../store/terminalSlice";

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

    const render = (item: terminalSliceItem, index: number): ReactComponentElement<any> => {
        if (index > terminal.length - 2) {
            return getResponseComponent(item.prompt, item.response)
        } else {
            return <></>
        }
    }

    return (
        <View
            accessibilityLiveRegion={'polite'}
        >
            <FlatList
                keyExtractor={(item, index) => String(index)}
                data={terminal}
                renderItem={({item, index}) => render(item, index)}
            />
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
                    marginLeft: 5,
                    marginRight: 10,
                    borderRightWidth: 1.5,
                    borderColor: theme.color.secondary,
                    paddingRight: 10,
                    padding: 5
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
                padding: 15,
                minHeight: 330
            }}
        >
            {children}
        </View>
    )
}

const MainContainer: FC = ({children}) => {

    const x = useRef(new Animated.Value(0)).current;
    const y = useRef(new Animated.Value(0)).current;

    const anim = () => {
        Animated.spring(x, {
            useNativeDriver: true,
            tension: 60,
            overshootClamping: true,
            delay: 0,
            toValue: 1,
            isInteraction: false
        }).start()

        Animated.spring(y, {
            useNativeDriver: true,
            tension: 3,
            overshootClamping: true,
            delay: 100,
            toValue: 1,
            isInteraction: false
        }).start()
    }

    useEffect(() => {
        setTimeout(() => {
            anim()
        }, 500)
    }, [])

    return (
        <Animated.View
            style={{
                width: '100%',
                borderColor: theme.color.secondary,
                borderWidth: 2,
                transform: [
                    { scaleX: x },
                    { scaleY: y }
                ]
            }}
        >
            {children}
        </Animated.View>
    )
}
