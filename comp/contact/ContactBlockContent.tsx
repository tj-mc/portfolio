import {ContactTextIcon} from "./ContactTextIcon";
import {AntDesign} from "@expo/vector-icons";
import React from "react";
import {theme} from "../../const/theme";
import {Linking} from "react-native";

const iconSize = 16
const spacerSize = 20

const open = (url: string) => {
    if (Linking.canOpenURL(url)) {
        Linking.openURL(url)
    }
}

export const ContactBlockContent = [
    {
        // The left, white icon
        label: <ContactTextIcon text={'www'}/>,
        // The primary color text content
        body: 'tjmc.dev',
        // What to do when pressed
        onPress: () => open('https://tjmc.dev')
    },

    {
        label: <ContactTextIcon text={'ph'}/>,
        body: '0419 710 903',
        onPress: () => open('tel:0419 710 903')
    },

    {
        label: <ContactTextIcon text={'@'}/>,
        body: 'tom_mcintosh@outlook.com',
        onPress: () => open('mailto:tom_mcintosh@outlook.com'),
        // Will create a space below this icon,
        // otherwise use default size.
        spaceBottom: spacerSize
    },

    {
        label: <AntDesign name="twitter" size={iconSize} color={theme.color.white}/>,
        body: 'tjmc_dev',
        onPress: () => open('https://twitter.com/tjmc_dev')
    },

    {
        label: <AntDesign name="github" size={iconSize} color={theme.color.white}/>,
        body: 'tj-mc',
        onPress: () => open('https://github.com/tj-mc')
    }
]

