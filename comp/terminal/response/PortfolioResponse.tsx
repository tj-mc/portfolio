import React, {FunctionComponent as FC, useEffect} from "react";
import {View} from 'react-native';
import {HeaderTwo} from "../../text/header/HeaderTwo";

export const PortfolioResponse: FC<{}> = () => {

    useEffect(() => {
    }, [])

    return (
        <View>
            <HeaderTwo text={'Portfolio'}/>
        </View>
    )
}
