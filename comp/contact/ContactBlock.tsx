import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import {Animated, Text, useWindowDimensions, View} from 'react-native'
import {ContactBlockContent} from "./ContactBlockContent";
import {theme} from "../../const/theme";
import {Link} from "../pressable/Link";
import {Toast} from "../Toast";
import {Directions} from "../../const/directions";

export const LeftColumn: FunctionComponent = () => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
            }}
        >
            {
                ContactBlockContent.map(item => {
                        return (
                            <View
                                key={item.body}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginRight: 5,
                                    marginBottom: item?.spaceBottom || 8
                                }}
                            >
                                {item.label}
                                <Text
                                    style={{
                                        fontFamily: theme.font.primary.bold,
                                        color: theme.color.white,
                                        fontSize: 14
                                    }}
                                >
                                    :
                                </Text>
                            </View>

                        )
                    }
                )
            }
        </View>
    )
}

export const RightColumn: FunctionComponent = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [toastOrientation, setToastOrientation] = useState(Directions.left)
    const width = useWindowDimensions().width

    const topToastStyle = {
        right: '10%',
        top: '100%'
    }

    const leftToastStyle = {
        left: '105%'
    }

    const show = () => {
        Animated.timing(fadeAnim, {
            useNativeDriver: true,
            toValue: 1,
            duration: 100
        }).start();
    };

    const hide = () => {
        Animated.timing(fadeAnim, {
            useNativeDriver: true,
            toValue: 0,
            duration: 500
        }).start();
    };

    // Flash the toast visible
    const flash = () => {
        show()
        setTimeout(() => {
            hide()
        }, 1500)
    }

    useEffect(() => {
        if (width > 378) {
            setToastOrientation(Directions.left)
        } else {
            setToastOrientation(Directions.top)
        }
    }, [width])

    return (
        <View>
            {
                ContactBlockContent.map(item => {
                    return (
                        <View
                            key={item.body}
                            style={{
                                display: 'flex',
                                opacity: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: item?.spaceBottom || 8
                            }}
                        >
                            <Link
                                isExternalLink={item.isExternal}
                                a11yLabel={`Contact Item: ${item.a11yLabel}`}
                                onPress={() => {
                                    item.onPress()
                                    item?.useToast && flash()
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: theme.font.primary.regular,
                                        color: theme.color.primary,
                                        fontSize: 14
                                    }}
                                >
                                    {item.body}
                                </Text>
                            </Link>
                                {
                                    item?.useToast &&
                                    <Animated.View
                                        pointerEvents={'none'}
                                        style={
                                            [
                                                {
                                                    zIndex: 999,
                                                    opacity: fadeAnim,
                                                    position: 'absolute',
                                                    backgroundColor: theme.color.backdrop
                                                },
                                                toastOrientation === Directions.left ? leftToastStyle : topToastStyle
                                            ]
                                        }
                                    >
                                        <Toast
                                            text={item?.toastText}
                                            arrow={toastOrientation}
                                        />
                                    </Animated.View>
                                }
                            </View>
                        )
                    }
                )
            }
        </View>
    )
}

export const ContactBlock: FunctionComponent = () => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 20
            }}
        >
            <LeftColumn/>
            <RightColumn/>
        </View>
    )
}

