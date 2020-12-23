import React, {FunctionComponent} from "react";
import {Text, View} from 'react-native'
import {ContactBlockContent} from "./ContactBlockContent";
import {theme} from "../../const/theme";
import {Link} from "../pressable/Link";

export const LeftColumn: FunctionComponent = () => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
            }}
        >
            {
                ContactBlockContent.map(item => {
                        return (
                            <View
                                key={item.body}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginRight: 5,
                                    marginBottom: item?.spaceBottom || 8
                                }}
                            >
                                {item.label}
                                <Text
                                    style={{
                                        fontFamily: theme.font.primary.bold,
                                        color: theme.color.white,
                                        fontSize: 14
                                    }}
                                >
                                    :
                                </Text>
                            </View>

                        )
                    }
                )
            }
        </View>
    )
}

export const RightColumn: FunctionComponent = () => {
    return (
        <View>
            {
                ContactBlockContent.map(item => {
                        return (
                            <View
                                key={item.body}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: item?.spaceBottom || 8
                                }}
                            >
                                <Link onPress={item.onPress}>
                                    <Text
                                        style={{
                                            fontFamily: theme.font.primary.regular,
                                            color: theme.color.primary,
                                            fontSize: 14
                                        }}
                                    >
                                        {item.body}
                                    </Text>
                                </Link>
                            </View>
                        )
                    }
                )
            }
        </View>
    )
}

export const ContactBlock: FunctionComponent = () => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 20
            }}
        >
            <LeftColumn/>
            <RightColumn/>
        </View>
    )
}

