import React, {FC} from "react";
import {SkillCard} from "../SkillCard";
import laravel from "../../../../../assets/img/skillIcon/laravel.png";
import nodejs from "../../../../../assets/img/skillIcon/nodejs.png";
import aws from "../../../../../assets/img/skillIcon/aws.png";
import {Paragraph} from "../../../../text/Paragraph";
import {SkillTool} from "../SkillTool";
import {InTextLink} from "../../../../pressable/InTextLink";
import {openURL} from "../../../../../func/linking";

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
                If you're building an app or a website, you'll need some kind of server and database to power
                your project. This lets you update content and capture information from your users easily.
            </Paragraph>

            <Paragraph>
                Traditionally, servers are rented for a fixed monthly price, and have a limited capacity. This is simple
                to get running,
                but it means
                that a sudden influx of traffic (like a basic

                <InTextLink
                    onPress={() => openURL('https://www.cloudflare.com/en-au/learning/ddos/what-is-a-ddos-attack/')}
                    a11yLabel={'Open Cloudflare Blog'}
                    isExternal={true}
                >
                    DDOS attack
                </InTextLink>) could crash your site.
            </Paragraph>

            <Paragraph>
                I specialise in developing servers and database that scale infinitely, so no amount of traffic can bring
                things down. This is known (ironically) as
                <InTextLink
                    onPress={() => openURL('https://aws.amazon.com/serverless/')}
                    a11yLabel={'Open AWS Blog'}
                    isExternal={true}
                >
                    Serverless
                </InTextLink>
                architecture, and is generally cheaper, faster and more secure than dedicated servers.
            </Paragraph>

            <Paragraph>
                I also have experience working with large datasets of user
                information, and writing advanced queries to gain new insights from your existing data.
            </Paragraph>

            <Paragraph>
                By the way, have you ever wondered how Google Docs lets multiple users work on the same document,
                without having to hit save?
                This is done with a real-time database. This opens the door to functionality that your users will
                really get hooked on.
            </Paragraph>

        </SkillCard>
    )
}
