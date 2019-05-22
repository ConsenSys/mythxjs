export function errorHandler(err) {
    let status;
    let error;
    if (err.response && error.response.data) {
        status = err.response.data.status;
        error = err.response.data.status;
    }

    if (status && error) {
        throw new Error(`${status} ${error}`);
    } else {
        throw new Error(`MythxJS. Error with your request. ${err}`);
    }
}
