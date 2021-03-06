import React, {FC, useEffect, useRef} from "react";
import {Animated, Pressable, TouchableOpacity, View} from 'react-native';
import {theme} from "../../const/theme";
import {AntDesign} from "@expo/vector-icons";

export const Modal: FC<{
    onClose: () => void,
    visible: boolean,
    hideWindow?: boolean
}> = props => {

    const fade = useRef(new Animated.Value(0)).current;

    const show = () => {
        Animated.timing(fade, {
            useNativeDriver: true,
            duration: 200,
            toValue: 1
        }).start()
    }

    const hide = () => {
        Animated.timing(fade, {
            useNativeDriver: true,
            duration: 250,
            toValue: 0
        }).start()
    }

    useEffect(() => {
        props.visible ? show() : hide()
    }, [props.visible])


    return (
        <Animated.View
            //@ts-ignore - RNW
            style={{
                position: 'fixed',
                opacity: fade,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
            }}
            // Stop touches when hidden
            pointerEvents={props.visible ? undefined : 'none'}
        >
            <Backdrop onClose={props.onClose}/>
            {
                props.hideWindow
                    ?
                    <>
                        {props.children}
                    </>
                    :
                    <Box onClose={props.onClose}>
                        {props.children}
                    </Box>
            }
        </Animated.View>
    )
}


const Box: FC<{
    onClose: () => void
}> = props => {
    return (
        <View
            style={{
                borderWidth: 2,
                borderColor: theme.color.secondary,
                backgroundColor: theme.color.backdrop,
                padding: 20,
            }}
        >
            {props.children}
            <CloseButton
                onClose={props.onClose}
            />
        </View>
    )
}

const CloseButton: FC<{
    onClose: () => void
}> = props => {

    const slop = 30

    return (
        <TouchableOpacity
            hitSlop={{
                top: slop,
                bottom: slop,
                left: slop,
                right: slop
            }}
            onPress={() => props.onClose()}
            style={{
                position: 'absolute',
                right: 10,
                top: 10
            }}
        >
            <AntDesign
                color={theme.color.secondary}
                name={'close'}
                size={24}
            />
        </TouchableOpacity>
    )
}

const Backdrop: FC<{
    onClose: () => void
}> = props => {
    return (
        <View>
            <View
                //@ts-ignore - RNW
                style={{
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Pressable
                    //@ts-ignore - RNW
                    style={{
                        backgroundColor: theme.color.modalBackdrop,
                        flex: '1',
                    }}
                    onPress={() => props.onClose()}
                />
            </View>
        </View>
    )
}
