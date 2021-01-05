import React, {FC, useEffect, useRef, useState} from "react";
import {Animated, Text, View} from 'react-native';
import {theme} from "../../../const/theme";
import {mediumFeed} from "../../../const/mediumFeed";
import {Link} from "../../pressable/Link";
import {mediumPage} from "../../../const/mediumPage";
import {HeaderTwo} from "../../text/header/HeaderTwo";


export const PublicationsResponse: FC = () => {

    const [items, setItems] = useState([])
    const fadeAnim = useRef(new Animated.Value(0)).current

    // Fade in when articles load
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

    // Get articles
    useEffect(() => {
        fetch(mediumFeed)
            .then(r => r.json())
            .then(r => {
                if (Array.isArray(r?.items) && r?.status === 'ok') {
                    const filtered = r.items.filter((item: any) => item.categories.length !== 0)
                    setItems(filtered)
                }
            })
    }, [])

    return (
        <Animated.View
            style={{
                opacity: fadeAnim
            }}
        >
            <HeaderTwo
                text={'Blog'}
                animate
            />
            <Intro/>
            {
                items.map((item: any) => <Article {...{item}} key={item.guid}/>)
            }
            <ReadMore/>
        </Animated.View>
    )
}


const Intro: FC = () => {
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
            </Text>
        </View>
    )
}


const ReadMore: FC = () => {
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
                isExternalLink={true}
                a11yLabel={'Open Tom McIntosh on Medium.com'}
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

    // Length of hover animations
    const duration = 100

    const minColor = 0
    const maxColor = 1

    const [preview, setPreview] = useState('')
    const [formattedDate, setFormattedDate] = useState('')

    const colorAnim = useRef(new Animated.Value(minColor)).current

    // Grab the first paragraph of the article to use as a preview
    useEffect(() => {
        const split = item?.content?.split('<p>')?.[1]?.split('</p>')?.[0]
        if (split) {
            setPreview(split)
        }
    }, [item])

    // Manually format the date (Safari does not accept this format)
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
            isExternalLink={true}
            a11yLabel={`Open article: '${item.title}'`}
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
                                padding: 15,
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
                                        marginBottom: 10
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
                                    {preview}
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
