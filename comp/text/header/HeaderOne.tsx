import React, {FunctionComponent, useEffect, useRef, useState} from 'react'

import {Animated} from 'react-native'
import {theme} from "../../../const/theme";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";

type HeaderOneProps = {
    text: string,
    disableAnimation?: boolean
}

export const HeaderOne: FunctionComponent<HeaderOneProps> = ({text, disableAnimation}) => {

    const x = useRef(new Animated.Value(0)).current;
    const y = useRef(new Animated.Value(0)).current;
    const [isFlashing, setIsFlashing] = useState(false)
    const [hovered, setHovered] = useState(false)

    const fontLoad = useSelector((state: RootState) => state.fontLoad)

    const randInt = (min: number, max: number): number => Math.random() * (max - min) + min;

    const animate = () => {

        if (disableAnimation) return

        setIsFlashing(true)

        Animated.timing(x, {
            useNativeDriver: true,
            toValue: randInt(-20, 20),
            duration: 1
        }).start()

        Animated.timing(y, {
            useNativeDriver: true,
            toValue: randInt(-1.5, 1.5),
            duration: 1
        }).start()

        // Reset
        setTimeout(() => {
            Animated.timing(x, {
                useNativeDriver: true,
                toValue: 0,
                duration: 1
            }).start()
            Animated.timing(y, {
                useNativeDriver: true,
                toValue: 0,
                duration: 1
            }).start()
            setIsFlashing(false)
        }, 1)

    }

    const chain = () => {
        if (!fontLoad.ready) return

        let count = 0;
        while (count < 20) {
            count++;
            animate()
            setTimeout(() => {
                animate()
            }, count * 20)
            setTimeout(() => {
                animate()
            }, count * 35)
        }
    }

    useEffect(() => {
        if (hovered) {
            chain()
        }
    }, [hovered])

    useEffect(() => {
        setTimeout(() => {
            chain()
        }, 200)
    }, [fontLoad.ready])


    return (
        <Animated.View
            //@ts-ignore - RNW
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                transform: [
                    {
                        translateX: x
                    },
                    {
                        translateY: y
                    },
                ]
            }}
        >
            <Animated.Text
                style={{
                    fontFamily: theme.font.primary.bold,
                    fontSize: 26,
                    color: isFlashing ? (Math.random() > 0.5 ? theme.color.primary : theme.color.secondary) : theme.color.white
                }}
            >
                {text}
            </Animated.Text>
        </Animated.View>
    )
}
