const getStatic = (path: string) => `${window.location}static/` + path

export const staticResources = {
    resume: getStatic('TomMcIntoshResume.pdf')
}
