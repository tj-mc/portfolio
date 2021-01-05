import React, {FC} from "react";
import {SkillCard} from "../SkillCard";
import reactIcon from "../../../../../assets/img/skillIcon/react.png";
import swiftIcon from "../../../../../assets/img/skillIcon/swift.png";
import tsIcon from "../../../../../assets/img/skillIcon/ts.png";
import {Paragraph} from "../../../../text/Paragraph";
import {SkillTool} from "../SkillTool";

export const AppDevSkillCard: FC = () => {
    return (
        <SkillCard
            title={'App Development'}
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

            <Paragraph>
                A mobile app is all about user experience. It just feels faster, smoother and more responsive,
                allowing your users to get things done quicker, with less frustration. On top of this, you can
                tap in to advanced device functionality, like camera, location and audio.
            </Paragraph>

            <Paragraph>
                I build refined mobile apps that feel right at home on iOS and Android, meaning you don’t have
                to pick a platform. By utilising cutting edge technology used by Facebook, AirBnB and Uber,
                your app will be finished in half the time, with half the bugs and at half the cost of
                traditional development.
            </Paragraph>

            <Paragraph>
                From our first conversations, my goal is to understand your users, so that we can create the
                best experience possible.
            </Paragraph>

        </SkillCard>
    )
}
