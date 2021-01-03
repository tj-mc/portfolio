import React, {FC} from "react";
import {SkillCard} from "../SkillCard";
import laravel from "../../../../../assets/img/skillIcon/laravel.png";
import nodejs from "../../../../../assets/img/skillIcon/nodejs.png";
import aws from "../../../../../assets/img/skillIcon/aws.png";
import {Paragraph} from "../../../../text/Paragraph";
import {SkillTool} from "../SkillTool";

export const ServerAndDatabaseSkillCard: FC = () => {
    return (
        <SkillCard
            title={'Server & Database'}
            tools={[
                <SkillTool
                    text={'PHP/Laravel'}
                    image={laravel}
                />,
                <SkillTool
                    text={'Node JS'}
                    image={nodejs}
                />,
                <SkillTool
                    text={'Amazon Web'}
                    image={aws}
                />,
            ]}
        >
            <Paragraph>
            </Paragraph>

        </SkillCard>
    )
}
