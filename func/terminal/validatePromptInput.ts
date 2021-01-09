import {standardTerminalResponse} from "./standardTerminalResponse";

/**
 * This function checks for valid inputs.
 * If the input is not valid, it returns the 'not found' response
 */
export const validatePromptInput = (promptInput: any): standardTerminalResponse => {
    // Try to find this prompt in the enum
    const validResponse: number = Object.values(standardTerminalResponse).indexOf(promptInput)

    // If found, return that value
    if (validResponse !== -1) {
        return Object.values(standardTerminalResponse)[validResponse]

        // Return default
    } else {
        return standardTerminalResponse.notFound
    }
}
