import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import {Animated, Easing, TouchableOpacity} from "react-native";

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

    const width = useRef(new Animated.Value(200)).current

    const open = () => {
        Animated.timing(width, {
            useNativeDriver: true,
            toValue: 0,
            easing: Easing.inOut(Easing.ease),
            duration: 500
        }).start()
    }

    const close = () => {
        Animated.timing(width, {
            useNativeDriver: true,
            toValue: 200,
            easing: Easing.inOut(Easing.ease),
            duration: 500
        }).start()
    }

    useEffect(() => {
        show ? open() : close()
    }, [show])

    const offset = 3
    const bias = 2

    return (
        <Animated.View
            style={{
                opacity: 1,
                position: 'absolute',
                bottom: -offset + bias,
                height: offset,
                right: width,
                left: 0,
                backgroundColor: 'red'
            }}
        />
    )
}
