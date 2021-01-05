import React, {FC} from "react";
import {TouchableOpacity, View} from 'react-native';
import {theme} from "../../const/theme";
import {AntDesign} from "@expo/vector-icons";

export const Modal: FC<{
    onClose: () => void
}> = props => {
    return (
        <>
            <View
                style={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex'
                }}
            >
                <Backdrop
                    onClose={props.onClose}
                />
                <Box
                    onClose={props.onClose}
                >
                    {props.children}
                </Box>
            </View>
        </>
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
            <CloseButton
                onClose={props.onClose}
            />
            {props.children}
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
                right: slop,
                left: slop
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
                <TouchableOpacity
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
