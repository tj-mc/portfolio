import React, {FunctionComponent as FC, useEffect} from "react";
import {View} from 'react-native';
import {HeaderTwo} from "../../text/header/HeaderTwo";
import {Paragraph} from "../../text/Paragraph";

export const ResumeResponse: FC<{}> = () => {

    useEffect(() => {
    }, [])

    return (
        <View>
            <HeaderTwo
                text={'Resume'}
                animate
            />
            <Paragraph>
                Coming soon.
            </Paragraph>
        </View>
    )
}


