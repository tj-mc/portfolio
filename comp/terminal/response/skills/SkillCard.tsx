import React, {FC} from "react";
import {Text, View} from 'react-native';
import {HeaderOne} from "../../../text/header/HeaderOne";
import {Card} from "../../../Card";
import {theme} from "../../../../const/theme";
import {QuickCommand} from "../../../pressable/QuickCommand";
import {Fade} from "../../../animated/Fade";
import {useDispatch} from "react-redux";
import {modalSlice} from "../../../../store/modalSlice";

export const SkillCard: FC<{
    title: string,
    tools: React.ComponentElement<any, any>[]
}> = props => {


    const dispatch = useDispatch()

    return (
        <Fade>
            <Card>
                <View
                    style={{
                        padding: 10
                    }}
                >
                    <View
                        style={{
                            marginBottom: 20
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
                            fontSize: 18,
                            marginBottom: 20,
                            textAlign: 'center'
                        }}
                    >
                        Strengths
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
                            props.tools.map((tool, idx) => {
                                return (
                                    <View
                                        key={idx}
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
                                dispatch(
                                    modalSlice.actions.setContactVisible(true)
                                )
                                // openURL('tel:0419 710 903')
                            }}
                        />
                    </View>

                </View>
            </Card>
        </Fade>
    )
}
