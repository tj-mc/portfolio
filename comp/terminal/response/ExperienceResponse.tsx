import React, {FunctionComponent as FC, useEffect} from "react";
import {Text, View} from 'react-native';
import {theme} from "../../../const/theme";

export const ExperienceResponse: FC<{}> = () => {

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
                Experience
            </Text>
        </View>
    )
}