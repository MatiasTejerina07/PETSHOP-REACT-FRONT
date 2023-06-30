export function parseError({ error }) {
    let newError = {}
    let pathArray = []
    if (error.response.status !== 401) {
        for (let item of error.response.data.message) {
            if (Array.isArray(item.path) && item.path.length > 1) {
                pathArray.push(item.path[1])
            }
            newError[item.path] = item.message
        }
        if (pathArray.length > 0) {
            let newMessage = `pages[${pathArray.toString()}] must be a valid url`
            newError["pages"] = newMessage
        }
    } else {
        newError = {
            unauthorized: "You don't have authorization for this action"
        }
    }
    return { newError }
}
