import React, {FunctionComponent as FC, useEffect, useRef, useState} from "react";
import {Animated, Text, View} from 'react-native';
import {theme} from "../../../const/theme";
import {mediumFeed} from "../../../const/mediumFeed";
import {Link} from "../../pressable/Link";
import {mediumPage} from "../../../const/mediumPage";
import {HeaderTwo} from "../../text/header/HeaderTwo";

export const PublicationsResponse: FC<{}> = () => {

    const [items, setItems] = useState([])
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (items.length > 0) {
            Animated.timing(
                fadeAnim,
                {
                    useNativeDriver: true,
                    toValue: 1,
                    duration: 200,
                }
            ).start();
        }
    }, [items])

    useEffect(() => {
        fetch(mediumFeed)
            .then(r => r.json())
            .then(r => {
                if (Array.isArray(r?.items) && r?.status === 'ok') {
                    setItems(r.items)
                }
            })
    }, [])

    useEffect(() => {
    }, [items])

    return (
        <Animated.View
            style={{
                margin: 10,
                opacity: fadeAnim
            }}
        >
            <HeaderTwo text={'Blog'}/>
            <Intro/>
            {
                items.map((item: any) => <Article {...{item}} key={item.guid}/>)
            }
            <ReadMore/>
        </Animated.View>
    )
}

const Intro: FC<{}> = props => {
    return (
        <View>
            <Text
                style={{
                    color: theme.color.white,
                    fontFamily: theme.font.primary.regular,
                    marginTop: 3,
                    marginBottom: 5
                }}
            >
                I find the best way to solidify my understanding of a topic is to write about it. This causes to
                question my own assumptions, and reveals gaps in my knowledge.
            </Text>
        </View>
    )
}


const ReadMore: FC<{}> = props => {
    return (
        <View
            style={{
                height: 20,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Link
                onPress={() => {
                    open(mediumPage)
                }}
            >
                <Text
                    style={{
                        fontFamily: theme.font.primary.regular,
                        color: theme.color.primary
                    }}
                >
                    Read more on Medium
                </Text>
            </Link>
        </View>
    )
}


const Article: FC<{ item: any }> = ({item}) => {


    const duration = 100

    const minColor = 0
    const maxColor = 1

    const [preview, setPreview] = useState('')
    const [formattedDate, setFormattedDate] = useState('')

    const colorAnim = useRef(new Animated.Value(minColor)).current

    useEffect(() => {
        const split = item?.content?.split('<p>')?.[1]?.split('</p>')?.[0]
        if (split) {
            setPreview(split)
        }
    }, [item])

    useEffect(() => {
        const date = item.pubDate.split(' ')[0].split('-')
        setFormattedDate(
            `${date[2]}/${date[1]}/${date[0]}`
        )
    }, [item])


    const mouseIn = () => {
        Animated.timing(colorAnim, {
            toValue: maxColor,
            duration: duration,
            useNativeDriver: true
        }).start()
    }

    const mouseOut = () => {
        Animated.timing(colorAnim, {
            toValue: minColor,
            duration: duration * 2,
            useNativeDriver: true
        }).start()
    }

    const colorInterp = colorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [theme.color.gray.card, theme.color.secondary]
    })

    return (
        <Link
            useUnderline={false}
            onPress={() => {
                open(item.link)
            }}
        >
            <Animated.View
                //@ts-ignore - RNW
                onMouseEnter={() => mouseIn()}
                onMouseLeave={() => mouseOut()}
            >
                <Animated.View
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.35,
                        shadowRadius: 6.68,
                        marginVertical: 10,
                        backgroundColor: colorInterp,
                    }}
                >

                    <View>
                        <View
                            style={{
                                margin: 5,
                                padding: 10,
                                backgroundColor: theme.color.gray.card
                            }}
                        >
                            <View
                                style={{
                                    marginBottom: 10
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: theme.font.primary.bold,
                                        fontSize: 16,
                                        color: theme.color.white,
                                        marginBottom: 5
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: theme.font.primary.regular,
                                        lineHeight: 18,
                                        fontSize: 12,
                                        color: theme.color.white
                                    }}
                                >
                                    {`   ${preview}`}
                                </Text>
                            </View>

                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-end',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: theme.font.primary.regular,
                                        color: theme.color.white
                                    }}
                                >
                                    {formattedDate}
                                </Text>
                            </View>

                        </View>
                    </View>
                </Animated.View>
            </Animated.View>
        </Link>
    )
}
