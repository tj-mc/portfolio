import React, {FunctionComponent as FC, useEffect} from "react";
import {Text, View} from 'react-native';
import {theme} from "../../../const/theme";
import {rocketSlice} from "../../../store/rocketSlice";
import {useDispatch} from "react-redux";
import {HeaderTwo} from "../../text/header/HeaderTwo";

export const ResumeResponse: FC<{}> = () => {

    useEffect(() => {
    }, [])

    return (
        <View>
            <HeaderTwo text={'Resume'}/>
            <ContentContainer/>
        </View>
    )
}

const ContentContainer: FC<{}> = () => {
    return (
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
                    color: theme.color.white
                }}
            >
                Downloading Resume&nbsp;
            </Text>
            <View>
                <RocketAnimation/>
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
