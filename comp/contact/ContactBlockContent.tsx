import {ContactTextIcon} from "./ContactTextIcon";
import {AntDesign} from "@expo/vector-icons";
import React from "react";
import {theme} from "../../const/theme";

const iconSize = 14
const spacerSize = 20

export const ContactBlockContent = [
    {
        // The left, white icon
        label: <ContactTextIcon text={'www'}/>,
        // The primary color text content
        body: 'tjmc.dev',
        // What to do when pressed
        onPress: () => console.log('HELLO')
    },

    {
        label: <ContactTextIcon text={'ph'}/>,
        body: '0419 710 903',
        onPress: () => console.log('HELLO')
    },

    {
        label: <ContactTextIcon text={'@'}/>,
        body: 'tom_mcintosh@outlook.com',
        onPress: () => console.log('HELLO'),
        // Will create a space below this icon,
        // otherwise use default size.
        spaceBottom: spacerSize
    },

    {
        label: <AntDesign name="twitter" size={iconSize} color={theme.color.white}/>,
        body: 'tjmc_dev',
        onPress: () => {
        }
    },

    {
        label: <AntDesign name="github" size={iconSize} color={theme.color.white}/>,
        body: 'tj-mc',
        onPress: () => {
        }
    }
]

