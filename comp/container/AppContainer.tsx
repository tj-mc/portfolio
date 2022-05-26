import React, {FC, useEffect, useRef, useState} from 'react';
import {Animated, useWindowDimensions, View} from 'react-native'
import {ViewSource} from "../ViewSource";
import {ContactModal} from "../modal/ContactModal";
import {useDispatch} from "react-redux";
import {publicationsSlice} from "../../store/publicationsSlice";
import {mediumFeed} from "../../const/mediumFeed";
import {MessageOverlay} from "../MessageOverlay";
import {theme} from "../../const/theme";
import {AntDesign} from '@expo/vector-icons';
import {Link} from "../pressable/Link";
import {modalSlice} from "../../store/modalSlice";


export const AppContainer: FC = ({children}) => {

    const dispatch = useDispatch()

    // Get blog articles
    useEffect(() => {
        fetch(mediumFeed)
            .then(r => r.json())
            .then(r => {
                if (Array.isArray(r?.items) && r?.status === 'ok') {
                    const filtered = r.items.filter((item: any) => item.categories.length !== 0)
                    dispatch(
                        publicationsSlice.actions.set(filtered)
                    )
                }
            })
    }, [])

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <>
                {children}
                <ViewSource/>
                <MessageBubble/>
                <ContactModal/>
                <MessageOverlay/>
            </>
        </View>
    )
}


const MessageBubble: FC = () => {

    const width = useWindowDimensions().width
    const [visible, setVisible] = useState(false);
    const scale = useRef(new Animated.Value(0)).current;
    const dispatch = useDispatch()

    useEffect(() => {
        setVisible(width >= 804)
    }, [width])

    useEffect(() => {
        setTimeout(() => {
            Animated.spring(scale, {
                useNativeDriver: true,
                mass: 4,
                overshootClamping: false,
                delay: 2000,
                toValue: 1,
                isInteraction: false
            }).start()
        }, 1000 * 15)
    }, [])

    return (

        <>
            {

                visible &&
                <Animated.View
                    //@ts-ignore
                    style={{
                        position: 'fixed',
                        bottom: 10,
                        right: 10,
                        transform: [
                            {
                                scale: scale
                            }
                        ]
                    }}
                >
                    <Link
                        onPress={() => {
                            dispatch(
                                modalSlice.actions.setContactVisible(true)
                            )
                        }}
                        a11yLabel={'Open contact form'}
                        isExternalLink={false}
                        useUnderline={false}
                    >
                        <View
                            style={{
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.32,
                                shadowRadius: 5.46,

                                elevation: 9,
                                borderRadius: 1000,
                                borderWidth: 2,
                                // backgroundColor: theme.color.gray.card,
                                borderColor: theme.color.backdrop,
                                padding: 10,
                            }}
                        >
                            <AntDesign name="message1" size={32} color={theme.color.primary}/>
                        </View>
                    </Link>
                </Animated.View>
            }

        </>
    )
}
