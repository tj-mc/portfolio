import {Linking, Platform} from "react-native";

export const openURL = (url: string) => {

    if (url.startsWith('http') && Platform.OS === 'web') {
        window.open(url)
    } else if (Linking.canOpenURL(url)) {
        Linking.openURL(url)
    }

}
