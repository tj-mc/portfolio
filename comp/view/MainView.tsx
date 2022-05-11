import React, {FunctionComponent} from 'react'
import {ScrollView, View} from 'react-native';
import {HeaderOne} from "../text/header/HeaderOne";
import {HeaderThree} from "../text/header/HeaderThree";
import {HeaderTwo} from "../text/header/HeaderTwo";
import {BodyText} from "../text/BodyText";
import {QuickCommand} from "../pressable/QuickCommand";
import {Terminal} from "../terminal/Terminal";
import {ContactBlock} from "../contact/ContactBlock";
import {standardTerminalResponse} from "../../func/terminal/standardTerminalResponse";
import {useDispatch} from "react-redux";
import {modalSlice} from "../../store/modalSlice";

export const MainView: FunctionComponent = () => {
    return (
        <View
            style={{
                maxWidth: 900,
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

    const dispatch = useDispatch()

    return (
        <View
            style={{
                marginBottom: 20
            }}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap'
                }}
            >
                <QuickCommand text={'blog'} response={standardTerminalResponse.blog}/>
                <QuickCommand text={'resume'} response={standardTerminalResponse.resume}/>
                <QuickCommand text={'get-in-touch'}
                              onPress={() => dispatch(modalSlice.actions.setContactVisible(true))}/>
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
            <View style={{ width: 300}}/>
            <Description/>
        </View>
    )
}

const Description: FunctionComponent = () => {
    return (
        <View
            style={{
                flex: 1,
                minWidth: 180,
                marginBottom: 20
            }}
        >
            <BodyText
                textAlign={'right'}
                text={`My name is Tom, and I build apps. If you need help with a new or existing app, bug fixes, UI upgrades, accessibility, or performance enhancements, I'd love to talk.`}/>
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
                marginBottom: 25,
            }}
        >
            <HeaderOne text={'Tom McIntosh'}/>
            <View style={{height: 5}}/>
            <HeaderThree text={'App Developer'}/>
        </View>
    )
}
