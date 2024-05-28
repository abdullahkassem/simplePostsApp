// gets date passed since passed date
function getHoursPassed(dateStr) {
    let dateInMs;

    try {
        dateInMs = Date.parse(dateStr);
    } catch (error) {
        return 0;
    }

    const diffInMilliseconds = Date.now() - dateInMs;

    const diffInHours = diffInMilliseconds / (1000 * 60 * 60);

    return Math.floor(diffInHours);
}

export {getHoursPassed}