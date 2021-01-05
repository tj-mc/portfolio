import React, {FC, useState} from 'react';
import {Modal} from "./Modal";
import {Text, TextInput, View} from "react-native";
import {HeaderTwo} from "../text/header/HeaderTwo";
import {Paragraph} from "../text/Paragraph";
import {theme} from "../../const/theme";
import {QuickCommand} from "../pressable/QuickCommand";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {modalSlice} from "../../store/modalSlice";

export const ContactModal: FC = () => {

    const modalState = useSelector((state: RootState) => state.modal)

    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()

    return (

        <Modal
            visible={modalState.contactVisible}
            onClose={() => {
                dispatch(
                    modalSlice.actions.setContactVisible(false)
                )
            }}
        >
            <View>
                <View
                    style={{
                        marginBottom: 20
                    }}
                >
                    <HeaderTwo text={'Get in touch'}/>
                </View>

                <Paragraph>
                    Interested in working together?
                </Paragraph>

                <Paragraph>
                    Enter your email below and I'll get back to you before the end of the day.
                </Paragraph>

                <InputLabel text={'Email'}/>
                <TextInput
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={{
                        fontFamily: theme.font.primary.regular,
                        color: theme.color.white,
                        padding: 10,
                        marginBottom: 10,
                        borderColor: theme.color.secondary,
                        borderWidth: 2
                    }}
                    textContentType={'emailAddress'}
                    returnKeyLabel={'Submit'}
                    placeholder={'Enter your email'}
                />

                <InputLabel text={'Enquiry'}/>
                <TextInput
                    value={body}
                    onChangeText={text => setBody(text)}
                    multiline={true}
                    style={{
                        minHeight: 200,
                        fontFamily: theme.font.primary.regular,
                        color: theme.color.white,
                        padding: 10,
                        marginBottom: 10,
                        borderColor: theme.color.secondary,
                        borderWidth: 2,
                    }}
                    returnKeyLabel={'Submit'}
                    placeholder={'Tell me about your project.'}
                />

                <View
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: 15,
                        justifyContent: 'center'
                    }}
                >
                    <QuickCommand
                        text={'submit'}
                        onPress={() => {
                            fetch(`.netlify/functions/contactSubmit`, {
                                method: 'POST',
                                body: JSON.stringify({email: email, enquiry: body})
                            }).then(() => {
                                setBody('')
                                setEmail('')
                                dispatch(
                                    modalSlice.actions.setContactVisible(false)
                                )
                            }).catch(e => {

                            })

                        }}
                    />
                </View>


            </View>
        </Modal>

    )
}

const InputLabel: FC<{ text: string }> = props => {
    return (
        <Text
            style={{
                fontFamily: theme.font.primary.regular,
                color: theme.color.white,
                marginBottom: 2,
                letterSpacing: 4
            }}
        >
            {props.text}
        </Text>
    )
}
