const garnishTypesMap: { [key: string]: string } = {
    beans: 'Фасоль',
    buckwheat: 'Гречка',
    cabbage: 'Капуста',
    otherVegetables: 'Другие овощи',
    pasta: 'Паста',
    potatoes: 'Картошка',
    rice: 'Рис',
    spaghetti: 'Спагетти',
} as const;

export const getGarnishTypes = (selectedItems: string[]) =>
    Object.entries(garnishTypesMap).map(([_, value]) => ({
        id: value,
        selected: selectedItems.includes(value),
        title: value,
    }));
