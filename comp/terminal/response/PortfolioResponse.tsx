import React, {FunctionComponent as FC, useEffect} from "react";
import {Text, View} from 'react-native';
import {theme} from "../../../const/theme";

export const PortfolioResponse: FC<{}> = () => {

    useEffect(() => {
    }, [])

    return (
        <View>
            <Text
                style={{
                    fontFamily: theme.font.primary.regular,
                    color: theme.color.white
                }}
            >
                Portfolio
            </Text>
        </View>
    )
}
