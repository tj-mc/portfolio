import React, {FunctionComponent} from "react";
import {Link} from "./Link";
import {Text} from "react-native";
import {theme} from "../../const/theme";

export const InTextLink: FunctionComponent<{
    onPress: () => void,
}> = props => {
    return (
        <Text>
            &nbsp;
            <Link
                onPress={() => props.onPress()}
            >
                <Text
                    style={{
                        color: theme.color.primary
                    }}
                >
                    {props.children}
                </Text>
            </Link>
            &nbsp;
        </Text>
    )
}
