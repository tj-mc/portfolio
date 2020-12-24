import React, {FunctionComponent as FC} from "react";
import {Text, View} from 'react-native';
import {theme} from "../../../const/theme";

export const NotFoundResponse: FC<{}> = () => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: theme.font.primary.regular,
                    color: theme.color.white
                }}
            >
                {'->'} Response
            </Text>
        </View>
    )
}
