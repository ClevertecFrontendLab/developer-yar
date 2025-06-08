export const formatDate = (iso: string) => {
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/;

    if (!isoRegex.test(iso)) {
        throw new Error(`Invalid ISO date string: "${iso}"`);
    }

    const date = new Date(iso);

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        month: 'long',
        timeZone: 'UTC',
    };

    let formatted = new Intl.DateTimeFormat('ru-RU', options).format(date);

    formatted = formatted.replace(',', '');

    return formatted;
};
