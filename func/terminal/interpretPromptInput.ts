import {terminalResponse} from "../../store/terminalSlice";

/**
 * This function checks for valid inputs.
 * If the input is not valid, it returns the 'not found' response
 */
export const interpretPromptInput = (promptInput: string): terminalResponse => {
    // @ts-ignore
    const validResponse: number = Object.values(terminalResponse).indexOf(promptInput)
    if (validResponse !== -1) {
        return Object.values(terminalResponse)[validResponse]
    } else {
        return terminalResponse.notFound
    }
}
