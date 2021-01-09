const prefixPath = '.netlify/functions/'

const getFunc = (functionPath: string) => {
    return prefixPath + functionPath
}

export const serverFunctions = {
    contactSubmit: getFunc('contactSubmit')
}
