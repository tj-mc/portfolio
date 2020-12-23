import {Clipboard} from "react-native";

export const copy = (content: string) => {
    // @ts-ignore - RNW
    if (Clipboard.isAvailable) {
        Clipboard.setString(content)
    }
}
