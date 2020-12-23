import {terminalResponse} from "../../store/terminalSlice";

export const interpretPromptInput = (promptInput: string): terminalResponse => {
    // @ts-ignore
    const validResponse: number = Object.values(terminalResponse).indexOf(promptInput)
    if (validResponse !== -1) {
        return Object.values(terminalResponse)[validResponse]
    } else {
        return terminalResponse.notFound
    }
}
