const isDev = process.env.ENV === 'dev'

const params = {}

export const constants = {
    isDev: isDev,
    ...params
}