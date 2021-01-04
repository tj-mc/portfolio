import React, {FC, useRef} from "react";
import {Animated, Image, Text, View} from "react-native";
import {theme} from "../../../../const/theme";

export const SkillTool: FC<{
    image: any,
    text: string
}> = props => {

    const maxAnim = 1
    const minAnim = 0
    const duration = 150

    const anim = useRef(new Animated.Value(minAnim)).current

    const mouseIn = () => {
        Animated.timing(anim, {
            useNativeDriver: true,
            toValue: maxAnim,
            duration
        }).start()
    }

    const mouseOut = () => {
        Animated.timing(anim, {
            useNativeDriver: true,
            toValue: minAnim,
            duration
        }).start()
    }

    const scale = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.09]
    })


    return (
        <Animated.View
            //@ts-ignore - RNW
            onMouseEnter={() => mouseIn()}
            onMouseLeave={() => mouseOut()}
            style={{
                borderColor: theme.color.gray.card,
                margin: 10,
                borderWidth: 2,
                borderRadius: 25,
                paddingVertical: 15,
                transform: [
                    {
                        scale: scale
                    }
                ],
                paddingHorizontal: 5,
                shadowColor: "#000",
                backgroundColor: theme.color.backdrop,
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,

                elevation: 12,
            }}
        >
            <View
                style={{
                    width: 115,
                    height: 90,
                    margin: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={props.image}
                    resizeMode={'contain'}
                    style={{
                        width: '80%',
                        height: '100%',
                    }}
                />
                <Text
                    style={{
                        marginTop: 10,
                        fontFamily: theme.font.primary.bold,
                        color: theme.color.white,
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 14,

                    }}
                >
                    {props.text}
                </Text>
            </View>
        </Animated.View>
    )
}
