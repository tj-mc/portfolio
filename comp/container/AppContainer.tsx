import React, {FunctionComponent, useEffect} from 'react'
import {View} from 'react-native'
import {ViewSource} from "../ViewSource";
import {RocketAnimation} from "../animated/RocketAnimation";
import {ContactModal} from "../modal/ContactModal";
import {useDispatch} from "react-redux";
import {publicationsSlice} from "../../store/publicationsSlice";
import {mediumFeed} from "../../const/mediumFeed";
import {Particles} from "../Particles";
import {MessageOverlay} from "../MessageOverlay";
import {theme} from "../../const/theme";
import {BSOD} from "../BSOD";


export const AppContainer: FunctionComponent = ({children}) => {

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
                backgroundColor: theme.color.backdrop,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <>
                <Particles/>
                {children}
                <ViewSource/>
                <RocketAnimation/>
                <ContactModal/>
                <MessageOverlay/>
                <BSOD/>
            </>
        </View>
    )
}


