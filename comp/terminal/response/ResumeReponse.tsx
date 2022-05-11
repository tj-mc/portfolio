import React, {FunctionComponent as FC, useEffect, useState} from "react";
import {Text, View} from 'react-native';
import {HeaderTwo} from "../../text/header/HeaderTwo";
import {openURL} from "../../../func/linking";
import {staticResources} from "../../staticResources";
import TypeWriter from 'react-native-typewriter'
import {Link} from "../../pressable/Link";
import {theme} from "../../../const/theme";
import {AntDesign} from '@expo/vector-icons';


export const ResumeResponse: FC<{}> = () => {

    return (
        <View>
            <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 25
                }}
            >
                <Link
                    onPress={() => {
                        openURL(staticResources.resume)
                    }}
                    isExternalLink={false}
                    a11yLabel={'Tap to open resume'}
                >
                    <View
                        style={{
                            marginBottom: 5
                        }}
                    >
                        <Body>
                            Open resume <AntDesign name="pdffile1" size={30} color="white"/>
                        </Body>
                    </View>
                </Link>

            </View>
        </View>
    )
}

const Body: FC = props => {
    return (
        <Text
            style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 24,
                color: theme.color.white,
                fontFamily: theme.font.primary.regular
            }}
        >
            {props.children}
        </Text>
    )
}


