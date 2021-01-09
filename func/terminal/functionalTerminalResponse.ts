import {store} from "../../store";
import {modalSlice} from "../../store/modalSlice";

export const functionalTerminalResponse = [
    {
        prompt: 'get-in-touch',
        action: () => {
            store.dispatch(
                modalSlice.actions.setContactVisible(true)
            )
        }
    }
]
