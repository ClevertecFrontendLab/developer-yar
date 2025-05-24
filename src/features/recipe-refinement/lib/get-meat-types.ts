const meatTypesMap: { [key: string]: string } = {
    beef: 'Говядина',
    duck: 'Утка',
    pork: 'Свинина',
    turkey: 'Индейка',
    сhicken: 'Курица',
} as const;

export const getMeatTypes = (selectedItems: string[]) =>
    Object.entries(meatTypesMap).map(([_, value]) => ({
        id: value,
        selected: selectedItems.includes(value),
        title: value,
    }));
