import React, {FunctionComponent as FC} from "react";
import {View} from 'react-native';

/**
 * The response container just prepends the prompt line
 * that created this response component
 */
export const ResponseContainer: FC<{ prompt: string }> = props => {
    return (
        <View
            style={{
                marginTop: 10
            }}
        >
            {/*<PromptLine frozenValue={props.prompt}/>*/}
            <>
                {props.children}
            </>
            <View style={{height: 20}}/>
        </View>
    )
}
