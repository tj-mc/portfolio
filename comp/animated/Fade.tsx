import React, {FC} from 'react';

//@ts-ignore
import FadeInView from 'react-native-fade-in-view';

export const Fade: FC<{ duration?: number }> = props => {


    return (
        <FadeInView duration={props.duration ?? 400}>
            {props.children}
        </FadeInView>
    )
}
