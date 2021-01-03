import React, {FC} from "react";
import {View} from 'react-native';
import {HeaderTwo} from "../../text/header/HeaderTwo";
import {AppDevSkillCard} from "./skills/skillCards/AppDevSkillCard";


export const SkillsResponse: FC = () => {
    return (
        <View>
            <HeaderTwo
                text={'Skills'}
                animate
            />
            <View>
                <AppDevSkillCard/>
                {/*<WebsitesSkillCard/>*/}
                {/*<ServerAndDatabaseSkillCard/>*/}
                {/*<DesignSkillCard/>*/}
            </View>
        </View>
    )
}


