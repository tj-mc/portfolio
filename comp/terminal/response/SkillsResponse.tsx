import React, {FC} from "react";
import {View, Text, Image} from 'react-native';
import {HeaderTwo} from "../../text/header/HeaderTwo";

// @ts-ignore
import reactIcon from '../../../assets/img/skillIcon/react.png'
// @ts-ignore
import swiftIcon from '../../../assets/img/skillIcon/swift.png'
// @ts-ignore
import tsIcon from '../../../assets/img/skillIcon/ts.png'

import {AppDevSkillCard} from "./skills/AppDevSkillCard";
import {WebsiteSkillCard} from "./skills/WebsitesSkillCard";
import {ServerAndDatabaseSkillCard} from "./skills/ServerAndDatabaseSkillCard";
import {DesignSkillCard} from "./skills/DesignSkillCard";

export const SkillsResponse: FC = () => {
    return (
        <View>
            <HeaderTwo text={'Skills'}/>
            <View>
                <AppDevSkillCard/>
                {/*<WebsiteSkillCard/>*/}
                {/*<ServerAndDatabaseSkillCard/>*/}
                {/*<DesignSkillCard/>*/}
            </View>
        </View>
    )
}

