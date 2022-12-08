export const currentDate = (separator = "-") => {
    let todayDate = new Date();
    let day = todayDate.getDate();
    let month = todayDate.getMonth() + 1;
    let year = todayDate.getFullYear();
    let currentDay = `${year}${separator}${month}${separator}0${day}`;

    return currentDay;
};
