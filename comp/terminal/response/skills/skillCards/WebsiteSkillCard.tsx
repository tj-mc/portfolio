import React, {FC} from "react";
import {SkillCard} from "../SkillCard";
import gatsby from "../../../../../assets/img/skillIcon/gatsby.png";
import react from "../../../../../assets/img/skillIcon/react.png";
import vue from "../../../../../assets/img/skillIcon/vue.png";
import {Paragraph} from "../../../../text/Paragraph";
import {SkillTool} from "../SkillTool";

export const WebsitesSkillCard: FC = () => {
    return (
        <SkillCard
            title={'Websites'}
            tools={[
                <SkillTool
                    text={'Gatsby'}
                    image={gatsby}
                />,
                <SkillTool
                    text={'React'}
                    image={react}
                />,
                <SkillTool
                    text={'Vue'}
                    image={vue}
                />,
            ]}
        >
            <Paragraph>
            </Paragraph>

        </SkillCard>
    )
}
