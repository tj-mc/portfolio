import React, {FunctionComponent} from 'react'
import {ScrollView, View} from 'react-native';
import {HeaderOne} from "../text/header/HeaderOne";
import {HeaderThree} from "../text/header/HeaderThree";
import {HeaderTwo} from "../text/header/HeaderTwo";
import {BodyText} from "../text/BodyText";
import {QuickCommand} from "../pressable/QuickCommand";
import {Terminal} from "../Terminal";
import {ContactBlock} from "../contact/ContactBlock";

export const MainView: FunctionComponent = () => {
    return (
        <View
            style={{
                maxWidth: 600,
                height: '100%'
            }}
        >
            <ScrollView>
                <HeaderRow/>
                <ContactBlock/>
                <QuickCommandRow/>
                <Terminal/>
            </ScrollView>
        </View>
    )
}


const QuickCommandRow: FunctionComponent = () => {
    return (
        <View
            style={{
                marginBottom: 20
            }}
        >
            <View
                style={{
                    marginTop: 20,
                    marginBottom: 0
                }}
            >
                <HeaderTwo text={'Quick Commands'}/>
            </View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap'
                }}
            >
                <QuickCommand text={'portfolio'} onPress={() => {
                }}/>
                <QuickCommand text={'experience'} onPress={() => {
                }}/>
                <QuickCommand text={'open-source'} onPress={() => {
                }}/>
                <QuickCommand text={'resume'} onPress={() => {
                }}/>
            </View>
        </View>
    )
}


const HeaderRow: FunctionComponent = () => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}
        >
            <Title/>
            <Description/>
        </View>
    )
}

const Description: FunctionComponent = () => {
    return (
        <View
            style={{
                flex: 1,
                minWidth: '40%',
                maxWidth: '100%',
                marginLeft: '17%',
                marginBottom: 20
            }}
        >
            <BodyText
                textAlign={'right'}
                text={'My name is Tom, and I build digital experiences. If you’re interested in building a world-class mobile app, or an eye catching website, I’m always up for a chat.'}/>
        </View>
    )
}


const Title: FunctionComponent = () => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                flexShrink: 1,
                marginBottom: 25
            }}
        >
            <HeaderOne text={'Tom McIntosh'}/>
            <View style={{height: 5}}/>
            <HeaderThree text={'Software Developer & Creator'}/>
        </View>
    )
}
