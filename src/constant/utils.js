export const numberFormatter = (number) => {
    return Intl.NumberFormat('us').format(number).toString();
};

export const reverseArray = (arr) => {
    const newArr = [...arr];
    return newArr.reverse();
};

export function convertToB(numero) {
    const sufijos = ['', 'K', 'M', 'B', 'T'];

    const sufijoIndex = Math.floor(Math.log10(numero) / 3);
    const valorAbreviado = (numero / Math.pow(1000, sufijoIndex)).toFixed(2);
    if (numero === 0) {
        return 0;
    }

    return valorAbreviado + sufijos[sufijoIndex];
}
