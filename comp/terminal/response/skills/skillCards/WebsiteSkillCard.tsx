import React, {FC, useRef} from "react";
import {Animated, Text, TouchableOpacity} from 'react-native';
import {SkillCard} from "../SkillCard";
import gatsby from "../../../../../assets/img/skillIcon/gatsby.png";
import react from "../../../../../assets/img/skillIcon/react.png";
import vue from "../../../../../assets/img/skillIcon/vue.png";
import {Paragraph} from "../../../../text/Paragraph";
import {SkillTool} from "../SkillTool";
import {openURL} from "../../../../../func/linking";
import {InTextLink} from "../../../../pressable/InTextLink";
import {useDispatch, useSelector} from "react-redux";
import {rocketSlice} from "../../../../../store/rocketSlice";
import {RootState} from "../../../../../store";

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
                In the early 2000's, everyone needed a website. In {new Date().getFullYear()}, pretty much everybody has
                one.
            </Paragraph>


            <Paragraph>
                That being said, not everybody has memorable website. Many are built from generic templates, are not
                mobile-responsive, lack proper accessibility
                features and are

                <InTextLink
                    onPress={() => openURL('https://www.thinkwithgoogle.com/intl/en-ca/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/')}>
                    slow to load.
                </InTextLink>
            </Paragraph>


            <Paragraph>
                I do the exact opposite.

                <InTextLink
                    onPress={() => openURL(`https://developers.google.com/speed/pagespeed/insights/?url=${window.location}&tab=desktop`)}
                >
                    Fast.
                </InTextLink>

                Responsive.

                <InTextLink
                    onPress={() => openURL('https://www.a11yproject.com/')}>
                    Accessible.
                </InTextLink>
            </Paragraph>

            <Paragraph>
                But most of all: <Text style={{letterSpacing: 4}}>memorable.</Text>
            </Paragraph>

            <Paragraph>
                There's a reason this site looks like a terminal from Tron mixed with Cyberpunk 2077; it's so it
                makes an impact! Case in point: Touch this rocket and watch it do something memorable.
            </Paragraph>

            <RocketAnimation/>

            <Paragraph>
                When we build a website together, the product is something that you can stand behind, and an experience
                that your
                customers will actually enjoy.
            </Paragraph>

        </SkillCard>
    )
}

const RocketAnimation: FC = () => {


    const rocketState = useSelector((state: RootState) => state.rocket)
    const dispatch = useDispatch()
    const viewRef = useRef(null)

    // Animate paragraphs closing together
    const startMargin = -5
    const endMargin = -58
    const marginTop = useRef(new Animated.Value(rocketState.left ? endMargin : startMargin)).current;

    return (
        <Animated.View
            style={{
                marginTop: marginTop,
                marginBottom: 20,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            // As soon as rocketState is set, disable
            pointerEvents={rocketState.left ? 'none' : undefined}
        >
            <TouchableOpacity
                ref={viewRef}
                onPress={() => {
                    // @ts-ignore
                    viewRef.current.measureInWindow((x, y) => {

                        const top = y + 10

                        dispatch(
                            rocketSlice.actions.setLayout({left: x, top})
                        )

                        setTimeout(() => {
                            Animated.timing(marginTop, {
                                useNativeDriver: true,
                                toValue: endMargin,
                                duration: 1500
                            }).start()
                        }, 3000)
                    })
                }}
            >
                <Text
                    style={{
                        // textAlign: 'center',
                        opacity: rocketState.left ? 0 : 1,
                        fontSize: 28
                    }}
                >🚀</Text>
            </TouchableOpacity>
        </Animated.View>
    )

}
