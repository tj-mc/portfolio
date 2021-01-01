import React, {FC} from "react";
import {View, Text} from 'react-native';
import {HeaderOne} from "../../../text/header/HeaderOne";
import {Card} from "../../../Card";
import {theme} from "../../../../const/theme";
import {Link} from "../../../pressable/Link";
import {QuickCommand} from "../../../pressable/QuickCommand";

export const SkillCard: FC<{
    title: string,
    tools: React.ComponentElement<any, any>[]
}> = props => {
    return (
        <Card>
            <View
                style={{
                    padding: 10
                }}
            >
                <View
                    style={{
                        marginBottom: 10
                    }}
                >
                    <HeaderOne
                        text={props.title}
                        disableAnimation={true}
                    />
                </View>
                {props.children}


                <Text
                    style={{
                        fontFamily: theme.font.primary.bold,
                        color: theme.color.white,
                        fontSize: 14,
                        marginBottom: 20
                    }}
                >
                    Tools
                </Text>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    {
                        props.tools.map(tool => {
                            return (
                                <View
                                    style={{
                                        marginBottom: 15
                                    }}
                                >
                                    {tool}
                                </View>
                            )
                        })
                    }
                </View>

                <View
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20

                    }}
                >
                    <QuickCommand
                        text={'get-in-touch'}
                        onPress={() => {
                            open('tel:0419 710 903')
                        }}
                    />
                </View>

            </View>
        </Card>
    )
}
