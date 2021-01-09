import React, {FC} from "react";
import {Text, View} from 'react-native';
import TypeWriter from 'react-native-typewriter'
import {Modal} from "./modal/Modal";
import {theme} from "../const/theme";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {modalSlice} from "../store/modalSlice";

export const MessageOverlay: FC = () => {

    const modalState = useSelector((state: RootState) => state.modal)
    const dispatch = useDispatch()

    const close = () => {
        dispatch(
            modalSlice.actions.setMessageVisible(false)
        )
    }

    return (
        <Modal
            hideWindow={true}
            onClose={() => close()}
            visible={modalState.messageVisible}
        >
            <View
                style={{
                    padding: 30
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 50,
                        color: theme.color.white,
                        fontFamily: theme.font.primary.regular
                    }}
                >
                    <TypeWriter
                        fixed={true}
                        typing={0.5}
                        onTypingEnd={() => {
                            setTimeout(() => {
                                close()
                            }, 2000)
                        }}
                    >
                        {modalState.message}
                    </TypeWriter>
                </Text>
            </View>
        </Modal>
    )
}
