import React, {FC} from "react";
import {SkillCard} from "../SkillCard";
import figma from "../../../../../assets/img/skillIcon/figma.png";
import photoshop from "../../../../../assets/img/skillIcon/photoshop.png";
import invision from "../../../../../assets/img/skillIcon/invision.png";
import {Paragraph} from "../../../../text/Paragraph";
import {SkillTool} from "../SkillTool";

export const DesignSkillCard: FC = () => {
    return (
        <SkillCard
            title={'Design'}
            tools={[
                <SkillTool
                    text={'Figma'}
                    image={figma}
                />,
                <SkillTool
                    text={'Photoshop'}
                    image={photoshop}
                />,
                <SkillTool
                    text={'Invision'}
                    image={invision}
                />,
            ]}
        >
            <Paragraph>
            </Paragraph>

        </SkillCard>
    )
}
