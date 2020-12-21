import React, {FunctionComponent} from "react";
import {Text} from "react-native";
import {theme} from "../../const/theme";

/**
 * Some of the rows use icons, and some use text.
 * This gives us a unified styles for the text rows.
 */
export const ContactTextIcon: FunctionComponent<{ text: string }> = ({text}) => {
    return (
        <Text
            style={{
                fontFamily: theme.font.primary.bold,
                fontSize: 12,
                color: theme.color.white
            }}
        >
            {text}
        </Text>
    )
}
