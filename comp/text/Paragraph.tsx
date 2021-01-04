import React, {FC} from "react";
import {Text} from 'react-native';
import {theme} from "../../const/theme";

export const Paragraph: FC<{}> = props => {

    const fontSize = 14

    return (
        <Text
            style={{
                fontFamily: theme.font.primary.regular,
                color: theme.color.white,
                fontSize: fontSize,
                lineHeight: fontSize * 1.4
            }}
        >
            {props.children}{'\n'}{'\n'}
        </Text>
    )
}
