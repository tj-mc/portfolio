import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {Animated, Easing, Text} from "react-native";

export const RocketAnimation: FunctionComponent = () => {

    const rocketState = useSelector((state: RootState) => state.rocket)
    const [visible, setVisible] = useState(false)

    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {

            setTimeout(() => {

                Animated.timing(progress, {
                    useNativeDriver: true,
                    toValue: 1,
                    duration: 4000
                }).start()

            }, 250)

        }
    }, [visible])

    useEffect(() => {
        setVisible(rocketState.left > 0 && rocketState.top > 0)
    }, [rocketState])

    const opacity = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
        easing: Easing.inOut(Easing.exp)
    })

    const scale = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 3],
        easing: Easing.inOut(Easing.exp)
    })

    const x = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1200],
        easing: Easing.inOut(Easing.back(1.5))
    })

    const y = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -1200],
        easing: Easing.inOut(Easing.back(1))
    })

    const rotation = progress.interpolate({
        inputRange: [0, 0.1, 0.12, 0.2, 0.4, 1],
        outputRange: ['0deg', '-1deg', '5deg', '-5deg', '0deg', '0deg'],
        easing: Easing.elastic(3)
    })

    return (
        <Animated.View
            // @ts-ignore - RNW
            style={{
                opacity: visible ? opacity : 0,
                position: 'fixed',
                top: rocketState.top - 10,
                left: rocketState.left,
                transform: [
                    {
                        translateX: x
                    },
                    {
                        translateY: y
                    },
                    {
                        rotate: rotation
                    },
                    {
                        scale: scale
                    },
                ]
            }}
        >
            <Text
                style={{
                    fontSize: 28
                }}
            >
                🚀
            </Text>
        </Animated.View>
    )
}
