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
                your project. This lets you update content and collect information from your users easily.
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
                I also have experience working with traditional databases and servers, which means that I can work with
                your
                current system to gain new insights without having to sacrifice your existing data.
            </Paragraph>

            <Paragraph>
                Advancements haven't only been made in server technology. When looking for recent database innovation,
                look no further than Google Docs. Have you ever wondered how multiple users can access the same document
                simultaneously without having to worry about saving?

            </Paragraph>

            <Paragraph>
                There now exist databases that create an ongoing,
                real-time connection to your device, thus eliminating the need to manually save information. These aptly
                named
                <InTextLink
                    onPress={() => {
                        openURL('https://multipeers.itpeers.com/en/2017/02/20/vantagens-analise-tempo-real/')
                    }}
                    a11yLabel={'Read more about real-time databases'}
                    isExternal={true}
                >
                    real-time databases
                </InTextLink>

                redefine what’s possible for your users’ experience. Luckily this technology
                isn’t limited to industry leaders like Google. I’m familiar with these systems and can create the same
                seamless experience for your project.
            </Paragraph>

        </SkillCard>
    )
}
