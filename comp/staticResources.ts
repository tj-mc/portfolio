const getStatic = (fileName: string) => `https://s3-ap-southeast-2.amazonaws.com/tjmc.dev/${fileName}`

export const staticResources = {
    resume: getStatic('TomMcIntoshResume.pdf')
}
