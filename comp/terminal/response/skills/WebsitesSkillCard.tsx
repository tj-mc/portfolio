import React, {FC} from "react";
import {View} from 'react-native';
import {SkillCard} from "./SkillCard";
// @ts-ignore
import reactIcon from "../../../../assets/img/skillIcon/react.png";
// @ts-ignore
import swiftIcon from "../../../../assets/img/skillIcon/swift.png";
// @ts-ignore
import tsIcon from "../../../../assets/img/skillIcon/ts.png";
import {Paragraph} from "../../../text/Paragraph";
import {SkillTool} from "./SkillTool";

export const WebsiteSkillCard: FC = props => {
    return (
        <SkillCard
            title={'Websites'}
            tools={[
                <SkillTool
                    text={'React Native'}
                    image={reactIcon}
                />,
                <SkillTool
                    text={'Apple Swift'}
                    image={swiftIcon}
                />,
                <SkillTool
                    text={'TypeScript'}
                    image={tsIcon}
                />,
            ]}
        >
            <Paragraph>
                Why would you open the YouTube app on your phone, when youtube.com works perfectly fine in the
                browser? The answer is user experience.
            </Paragraph>

        </SkillCard>
    )
}
