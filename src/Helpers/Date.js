export const currentDate = (separator = "-") => {
    let todayDate = new Date();
    let day = todayDate.getDate();
    let month = todayDate.getMonth();
    let year = todayDate.getFullYear();
    let currentDay = `${year}${separator}${month}${separator}${day}`;

    return currentDay;
};
