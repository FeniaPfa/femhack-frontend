export const numberFormatter = (number) => {
    return Intl.NumberFormat('us').format(number).toString();
};
