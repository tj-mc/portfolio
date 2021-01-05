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
        label: <ContactTextIcon text={'ph'}/>,
        body: '0419 710 903',
        onPress: () => openURL('tel:0419 710 903'),
        a11yLabel: 'Phone 0419 710 903',
        isExternal: false
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
        a11yLabel: 'Copy email',
        isExternal: false
    },

    {
        label: <AntDesign name="medium-monogram" size={iconSize} color={theme.color.white}/>,
        body: 'tjmc.medium.com',
        onPress: () => openURL('https://tjmc.medium.com'),
        a11yLabel: 'Open Tom McIntosh on Medium',
        isExternal: true
    },
    {
        label: <AntDesign name="twitter" size={iconSize} color={theme.color.white}/>,
        body: 'tjmc_dev',
        onPress: () => openURL('https://twitter.com/tjmc_dev'),
        a11yLabel: 'Open Tom McIntosh on Twitter',
        isExternal: true
    },

    {
        label: <AntDesign name="github" size={iconSize} color={theme.color.white}/>,
        body: 'tj-mc',
        onPress: () => openURL('https://github.com/tj-mc'),
        a11yLabel: 'Open Tom McIntosh on Github',
        isExternal: true
    },

]

