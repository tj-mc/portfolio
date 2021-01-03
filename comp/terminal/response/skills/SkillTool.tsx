import React, {FC} from "react";
import {Image, Text, View} from "react-native";
import {theme} from "../../../../const/theme";

export const SkillTool: FC<{
    image: any,
    text: string
}> = props => {
    return (
        <View
            style={{
                width: 115,
                height: 90,
                margin: 15,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Image
                source={props.image}
                resizeMode={'contain'}
                style={{
                    width: '80%',
                    height: '100%',
                }}
            />
            <Text
                style={{
                    marginTop: 10,
                    fontFamily: theme.font.primary.bold,
                    color: theme.color.white,
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 14,

                }}
            >
                {props.text}
            </Text>
        </View>
    )
}
