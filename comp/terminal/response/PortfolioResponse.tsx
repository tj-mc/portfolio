import React, {FunctionComponent as FC} from "react";
import {View} from 'react-native';
import {HeaderTwo} from "../../text/header/HeaderTwo";
import {Paragraph} from "../../text/Paragraph";

export const PortfolioResponse: FC<{}> = () => {

    return (
        <View>
            <HeaderTwo
                text={'Portfolio'}
                animate
            />
            <Paragraph>
                Coming soon.
            </Paragraph>
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
