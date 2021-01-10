const getStatic = (path: string) => {
    if (typeof window !== 'undefined') {
        return `${window.location}static/` + path
    }
}

export const staticResources = {
    resume: getStatic('TomMcIntoshResume.pdf')
}
