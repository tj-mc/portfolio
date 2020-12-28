import React, {FunctionComponent as FC, useEffect, useRef, useState} from "react";
import {Animated, Pressable, Text, useWindowDimensions, View} from 'react-native';
import {theme} from "../const/theme";
import {Link} from "./pressable/Link";
import {Toast} from "./Toast";
import {Directions} from "../const/directions";

export const ViewSource: FC<{}> = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [visible, setVisible] = useState(false);
    const width = useWindowDimensions().width

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

    useEffect(() => {
        setVisible(width >= 804)
    }, [width])

    return (
        <>
            {
                visible &&
                <View
                    style={{
                        position: 'absolute',
                        left: 20,
                        bottom: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Pressable
                        accessible={false}
                        //@ts-ignore - RNW
                        onMouseEnter={() => show()}
                        onMouseLeave={() => hide()}
                    >
                        <Link
                            useUnderline={false}
                            onPress={() => {
                                open('https://github.com/tj-mc/portfolio')
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: theme.font.primary.regular,
                                    color: theme.color.white
                                }}
                            >
                                {'</>'}
                            </Text>
                        </Link>
                    </Pressable>
                    <Animated.View
                        pointerEvents={'none'}
                        style={{
                            opacity: fadeAnim,
                            marginLeft: 10
                        }}
                    >
                        <Toast text={'View source'} arrow={Directions.left}/>
                    </Animated.View>
                </View>
            }
        </>
    )
}
