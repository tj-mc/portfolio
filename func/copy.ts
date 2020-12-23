import {Clipboard} from "react-native";

export const copyAndNotify = (content: string) => {
    // @ts-ignore - RNW
    if (Clipboard.isAvailable) {
        console.log('yes')
    } else {
        console.log('no')
    }
}
