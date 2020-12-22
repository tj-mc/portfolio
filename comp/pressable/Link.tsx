import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import {Animated, Easing, TouchableOpacity} from "react-native";
import {theme} from "../../const/theme";

export const Link: FunctionComponent<{ onPress: () => void }> = ({onPress, children}) => {

    const [hovered, setHovered] = useState(false)

    return (
        <TouchableOpacity
            hitSlop={{
                top: 15,
                bottom: 15,
                right: 10,
                left: 10
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onPress={onPress}
            style={{
                // @ts-ignore
                cursor: 'pointer',
            }}
        >
            <Underline show={hovered}/>
            {children}
        </TouchableOpacity>
    )
}

const Underline: FunctionComponent<{ show: boolean }> = ({show}) => {

    const opacity = useRef(new Animated.Value(0)).current
    const duration = 100

    const open = () => {
        Animated.timing(opacity, {
            useNativeDriver: true,
            toValue: 1,
            easing: Easing.inOut(Easing.ease),
            duration: duration
        }).start()
    }

    const close = () => {
        Animated.timing(opacity, {
            useNativeDriver: true,
            toValue: 0,
            easing: Easing.inOut(Easing.ease),
            duration: duration
        }).start()
    }

    useEffect(() => {
        show ? open() : close()
    }, [show])

    const offset = 2
    const bias = 2

    return (
        <Animated.View
            style={{
                zIndex: -1,
                opacity: opacity,
                position: 'absolute',
                bottom: -offset + bias,
                height: offset,
                left: 0,
                right: 0,
                backgroundColor: theme.color.secondary
            }}
        />
    )
}
