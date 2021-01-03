import React, {FunctionComponent as FC, useEffect, useState} from "react";
import {Text, View} from 'react-native';
import {theme} from "../../../const/theme";
import {rocketSlice} from "../../../store/rocketSlice";
import {useDispatch} from "react-redux";
import {HeaderTwo} from "../../text/header/HeaderTwo";

//@ts-ignore
import TypeWriter from 'react-native-typewriter'

export const ResumeResponse: FC<{}> = () => {

    useEffect(() => {
    }, [])

    return (
        <View>
            <HeaderTwo
                text={'Resume'}
                animate
            />
            <ContentContainer/>
        </View>
    )
}

const ContentContainer: FC<{}> = () => {

    const [typingComplete, setTypingComplete] = useState(false)

    return (
        <View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}
            >
                <Text
                    style={{
                        fontFamily: theme.font.primary.regular,
                        fontSize: 16,
                        color: theme.color.white,
                        marginTop: 10
                    }}
                >
                    <TypeWriter
                        typing={2}
                        fixed={true}
                        onTypingEnd={() => {
                            setTypingComplete(true)
                        }}
                    >
                        Downloading Resume&nbsp;
                    </TypeWriter>
                </Text>
                {
                    typingComplete &&
                    <RocketAnimation/>
                }
            </View>
        </View>
    )
}


const RocketAnimation: FC<{}> = () => {

    const dispatch = useDispatch()

    return (
        <View

            onLayout={e => {
                // @ts-ignore - RNW
                const {left, top} = e.nativeEvent.layout
                dispatch(
                    rocketSlice.actions.setLayout({left, top})
                )
            }}
            style={{
                height: 16,
                width: 16
            }}
        />
    )

}
