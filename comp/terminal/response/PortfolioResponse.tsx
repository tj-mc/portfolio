import React, {FunctionComponent as FC} from "react";
import {Image, Text, View} from 'react-native';
import {HeaderTwo} from "../../text/header/HeaderTwo";
import {portfolioProject} from "./portfolio/portfolioProjectType";
import {tuhAppProject} from "./portfolio/projects/tuhAppProject";
import {trailMixWebsiteProject} from "./portfolio/projects/trailMixWebsiteProject";
import {Card} from "../../Card";
import {theme} from "../../../const/theme";
import {Link} from "../../pressable/Link";
import {useDispatch, useSelector} from "react-redux";
import {projectsSlice} from "../../../store/projectsSlice";
import {RootState} from "../../../store";
import {Fade} from "../../animated/Fade";
import {AntDesign} from '@expo/vector-icons';

const projects: Array<portfolioProject> = [
    tuhAppProject,
    trailMixWebsiteProject,
    // trailMixLiveStreamingProject,
    // naocaFuneralStreamProject,
    // tjmcDevProject,
    // smileSeekerSmileRevealProject,
    // chordCrafterProject,
    // tomorrowJournalProject
]

const findProject = (name: string) => projects.find(project => project.name === name)

export const PortfolioResponse: FC<{}> = () => {

    return (
        <View>
            <HeaderTwo
                text={'Portfolio'}
                animate
            />
            <Intro/>
            <TileGrid
                {...{projects}}
            />
            <ActiveProject/>
        </View>
    )
}


const ActiveProject: FC = () => {

    const projectsState = useSelector((state: RootState) => state.projects)

    return (
        <>
            {
                projectsState.currentProjectId !== '' &&
                <Fade>
                    <BackButton/>
                    <Card>
                        <Text
                            style={{
                                fontFamily: theme.font.primary.regular,
                                color: theme.color.white
                            }}
                        >
                            {findProject(projectsState.currentProjectId)?.name} - Project description coming soon.
                        </Text>
                    </Card>
                </Fade>
            }
        </>
    )
}

const BackButton: FC = () => {

    const dispatch = useDispatch()

    return (
        <View>
            <Link
                onPress={() => {
                    dispatch(
                        projectsSlice.actions.setCurrentProject('')
                    )
                }}
                a11yLabel={'Go back to project view'}
                isExternalLink={false}
                useUnderline={false}
            >
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                >
                    <View
                        style={{
                            marginRight: 10
                        }}
                    >
                        <AntDesign name="leftcircleo" size={24} color="white"/>
                    </View>
                    <Text
                        style={{
                            fontFamily: theme.font.primary.regular,
                            color: theme.color.white
                        }}
                    >
                        Go back
                    </Text>
                </View>
            </Link>
        </View>
    )
}

const Intro: FC = () => {
    return (
        <View>
            <Text
                style={{
                    color: theme.color.white,
                    fontFamily: theme.font.primary.regular,
                    marginVertical: 10
                }}
            >
                Here's a list of my most recent projects.
            </Text>
        </View>
    )
}

const TileGrid: FC<{ projects: Array<portfolioProject> }> = props => {

    const projectsState = useSelector((state: RootState) => state.projects)

    return (
        <>
            {
                projectsState.currentProjectId === '' &&
                <Fade>

                    <View
                        style={{
                            marginHorizontal: -10,
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between'
                        }}
                    >
                        {
                            props.projects.map(project => <Tile key={project.name} {...{project}}/>)
                        }
                    </View>
                </Fade>
            }
        </>
    )
}


const Tile: FC<{ project: portfolioProject }> = props => {

    const dispatch = useDispatch()

    return (
        <View
            style={{
                flex: 1,
                flexGrow: 1,
                flexShrink: 1,
                minWidth: 250,
                flexBasis: '33.33%',
                paddingHorizontal: 10,
                marginVertical: 10
            }}
        >
            <Link
                useUnderline={false}
                isExternalLink={false}
                onPress={() => {
                    dispatch(
                        projectsSlice.actions.setCurrentProject(props.project.name)
                    )
                }}
                a11yLabel={`Read more about ${props.project.name}`}
            >

                <Card
                    noMargin={true}
                >
                    <Text
                        style={{
                            fontFamily: theme.font.primary.bold,
                            color: theme.color.white,
                            fontSize: 16
                        }}
                    >
                        {props.project.name}
                    </Text>
                    <Text
                        style={{
                            fontFamily: theme.font.primary.regular,
                            color: theme.color.white,
                            marginVertical: 10,
                            fontSize: 13

                        }}
                    >
                        {props.project.subtitle}
                    </Text>
                    <Image
                        style={{
                            width: '100%',
                            height: 150
                        }}
                        source={props.project.thumbnail}
                    />
                    <Text
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: theme.font.primary.regular,
                            color: theme.color.white,
                            fontSize: 12,
                            marginTop: 15
                        }}
                    >
                        {
                            props.project.technologies.map((item, index) => {

                                let addComma = (index + 1 !== props.project.technologies.length)
                                return (
                                    <Text>{item}{addComma ? ', ' : null}</Text>
                                )
                            })
                        }
                    </Text>
                </Card>
            </Link>
        </View>
    )
}
