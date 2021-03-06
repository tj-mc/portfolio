import React, {FunctionComponent} from "react";

export const BlurContainer: FunctionComponent = ({children}) => {

    return (
        <>
            <div
                aria-hidden
                id={'blur-container'}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }}
            />
            <>
                {children}
            </>
        </>
    )

}
