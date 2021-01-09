import React, {FC, useEffect} from "react";
import {Text, View} from 'react-native';
import {theme} from "../const/theme";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {bsodSlice} from "../store/bsodSlice";

export const BSOD: FC = () => {

    const bsodState = useSelector((state: RootState) => state.bsod)
    const dispatch = useDispatch()


    useEffect(() => {
        if (bsodState.visible) {
            setTimeout(() => {
                dispatch(
                    bsodSlice.actions.setVisible(false)
                )
            }, 1500)
        }
    }, [bsodState.visible])

    return (
        <>
            {
                bsodState.visible &&
                <View
                    //@ts-ignore - RNW
                    style={{
                        position: 'fixed',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: theme.color.bsod.backdrop,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            maxWidth: 600
                        }}
                    >
                        <Text
                            style={{
                                margin: 15,
                                fontFamily: theme.font.primary.regular,
                                color: theme.color.bsod.backdrop,
                                padding: 5,
                                backgroundColor: theme.color.white,
                                fontSize: 18
                            }}
                        >
                            System Error
                        </Text>

                        <Text
                            style={{
                                margin: 15,
                                fontFamily: theme.font.primary.regular,
                                color: theme.color.white
                            }}
                        >
                            A fatal exeption 0E76534801 has occurred at 0027:C87123
                            Operating system has been stopped to prevent damage to your computer.
                        </Text>

                        <Text
                            style={{
                                margin: 15,
                                fontFamily: theme.font.primary.regular,
                                color: theme.color.white
                            }}
                        >
                            &nbsp;* Press any key to terminate the current application. {'\n'}
                            &nbsp;* Press CTRL + ALT + DEL again to restart your computer. You will lose any unsaved
                            information in all
                            applications.
                        </Text>

                        <Text
                            style={{
                                margin: 15,
                                fontFamily: theme.font.primary.regular,
                                color: theme.color.white
                            }}
                        >
                            Press any key to continue _
                        </Text>

                    </View>

                </View>
            }
        </>
    )
}
