// Function to get the month name
// Function to get the month name
function getMonthName(monthNumber: number) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthNumber];
}


const creationDate = () => {
    const date = new Date()
    const month = getMonthName(date.getMonth());
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`
}


export {
    creationDate
}