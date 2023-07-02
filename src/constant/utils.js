export const numberFormatter = (number) => {
    return Intl.NumberFormat('us').format(number).toString();
};

export const reverseArray = (arr) => {
    const newArr = [...arr];
    return newArr.reverse();
};
