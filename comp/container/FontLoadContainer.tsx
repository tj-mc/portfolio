import React, {FunctionComponent, useEffect} from "react";
import {FiraCode_400Regular, FiraCode_700Bold, useFonts} from "@expo-google-fonts/fira-code";
import {useDispatch} from "react-redux";
import {fontLoadSlice} from "../../store/fontLoadSlice";

export const FontLoadContainer: FunctionComponent = ({children}) => {

    const dispatch = useDispatch()

    let [loaded] = useFonts({
        FiraCode_400Regular,
        FiraCode_700Bold
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
