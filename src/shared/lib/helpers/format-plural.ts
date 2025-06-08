export const formatPlural = (count: number, forms: string[]) => {
    if (!Array.isArray(forms) || forms.length !== 3) {
        throw new Error('Для forms нужно передать массив ровно из трёх строк.');
    }

    const absCount = Math.abs(count);

    const n = absCount % 100;

    const lastDigit = n % 10;

    let formIndex;
    if (n > 10 && n < 20) {
        formIndex = 2;
    } else if (lastDigit === 1) {
        formIndex = 0;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        formIndex = 1;
    } else {
        formIndex = 2;
    }

    return `${count} ${forms[formIndex]}`;
};
