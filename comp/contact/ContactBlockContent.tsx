import {ContactTextIcon} from "./ContactTextIcon";
import {AntDesign} from "@expo/vector-icons";
import React from "react";
import {theme} from "../../const/theme";
import {openURL} from "../../func/linking";
import {copy} from "../../func/copy";

const iconSize = 16
const spacerSize = 20

export const ContactBlockContent = [
    {
        // The left, white icon
        label: <ContactTextIcon text={'www'}/>,
        // The primary color text content
        body: 'tjmc.dev',
        // What to do when pressed
        onPress: () => openURL('https://tjmc.dev')
    },

    {
        label: <ContactTextIcon text={'ph'}/>,
        body: '0419 710 903',
        onPress: () => openURL('tel:0419 710 903')
    },

    {
        label: <ContactTextIcon text={'@'}/>,
        body: 'tom_mcintosh@outlook.com',
        onPress: () => copy('tom_mcintosh@outlook.com'),
        // Will create a space below this icon,
        // otherwise use default size.
        spaceBottom: spacerSize,
        useToast: true,
        toastText: 'Copied!',
    },

    {
        label: <AntDesign name="twitter" size={iconSize} color={theme.color.white}/>,
        body: 'tjmc_dev',
        onPress: () => openURL('https://twitter.com/tjmc_dev')
    },

    {
        label: <AntDesign name="github" size={iconSize} color={theme.color.white}/>,
        body: 'tj-mc',
        onPress: () => openURL('https://github.com/tj-mc')
    }
]

