import React, {FC, useState} from "react";
import {Text, View} from 'react-native';
import {theme} from "../const/theme";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import TypeWriter from 'react-native-typewriter'
import {bsodSlice} from "../store/bsodSlice";
import {Link} from "./pressable/Link";

export const BSOD: FC = () => {

    const bsodState = useSelector((state: RootState) => state.bsod)
    const [isRebooting, setIsRebooting] = useState(false)
    const dispatch = useDispatch()

    const close = () => {
        document.exitFullscreen()
        dispatch(
            bsodSlice.actions.setVisible(false)
        )
    }

    // useEffect(() => {
    //
    // }, [])

    // useEffect(() => {
    //     if (bsodState.visible) {
    //         setTimeout(() => {
    //             // dispatch(
    //             //     bsodSlice.actions.setVisible(false)
    //             // )
    //         }, 1500)
    //     }
    // }, [bsodState.visible])
    //
    return (
        <div id={'bsod'}>
            {
                (bsodState.visible && !isRebooting) &&
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
                                color: theme.color.white,
                            }}
                        >
                            A fatal exeption 0E76534801 has occurred at 0027:C87123
                            Operating system has been stopped to prevent damage to your computer.{'\n'}{'\n'}
                            Sector 33SE98 may be damaged, and was accessed by a user-space program.{'\n'}
                            Consider removing recently installed software, or insert the recovery disk to reboot.
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

                        <View
                            style={{
                                margin: 15
                            }}
                        >

                            <TypeWriter
                                typing={1}
                                initialDelay={2500}
                            >
                                <Text
                                    style={{
                                        margin: 15,
                                        fontFamily: theme.font.primary.regular,
                                        color: theme.color.white
                                    }}
                                >
                                    Just kidding. Everything's fine.
                                </Text>
                            </TypeWriter>
                        </View>

                        <Link
                            isExternalLink={false}
                            useUnderline={false}
                            onPress={() => close()}
                            a11yLabel={'Close window'}
                        >
                            <TypeWriter
                                typing={1}
                                initialDelay={6000}
                            >
                                <Text
                                    style={{
                                        margin: 15,
                                        fontFamily: theme.font.primary.regular,
                                        color: theme.color.bsod.backdrop,
                                        padding: 5,
                                        backgroundColor: theme.color.white,
                                        fontSize: 14
                                    }}
                                >
                                    {'> '}Click to recover{' <'}
                                </Text>
                            </TypeWriter>
                        </Link>

                    </View>

                </View>
            }
        </div>
    )
}
