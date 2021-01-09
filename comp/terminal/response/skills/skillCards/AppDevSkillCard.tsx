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
                A mobile app is all about user experience. It feels faster, smoother and more responsive,
                allowing your users to get things done quicker and with less frustration. On top of this, you can
                tap in to advanced device functionality like camera, location, and audio.
            </Paragraph>

            <Paragraph>

                By now we know that both Android and iOS are core platforms for consumer interaction.
                Choosing to cater to one platform or another isolates half you client base.
                I build smooth and refined cross-platform mobile apps that bridge that gap.
            </Paragraph>

            <Paragraph>
                By utilising the same cutting edge technology as Facebook, AirBnB and Uber I can double your client base
                while
                finishing your app in half the time, with half the bugs and at half the cost of traditional development.
            </Paragraph>

            <Paragraph>
                From our first conversation, my goal is to understand the vision for your project.
                Throughout development I'll use this understanding to create the best experience possible.
                Once it's built you'll not only have a customised and intuituve app, you'll understand the code it
                stands on and how it was made.
            </Paragraph>

        </SkillCard>
    )
}
