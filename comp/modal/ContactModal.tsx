import React, {FC, useState} from 'react';
import {Modal} from "./Modal";
import {TextInput, View} from "react-native";
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
                    Enter your email below and I'll get back to you within 24 hours.
                </Paragraph>

                <TextInput
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={{
                        fontFamily: theme.font.primary.regular,
                        color: theme.color.white,
                        padding: 10,
                        marginVertical: 10
                    }}
                    textContentType={'emailAddress'}
                    returnKeyLabel={'Submit'}
                    placeholder={'Type here...'}
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
                            // let formData = new FormData()
                            // formData.append('email', 'test@test.com')
                            // fetch('/', {
                            //     method: 'POST',
                            //     headers: {"Content-Type": "application/x-www-form-urlencoded"},
                            //     body: new URLSearchParams(formData).toString()
                            // }).then(() => console.log('Form successfully submitted')).catch((error) =>
                            //     alert(error))
                        }}
                    />
                </View>


            </View>
        </Modal>

    )
}
