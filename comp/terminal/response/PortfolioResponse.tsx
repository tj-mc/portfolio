import React, {FunctionComponent as FC} from "react";
import {View} from 'react-native';
import {HeaderTwo} from "../../text/header/HeaderTwo";

export const PortfolioResponse: FC<{}> = () => {

    return (
        <View>
            <HeaderTwo
                text={'Portfolio'}
                animate
            />
            {/*<Fade>*/}
            {/*    <Card>*/}
            {/*        <Text>*/}
            {/*            Hey!*/}
            {/*        </Text>*/}
            {/*    </Card>*/}
            {/*</Fade>*/}
        </View>
    )
}
