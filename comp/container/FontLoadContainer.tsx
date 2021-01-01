import React, {FunctionComponent, useEffect} from "react";
import {useFonts} from "expo-font";
import {useDispatch} from "react-redux";
import {fontLoadSlice} from "../../store/fontLoadSlice";

export const FontLoadContainer: FunctionComponent = ({children}) => {

    const dispatch = useDispatch()

    let [loaded] = useFonts({
        'FiraCode_400Regular': require('../../assets/fonts/FiraCode-Regular.woff2'),
        'FiraCode_700Bold': require('../../assets/fonts/FiraCode-Bold.woff2'),
    })

    useEffect(() => {
        if (loaded) {
            dispatch(
                fontLoadSlice.actions.ready()
            )
        }
    }, [loaded])

    return <>{children}</>

}
