import React, {FC} from "react";
import {View} from 'react-native';

export const Template: FC<{}> = props => {
    return (
        <View>

        </View>
    )
}

type TestPropTypes = {
    text: string
}

const Test: React.FunctionComponent<TestPropTypes> = ({text}) => {
    return (
        <> </>
    )
}
