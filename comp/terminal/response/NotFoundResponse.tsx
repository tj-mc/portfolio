import React, {FunctionComponent as FC} from "react";
import {Text, View} from 'react-native';
import {theme} from "../../../const/theme";
import {Fade} from "../../animated/Fade";

export const NotFoundResponse: FC<{}> = () => {
    return (
        <>
            <Fade>
                <View>
                    <Text
                        style={{
                            fontFamily: theme.font.primary.regular,
                            color: theme.color.white
                        }}
                    >
                        Command not found. {'¯\\_(ツ)_/¯'}{'\n'}
                    </Text>
                </View>
            </Fade>
        </>
    )
}
